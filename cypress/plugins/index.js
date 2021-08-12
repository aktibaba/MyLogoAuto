/// <reference types="cypress" />

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
};
