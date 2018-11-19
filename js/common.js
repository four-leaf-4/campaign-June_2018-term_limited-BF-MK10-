/*---------------------------------------------
	scrollin
  ---------------------------------------------*/

(jQuery)(function($) {
    $(window).scroll(function (){
        $('div[class^=lamp_icon]').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
			if( scroll == 0 ){
				$(this).removeClass('scrollin');
			}
            else if (scroll > elemPos - windowHeight ){
                $(this).addClass('scrollin');
            }
        });
    });
});

/*---------------------------------------------
	fadein
  ---------------------------------------------*/
(jQuery)(function($) {
    $(window).scroll(function (){
        $('div[class^=multi_use_scene_txt]').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
			if( scroll == 0 ){
			$(this).removeClass('fadein');
			}
            else if (scroll > elemPos - windowHeight ){
            $(this).addClass('fadein');
            }
        });
    });
});

/*---------------------------------------------
	slidein
  ---------------------------------------------*/
(jQuery)(function($) {
    $(window).scroll(function (){
        $('.catalog .catalog_function').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
			if( scroll == 0 ){
			$(this).removeClass('slidein');
			}
            else if (scroll > elemPos - windowHeight ){
            $(this).addClass('slidein');
            }
        });
    });
});
