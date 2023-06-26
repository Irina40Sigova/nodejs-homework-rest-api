const express = require("express");

const crtl = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middelwares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, crtl.getAll);

router.get("/:contactId", authenticate, isValidId, crtl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), crtl.add);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  crtl.updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  crtl.updateFavorite
);

router.delete("/:contactId", authenticate, isValidId, crtl.deleteById);

module.exports = router;
