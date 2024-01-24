import DB from "./db.json" assert { type: "json" };

const getAllRecords = () => {
  try {
    // return all records from DB.
    return DB.records;
  } catch (error) {
    throw error;
  }
};

const getRecordById = (id) => {
  try {
    // Fetch record from DB
    const record = DB.records.find((record) => record.id === id);

    // check if record exists or not
    if (!record) {
      throw { status: 404, message: "Record not found" };
    }

    return record;
  } catch (error) {
    throw error;
  }
};

const getRecordForWorkout = (workoutId) => {
  try {
    // fetch record from DB
    const record = DB.records.filter((record) => record.workout === workoutId);

    // check if the record exists or not
    if (record.length === 0) {
      throw { status: 404, message: "Record not found" };
    }

    return record;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllRecords,
  getRecordById,
  getRecordForWorkout,
};
