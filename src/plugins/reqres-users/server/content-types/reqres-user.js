
module.exports = {
    kind: 'collectionType',
    collectionName: 'ReqResUser',
    info: {
      singularName: 'reqresuser',            // kebab-case mandatory
      pluralName: 'reqresusers',             // kebab-case mandatory
      displayName: 'ReqResUsers',
      description: 'ReqResUsers',
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
      email: {
        type: 'string',
      },
      firstname: {
        type: 'string',
      },
      lastname: {
        type: 'string',
      },
      avatar: {
        type: 'string',
      },
    }
  };