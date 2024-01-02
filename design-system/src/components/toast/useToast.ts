import { useState } from "react";
import type {
  ToastActionElement,
  ToastCustomIcon,
  ToastProps,
} from "./ToastProvider";

const TOAST_REMOVE_DELAY = 3000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  customIcon?: ToastCustomIcon;
  position?: "top" | "bottom";
  limit?: number;
};

type Toast = Omit<ToasterToast, "id">;

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
      position: ToasterToast["position"];
      limit?: number;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
      position: ToasterToast["position"];
      limit?: number;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
  position: ToasterToast["position"];
  limit?: number;
}
let memoryState: State = { toasts: [], position: "bottom", limit: 1 };
let listener: React.Dispatch<React.SetStateAction<State>> | null = null;
let count = 0;
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    // eslint-disable-next-line no-use-before-define
    dispatch({
      type: "REMOVE_TOAST",
      toastId,
    });
  }, TOAST_REMOVE_DELAY);
  // clean up the timeout if the toast is dismissed before the timeout is reached
  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        position: action.position,
        toasts: [action.toast, ...state.toasts].slice(
          0,
          action.limit ?? state.limit
        ),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        position: action.position,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
    default:
      return state;
  }
};

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  if (listener) {
    listener(memoryState);
  }
}

function renderToast({ ...props }: Toast) {
  const id = genId();

  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
    position: props.position,
    limit: props.limit,
  });
}

function useToast() {
  const [state, setState] = useState<State>(memoryState);
  listener = setState;

  return {
    ...state,
    renderToast,
    update: (toast: ToasterToast) =>
      dispatch({
        type: "UPDATE_TOAST",
        toast,
        position: toast.position,
        limit: toast.limit,
      }),
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast };
