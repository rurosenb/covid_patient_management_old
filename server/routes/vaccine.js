const router=require('express').Router();

const vaccineControler=require('../controllers/vaccineController');

router.route("/")
.post(vaccineControler.addVaccineDetails)
.patch()
.delete();

router.get("/:id",vaccineControler.getVaccineDetails);


module.exports=router;