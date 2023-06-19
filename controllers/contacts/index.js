const { ctrlWrapper } = require("../../helpers");

const getAll = require("./getAllContacts");
const getById = require("./getContactById");
const add = require("./addContact");
const deleteById = require("./removeContact");
const updateById = require("./updateContact");
const updateFavorite = require("./updateFavorite");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  updateFavorite: ctrlWrapper(updateFavorite),
  deleteById: ctrlWrapper(deleteById),
};
