const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const { error } = schema.validate(req[property], { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
      return;
    }
    next();
    // error ? boom.badRequest(error) : next();
  };
}

module.exports = validatorHandler;