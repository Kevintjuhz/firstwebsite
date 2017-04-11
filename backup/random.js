$(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('navbar-fixed-top');
            $('.navbar-inverse').css({
                "background-color":"#fdfdfd"  
            });
            
            $('.navbar-inverse .navbar-brand').css({
                "color":"black"  
            });
            console.log
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
            $('.navbar-inverse').css({
               "background-color":"transparent" 
            });
            $('.navbar-inverse .navbar-brand').css({
                "color":"#d4d4d4"  
            });
        }
    });

