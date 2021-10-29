const response = (status, data, mess, code) => {
    return {
      status,
      data,
      message: mess,
      code: code || 200
    }
  }
  
  const fail = (status ,error, mess, code) => {
    return {
      status: status,
      error,
      mess,
      code: code || 500
    }
  }
  
  module.exports = { response, fail }
  