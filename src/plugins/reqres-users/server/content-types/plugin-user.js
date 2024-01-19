
module.exports = {
    kind: 'collectionType',
    collectionName: 'PluginUser',
    info: {
      singularName: 'pluginuser',            // kebab-case mandatory
      pluralName: 'pluginusers',             // kebab-case mandatory
      displayName: 'PluginUsers',
      description: 'PluginUsers',
    },
    options: {
      draftAndPublish: true,
    },
    pluginOptions: {
      'content-manager': {
        visible: true,
      },
      'content-type-builder': {
        visible: true,
      }
    },
    attributes: {
      name: {
        type: 'string',
      },
      surname: {
        type: 'string',
      },
      mobile: {
        type: 'string',
      },
      address: {
        type: 'string',
      },
    }
  };