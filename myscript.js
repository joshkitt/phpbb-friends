var friends = [];

// find profiles of friends and turn profile background green
var profiles = $('.postprofile > dt > a');
profiles.each(function() {
	if (jQuery.inArray($(this).text(), friends) != -1) {
		$(this).parent().parent().css("background-color", "green");
	}
});
