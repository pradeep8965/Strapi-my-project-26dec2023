
module.exports = {
    kind: 'collectionType',
    collectionName: 'CustomPlugin',
    info: {
      singularName: 'customplugin',            // kebab-case mandatory
      pluralName: 'customplugins',             // kebab-case mandatory
      displayName: 'CustomPlugin',
      description: 'CustomPlugins',
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
      mobile: {
        type: 'string',
      },
      gender: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
    }
  };