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
			required: true,
			notEqual: "Enter your comments here..."
		    }
		},
		messages: {
			firstname: "Please enter your firstname",
			lastname: "Please enter your lastname",
			comments: {
				required: "Please provide a comments",
				notEqual: "Come on man! You actually need to enter some comments."
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

jQuery.validator.addMethod("notEqual", function(value, element, param) {
  return this.optional(element) || value != param;
});
