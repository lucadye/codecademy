'use strict';

var utils = require('../utils/writer.js');
var UpdateOrder = require('../service/UpdateOrderService');

module.exports.put_updateid = function put_updateid (req, res, next, id) {
  UpdateOrder.put_updateid(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
