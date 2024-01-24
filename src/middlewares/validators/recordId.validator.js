export const recordIdValidator = {
  recordId: {
    in: ["params"],
    notEmpty: {
      errorMessage: "Record ID cannot be empty",
    },
    isUUID: {
      errorMessage: "Invalid Record ID. Please enter a valid record ID",
    },
  },
};
