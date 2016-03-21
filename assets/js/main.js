(function() {

	smoothScroll.init({
	    speed: 500,
	    easing: 'easeOutCubic',
	    updateURL: false
	});
	
	var contact_form = document.forms.contact_form;
	var contact_section = document.getElementById('contact');

	contact_form.onsubmit = function(e) {
		e.preventDefault();

		contact_section.className = 'form-sending';

		minAjax({
		    url: "https://formspree.io/contact@thesugarmag.com",
		    method: "POST",
		    type: "json",
		    data: {
		      name: contact_form.name.value,
		      _replyto: contact_form.replyto.value,
		      message: contact_form.message.value,
		      _gotcha: contact_form._gotcha.value
		    },
		    success: function(data){
		      contact_section.className = 'form-sent';
		    },
		    stateChange: function(data, state){
		      // contact_section.className = 'form-sending';
		    }
		});
	};

})();
