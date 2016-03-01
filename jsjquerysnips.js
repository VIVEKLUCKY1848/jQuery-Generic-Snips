//No conflict with condition if the jQuery exists in the page.
if(window.jQuery && typeof jQuery != 'undefined') {
	jQuery.noConflict();
	var $jq = jQuery.noConflict();
}
