const express = require("express");
const router = express.Router();
const  {getContacts} = require("../controllers/contactController");
const  {createContact} = require("../controllers/contactController");
const  {updateContact} = require("../controllers/contactController");
const  {getContactDetail} = require("../controllers/contactController");
const  {deleteContact} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");
router.use(validateToken);
router.route("/").post(createContact);
router.route("/").get(getContacts);
router.route("/:id").get(getContactDetail).put(updateContact).delete(deleteContact);
//router.route("/:id").put(updateContact);
//router.route("/:id").delete(deleteContact);

module.exports = router;