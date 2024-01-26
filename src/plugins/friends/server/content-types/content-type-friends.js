
module.exports = { //We are exporing a JS object
  //1. p:v
  kind: 'collectionType',
  collectionName: 'friends',
  info: {
    singularName: 'content-type-friend', // kebab-case mandatory
    pluralName: 'content-type-friends', // kebab-case mandatory
    displayName: 'friend',
    description: 'friend ',
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
      type: 'string'
    },
  },
  //2. Method
};