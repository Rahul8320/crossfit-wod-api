export const workoutIdValidator = {
  workoutId: {
    in: ["params"],
    notEmpty: {
      errorMessage: "Workout ID cannot be empty",
    },
    isUUID: {
      errorMessage: "Invalid Workout ID. Please enter a valid workout ID",
    },
  },
};
