var Model = require('ampersand-model');


module.exports = Model.extend({
    props: {
        id: 'string',
        content: 'string',
        createdAt: ['date', true, function () {
            return new Date()
        }],
        user: 'object'
    },
    ajaxConfig: function () {
        if (!app.me.loggedIn) {
            return {};
        }

        return {
            headers: {
                'Auth-Token': app.me.token
            }
        }
    }
});
