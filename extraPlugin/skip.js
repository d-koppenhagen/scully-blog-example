const { configValidator, registerPlugin } = require('@scullyio/scully');
const { log, yellow } = require('@scullyio/scully/utils/log');

const skipPlugin = async (route, options) => {
  /**
   * I don't do anything here,
   * just return an empty array
   * as that will effectively remove the route from the list
   *
   */
  log(`Skip Route "${yellow(route)}"`);
  return [];
};

registerPlugin('router', 'skip', skipPlugin);