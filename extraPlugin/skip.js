const { registerPlugin, log, yellow } = require('@scullyio/scully');

/**
 * handle routes
 * @param {HandledRoute} route the rout configuration
 * @param {object} config
 */
function skipPlugin(route, config = {}) {
  /**
   * I don't do anything here,
   * just return an empty array
   * as that will effectively remove the route from the list
   *
   */
  log(`Skip Route "${yellow(route)}"`);
  return Promise.resolve([]);
}

/**
 * optional: validate config
 */
const validator = async conf => [];

/**
 * register the plugin
 */
registerPlugin('router', 'skip', skipPlugin, validator);

/**
 * export the module
 */
module.exports.skipPlugin = skipPlugin;
