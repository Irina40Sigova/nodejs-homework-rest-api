const express = require("express");

const crtl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middelwares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", crtl.getAll);

router.get("/:contactId", isValidId, crtl.getById);

router.post("/", validateBody(schemas.addSchema), crtl.add);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  crtl.updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  crtl.updateFavorite
);

router.delete("/:contactId", isValidId, crtl.deleteById);

module.exports = router;
