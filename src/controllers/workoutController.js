import workoutService from "../services/workoutService.js";

const getAllWorkouts = (_req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();

  return res.status(200).json({
    status: 200,
    data: allWorkouts,
    message: "Workouts successfully fetched",
  });
};

const getWorkoutById = (req, res) => {
  const workoutId = req.params.workoutId;
  const workout = workoutService.getWorkoutById(workoutId);

  if (workout === null) {
    return res.status(404).json({
      status: 404,
      data: {},
      message: "Workout not found",
    });
  }

  res.status(200).json({
    status: 200,
    data: workout,
    message: "Workout successfully fetched",
  });
};

const createNewWorkout = (req, res) => {
  const { name, mode, equipment, exercises, trainerTips } = req.body;

  if (!name || !mode || !equipment || !exercises || !trainerTips) {
    return res
      .status(400)
      .json({ status: 400, error: "Required filed cannot be empty." });
  }

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
      data: {},
      message: "Workout already exists!",
    });
  }

  return res.status(201).json({
    status: 201,
    data: createdWorkout,
    message: "Workout created successfully!",
  });
};

const updateWorkoutById = (_req, res) => {
  workoutService.updateWorkoutById();
  return res.status(200).json({ message: "Update an existing workout" });
};

const deleteWorkoutById = (_req, res) => {
  workoutService.deleteWorkoutById();
  return res.status(200).json({ message: "Delete an existing workout" });
};

export default {
  getAllWorkouts,
  getWorkoutById,
  createNewWorkout,
  updateWorkoutById,
  deleteWorkoutById,
};
