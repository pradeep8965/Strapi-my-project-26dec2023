'use strict';
const contentTypeFriedns = require('./content-type-friends');

module.exports = {
    'content-type-friend': { schema: contentTypeFriedns }, // should re-use the singularName of the content-type
};
