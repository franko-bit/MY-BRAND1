const Joi = require("@hapi/joi");
const QuerySchema = Joi.object({
  fname: Joi.string().required().min(2),
  Email: Joi.string().email().required().min(5),
  phone: Joi.string().required().min(5),
  subject: Joi.string().required().min(5),
  message: Joi.string().required().min(5),
});
module.exports = {
  QuerySchema,
};
