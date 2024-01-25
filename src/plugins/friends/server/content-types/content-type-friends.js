
module.exports = { // we are exporting a JS Onject
    //1. P:V
    kind: 'collectionType',
    collectionName: 'friend',
    info: {
      singularName: 'content-type-friend', // kebab-case mandatory
      pluralName: 'content-type-friends', // kebab-case mandatory
      displayName: 'Friend',
      description: 'Friend',
    },
    options: {
      draftAndPublish: false,
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
      //2. Method
    }
  };