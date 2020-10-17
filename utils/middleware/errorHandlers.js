const { config } = require('../../config')

function withErrorStack(err, stack) {
  if (config.dev) {
    return { err, stack }
  }

  return err
}

function logErrors(err, req, res, next) {
  console.log(err)
  next(err)
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  res.status(err.status || 500)
  res.json(withErrorStack(err.message, err.stack))
}

module.exports = {
  logErrors,
  errorHandler,
}