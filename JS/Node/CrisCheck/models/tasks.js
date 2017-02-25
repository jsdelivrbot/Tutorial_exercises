/********************
* Data model module
**********************/

module.exports = app => {
  return {
    findAll: (params, cb) => {
      return cb([
        {"title": "go somewhere else"},
        {"title": "then comeback"}
      ]);
    }
  }
}
