'use strict';

var utils = require('../utils/writer.js');
var NewOrder = require('../service/NewOrderService');

module.exports.post_neworder = function post_neworder (req, res, next, body) {
  NewOrder.post_neworder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
