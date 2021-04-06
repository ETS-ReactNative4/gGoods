const Joi = require('joi')

module.exports = {
  payload: Joi.object({
    input: Joi.object({
      email: Joi.string().required(),
      emailContent: Joi.object().required()
    })
  }).options({ stripUnknown: true })
}
