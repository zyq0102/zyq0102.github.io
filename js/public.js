//$(function() {
//	$('nav#mmenu').mmenu({
//		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
//		counters	: false,
//		navbar 		: {
//			title		: '菜单',
//		},
//		navbars		: [
//			 {
//				position	: 'top',
//				content		: [
//					'prev',
//					'title',
//					'close'
//				]
//			}, {
//				position	: 'bottom',
//				content		: [
//					''
//				]
//			} 
//		]
//	});
//});

  ;(function($){

	$.extend({

		'dropdpwn_Menu' : function(nName){

			$(nName).css('display','none');
			$(nName).parent('li').hover(function() {
				$(this).children(nName).stop(true, true).slideDown(200);
			}, function() {
				$(this).children(nName).stop(true, true).slideUp(200);
			});

			return this;
		},
		
	})
	
})(jQuery);


$(document).ready(function() {
		
	/*Jquery Mmenu*/
	$("#mmenu").mmenu({
		"extensions": [
        	"effect-menu-slide",
        	"effect-listitems-slide",
            "pagedim-black"
        ],
		"offCanvas": {
			position: "right"
		}
	}).css("opacity","1");
	
	$.dropdpwn_Menu(".nav > ul > li > ul");

});





//清除冒泡事件
$(".job-conwrap").click(function(event){
	$(this).show();
	event.stopPropagation();
})




/*
		----------------------------------------------------------------------------------------
		娴忚鍣ㄧ増鏈帴鍙�
		浣跨敤锛� 
		if (getIEVersion() == "IE8") alert("yes!");
		----------------------------------------------------------------------------------------
	*/

	function getIEVersion(){

		if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0") { 
			return "IE6";
		} 

		else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0") { 
			return "IE7";
		} 

		else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0") { 
			return "IE8";
		} 

		else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0") { 
			return "IE9";
		} 

	}









