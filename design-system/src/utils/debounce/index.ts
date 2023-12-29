export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  timer = 300
) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => func(...args), timer);
  };
};
