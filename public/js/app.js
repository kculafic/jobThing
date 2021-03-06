$(document).ready(function() {
  'use strict';

  $('.modal-trigger').leanModal();
  $('.collapsible').collapsible({
    accordion: false
  });

  window.QUERY_PARAMETERS = {};

  if (window.location.search) {
    window.location.search.substr(1).split('&').forEach((paramStr) => {
      const param = paramStr.split('=');

      window.QUERY_PARAMETERS[param[0]] = param[1];
    });
  }
});
