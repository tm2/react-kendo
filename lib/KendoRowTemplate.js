var React = require('react');

var KendoRowTemplate = function (component) {
  var container = document.createElement('tbody');
  React.render(React.cloneElement(component), container);
  return $(container).html();
};

module.exports = KendoRowTemplate;
