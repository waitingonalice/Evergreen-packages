import { forwardRef } from "react";
import { Text } from "../components";

export interface ErrorProps {
  showError?: boolean;
  errorMessage?: string;
}

const Error = ({ errorMessage }: Pick<ErrorProps, "errorMessage">) => (
  <span>
    <Text type="caption" className="text-error-main">
      {errorMessage}
    </Text>
  </span>
);

export const withError = <C,>(Component: React.FC<C>) => {
  const withErrorComponent = forwardRef((props: ErrorProps & C, ref) => {
    const { showError, errorMessage } = props;

    if (!showError || !errorMessage) return <Component {...props} ref={ref} />;

    return (
      <div className="flex flex-col gap-y-1">
        <Component {...props} ref={ref} />
        <Error errorMessage={errorMessage} />
      </div>
    );
  });
  withErrorComponent.displayName = Component.displayName;
  return withErrorComponent;
};
