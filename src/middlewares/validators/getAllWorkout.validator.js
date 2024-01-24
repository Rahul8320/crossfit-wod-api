export const getAllWorkoutsValidator = {
  mode: {
    in: ["query"],
    notEmpty: {
      errorMessage: "Mode cannot be empty",
    },
    custom: {
      options: (value) => {
        if (isNumber(value)) {
          throw new Error("Mode cannot be a number!");
        }

        if (value.toString().trim().length === 0) {
          throw new Error("Mode cannot be an empty string!");
        }
        return true;
      },
    },
  },
  equipment: {
    in: ["query"],
    notEmpty: {
      errorMessage: "Equipment cannot be empty",
    },
    custom: {
      options: (value) => {
        if (isNumber(value)) {
          throw new Error("Equipment cannot be a number!");
        }

        if (value.toString().trim().length === 0) {
          throw new Error("Equipment cannot be an empty string!");
        }
        return true;
      },
    },
  },
  pageSize: {
    in: ["query"],
    notEmpty: {
      errorMessage: "Page Size cannot be empty",
    },
    custom: {
      options: (value) => {
        if (!isNumber(value)) {
          throw new Error("Page Size must be a number!");
        }
        const numberValue = parseInt(value, 10);
        if (numberValue <= 0) {
          throw new Error("Page Size must be greater than 0!");
        }
        return true;
      },
    },
  },
  pageNum: {
    in: ["query"],
    notEmpty: {
      errorMessage: "Page Number cannot be empty",
    },
    custom: {
      options: (value) => {
        if (!isNumber(value)) {
          throw new Error("Page Number must be a number!");
        }
        const numberValue = parseInt(value, 10);
        if (numberValue <= 0) {
          throw new Error("Page Number must be greater than 0!");
        }
        return true;
      },
    },
  },
};

const isNumber = (value) =>
  typeof value === "string" && !isNaN(parseInt(value, 10));
