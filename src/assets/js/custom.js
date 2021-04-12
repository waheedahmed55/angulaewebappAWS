/* $(document).ready(function(){
	$('.nav-btn, .navclose').click(function (e) {
		if ($('.sidebar-nav').hasClass("nav-full")) {
			$('.sidebar-nav').removeClass("nav-full");
			$.cookie("menu_type", "");
			$('body').removeClass('no-scroll');
		} else {
			$('.sidebar-nav').addClass("nav-full");
			$.cookie("menu_type", "nav-full");
			$('body').addClass('no-scroll');
		}
	});
	$(".nav-btn").click(function(){
		$("#main").toggleClass("main-space");
		$("footer").toggleClass("main-space");
	});


	$(".sidebar-nav").hover(function () {
		$(this).toggleClass("hover_slider-menu");
	});

	$(".navbar-nav > li.nav-item .active").focus();
});*/

$(document).ready(function(){
    var coll = document.getElementsByClassName("collapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight){
		content.style.maxHeight = null;
		} else {
		content.style.maxHeight = content.scrollHeight + "px";
		} 
	});
	}
  });	

	
