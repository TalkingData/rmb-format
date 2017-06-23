module.exports = function (value) {
  return value.toString().indexOf('.') > 0 ?
  value.toString().replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
   : value.toString().replace(/\B(?=(\d{3})+$)/g, ',');
};
