$(function(){
		setSizeAlerts();
	  	$(window).resize(function(){
			setSizeAlerts();
		});
	 });

	function setSizeAlerts() {
		if ($(window).width() <= 768){	
			$('nav').removeClass("sticky");
		}	
		if ($(window).width() > 768){	
			$(window).scroll(function() {
            if ($(this).scrollTop() > 1){  
                $('nav').addClass("sticky");
              }
              else{
                $('nav').removeClass("sticky");
              }
            });
		}
	}