type AssertIsDefined<T> = (val: T) => asserts val is NonNullable<T>;

export const assertIsDefined: AssertIsDefined<unknown> = (val) => {
  if (val === undefined || val === null) {
    throw new Error(`Expected 'val' to be defined, but received ${val}`);
  }
};
