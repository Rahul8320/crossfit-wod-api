export const createWorkoutValidator = {
  name: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Name can not be empty",
    },
    isLength: {
      options: { min: 5 },
      errorMessage: "Name must be at least 5 characters long",
    },
  },
  mode: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Mode can not be empty",
    },
    isLength: {
      options: { min: 5 },
      errorMessage: "Mode must be at least 5 characters long",
    },
  },
  equipment: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Equipment can not be empty",
    },
    isArray: {
      errorMessage: "Equipment must be an array.",
    },
    isLength: {
      options: { min: 1 },
      errorMessage: "Equipment must have at least 1 value",
    },
    custom: {
      options: (value) => {
        if (!Array.isArray(value) || value.length === 0) {
          throw new Error("Equipment must have at least one value");
        }
        return true;
      },
    },
  },
  exercises: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Exercises can not be empty",
    },
    isArray: {
      errorMessage: "Exercises must be an array.",
    },
    custom: {
      options: (value) => {
        if (!Array.isArray(value) || value.length === 0) {
          throw new Error("Exercises must have at least one value");
        }
        return true;
      },
    },
  },
  trainerTips: {
    in: ["body"],
    notEmpty: {
      errorMessage: "TrainerTips can not be empty",
    },
    isArray: {
      errorMessage: "TrainerTips must be an array.",
    },
    custom: {
      options: (value) => {
        if (!Array.isArray(value) || value.length === 0) {
          throw new Error("TrainerTips must have at least one value");
        }
        return true;
      },
    },
  },
};
