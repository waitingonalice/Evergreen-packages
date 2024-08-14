const isPrimitive = <T>(o: T) => {
  switch (typeof o) {
    case "object": {
      return false;
    }
    case "function": {
      return false;
    }
    default: {
      return true;
    }
  }
};

const isFunction = <T>(o: T) => typeof o === "function";

export { isPrimitive, isFunction };
