(function($,W,D){
    var JQUERY4U = {};
    JQUERY4U.UTIL = {
	setupFormValidation: function(){
	    $("#register-form").validate({
		rules: {
		    firstname: "required",
		    lastname: "required",
		    email: {
			required: true,
			email: true
		    },
		    comments: {
			required: true
		    }
		},
		messages: {
			firstname: "Please enter your firstname",
			lastname: "Please enter your lastname",
			comments: {
				required: "Please provide a comments",
			},
			email: "Please enter a valid email address",
		},
	    submitHandler: function(form) {
	        form.submit();
	    }
        });
    }
}
$(D).ready(function($) {
	JQUERY4U.UTIL.setupFormValidation();
	});
})(jQuery, window, document);
