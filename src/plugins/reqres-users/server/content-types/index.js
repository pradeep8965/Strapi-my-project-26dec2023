'use strict';
const ReqResUser = require('./reqres-user'); // using kebab-case
const PluginUser = require('./plugin-user'); // using kebab-case
const CustomPlugin = require('./custom-plugin'); // using kebab-case


module.exports = {
    'reqresuser': { schema: ReqResUser }, // should re-use the singularName of the content-type
    'pluginuser': { schema: PluginUser }, // should re-use the singularName of the content-type
    'customplugin': { schema: CustomPlugin }, // should re-use the singularName of the content-type
};
