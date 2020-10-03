const Joi = require("joi");
const authSchema = Joi.object({
  photo: Joi.string(),
  title: Joi.string().required().min(2),
  article: Joi.string().required().min(2),
});
module.exports = {
  authSchema,
};
