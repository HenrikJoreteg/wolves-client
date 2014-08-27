var Collection = require('ampersand-rest-collection');
var Howl = require('./howl');


module.exports = Collection.extend({
    initialize: function () {
        var self = this;

        this.fetch();
        setInterval(function () {
            self.fetch();
        }, 5000);
    },
    model: Howl,
    url: 'http://wolves.technology/howls',
    comparator: function (model) {
        return -model.createdAt.valueOf();
    }
});
