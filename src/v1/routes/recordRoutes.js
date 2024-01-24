import express from "express";
import { checkSchema } from "express-validator";
import { validate } from "../../middlewares/validate.js";
import recordController from "../../controllers/recordController.js";
import { recordIdValidator } from "../../middlewares/validators/recordId.validator.js";

const router = express.Router();

router.get("/", recordController.getAllRecords);

router.get(
  "/:recordId",
  checkSchema(recordIdValidator),
  validate,
  recordController.getRecordById
);

export default router;
