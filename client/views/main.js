var View = require('ampersand-view');
var templates = require('../templates');
var ViewSwitcher = require('ampersand-view-switcher');


module.exports = View.extend({
    template: templates.body,
    autoRender: true,
    events: {
        'click a[href]': 'handleLinkClick'
    },
    initialize: function () {
        this.listenTo(app.router, 'page', this.handleNewPage);
    },
    render: function () {
        this.renderWithTemplate();

        var pageContainer = this.queryByHook('page-container');
        this.pageSwitcher = new ViewSwitcher(pageContainer);
    },
    handleLinkClick: function (event) {
        var target = event.target;
        var isLocal = target.host === window.location.host;

        if (isLocal && !event.altKey && !event.metaKey && !event.shiftKey && !event.ctrlKey) {
            e.preventDefault();
            app.router.history.navigate(target.pathname, {trigger: true});
        }
    },
    handleNewPage: function (pageView) {
        this.pageSwitcher.set(pageView);
    }
});
