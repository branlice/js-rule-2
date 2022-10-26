export const EQUAL_OPERATION = "equal";
export const OperationEqualModel = {
  type: "number",
  operation: EQUAL_OPERATION,
  description: "Checks if the value is equal to the given number.",
  create(value: number) {
    return {
      type: "operation",
      name: EQUAL_OPERATION,
      args: [value],
    };
  },
  execute(value: number, compare: number) {
    return value === compare;
  },
};
