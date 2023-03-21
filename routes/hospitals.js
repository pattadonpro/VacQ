const express = require("express");
const router = express.Router();
const {
  getHospital,
  getHospitals,
  createHospital,
  updateHospital,
  deleteHospital,
  getVacCenters,
} = require("../controllers/hospital");
const appointmentRouter = require("./appointments");
const { protect, authorize } = require("../middleware/auth");

router.use("/:hospitalId/appointments/", appointmentRouter);

router.route("/vacCenters").get(getVacCenters);

router.route("/").get(getHospitals).post(protect, authorize("admin"), createHospital);
router.route("/:id").get(getHospital).put(protect, authorize("admin"), updateHospital).delete(protect, authorize("admin"), deleteHospital);

module.exports = router;
