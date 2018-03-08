var Router = Backbone.Router.extend({
	routes: {
	  '': '_updateContent',
	  ':page': '_updateContent'
	},
	
	initialize: function() {
	  this.bind('route', this._onRoute);
	},

	_onRoute: function() {
	  var viewId = Backbone.history.getFragment();
	  if (typeof adobe != 'undefined' && adobe.target && typeof adobe.target.triggerView === 'function') {
		adobe.target.triggerView(viewId); // triggers new view  
	  }
	},
	
	_updateContent: function(page) {
	  page = page || '';	
      $('.nav > li.active').removeClass('active');
      $('.nav a[href=#' + page + ']').closest('li').addClass('active');
	  $('.content').html($('.templates script[type=x-tmpl][data-nav-section=#' + page + ']').html());
      if ($('.nav > li.active').length === 0) {
        location.hash = '#';
      }
    }
});