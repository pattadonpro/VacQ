const express = require("express");
const router = express.Router();
const {
  getHospital,
  getHospitals,
  createHospital,
  updateHospital,
  deleteHospital,
} = require("../controllers/hospital");

router.route("/").get(getHospitals).post(createHospital);
router.route("/:id").get(getHospital).put(updateHospital).delete(deleteHospital);

module.exports = router;
