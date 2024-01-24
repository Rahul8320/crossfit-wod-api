import workoutService from "../services/workoutService.js";

const getAllWorkouts = (_req, res) => {
  try {
    const allWorkouts = workoutService.getAllWorkouts();

    return res.status(200).json({
      status: 200,
      data: allWorkouts,
      message: "Workouts successfully fetched",
    });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message });
  }
};

const getWorkoutById = (req, res) => {
  try {
    const workoutId = req.params.workoutId;
    const workout = workoutService.getWorkoutById(workoutId);

    if (workout === null) {
      return res.status(404).json({
        status: 404,
        message: "Workout not found",
      });
    }

    res.status(200).json({
      status: 200,
      data: workout,
      message: "Workout successfully fetched",
    });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message });
  }
};

const createNewWorkout = (req, res) => {
  try {
    const { name, mode, equipment, exercises, trainerTips } = req.body;

    const newWorkout = {
      name,
      mode,
      equipment,
      exercises,
      trainerTips,
    };

    const createdWorkout = workoutService.createNewWorkout(newWorkout);

    if (createdWorkout === null) {
      return res.status(409).json({
        status: 409,
        message: "Workout already exists!",
      });
    }

    return res.status(201).json({
      status: 201,
      data: createdWorkout,
      message: "Workout created successfully!",
    });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message });
  }
};

const updateWorkoutById = (req, res) => {
  try {
    const workoutId = req.params.workoutId;
    const { name, mode, equipment, exercises, trainerTips } = req.body;

    const workout = {
      name,
      mode,
      equipment,
      exercises,
      trainerTips,
    };

    const updatedWorkout = workoutService.updateWorkoutById(workoutId, workout);

    // check for null response
    if (updatedWorkout === null) {
      return res.status(404).json({
        status: 404,
        message: "Workout not found",
      });
    }

    return res.status(200).json({
      status: 200,
      data: updatedWorkout,
      message: "Workout updated successfully.",
    });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message });
  }
};

const deleteWorkoutById = (req, res) => {
  try {
    const workoutId = req.params.workoutId;

    const isDeleted = workoutService.deleteWorkoutById(workoutId);

    if (isDeleted === null) {
      return res
        .status(404)
        .json({ status: 404, message: "Workout not found!" });
    }

    return res
      .status(200)
      .json({ status: 200, message: "Workout deleted successfully." });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message });
  }
};

export default {
  getAllWorkouts,
  getWorkoutById,
  createNewWorkout,
  updateWorkoutById,
  deleteWorkoutById,
};
