$(function() {
	var cartStep;
	var triggerViewChange = function(viewId) {
	  if (adobe && adobe.target && typeof adobe.target.triggerView === 'function') {
		adobe.target.triggerView(viewId);
	  }
	};
	
    var onViewCartClick = function() {
      $('#cart').remove();
      var $cart = $($('.templates script[type=x-tmpl].modal-template').html()).appendTo('body');
      $cart.attr('id', 'cart');
      $('#cart').modal();
      
      cartStep = 0;
      var renderStep = function() {
        var $tmpl = $('.templates script[type=x-tmpl].modal-step-content[data-index="' + cartStep + '"');
        $('#cart .modal-content').html($tmpl.html());
        triggerViewChange($tmpl.attr('data-view'));
      };
      $('#cart').delegate('.btn-previous', 'click', function() {
        if (cartStep > 0) {
          cartStep--;
          renderStep();
        }
      });
      $('#cart').delegate('.btn-next', 'click', function() {
        if (cartStep < 2) {
          cartStep++;
          renderStep();
        }
      });
      renderStep();
    };
	
	$('#view-cart-button').click(onViewCartClick);
});