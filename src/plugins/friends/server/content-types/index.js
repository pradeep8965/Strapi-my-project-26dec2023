'use strict';
const contentTypeFriend = require('./content-type-friends');
module.exports = {
    'content-type-friend': { schema: contentTypeFriend }, // should re-use the singularName of the content-type
};