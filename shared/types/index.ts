export type PrimitiveType = string | number;

export type Maybe<T> = T | null;

export type ExtractClassProperties<C> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [Key in keyof C as C[Key] extends Function ? never : Key]: C[Key];
};
