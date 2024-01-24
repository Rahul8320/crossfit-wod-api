import recordService from "../services/recordService.js";

const getAllRecords = (_req, res) => {
  try {
    const allRecords = recordService.getAllRecords();

    return res.status(200).json({
      status: 200,
      data: allRecords,
      message: "Records fetch successfully.",
    });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ status: error.status || 500, message: error.message });
  }
};

const getRecordById = (req, res) => {
  try {
    const recordId = req.params.recordId;
    const record = recordService.getRecordById(recordId);

    return res.status(200).json({
      status: 200,
      data: record,
      message: "Record fetch successfully",
    });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ status: error.status || 500, message: error.message });
  }
};

export default { getAllRecords, getRecordById };
