/*=============================
==================Navbar====
==============================*/




$(document).ready(function(){


  function google_search(srchInputElm){

            var keyword = srchInputElm.val().trim().toLowerCase().replace(/\s/g,'+');

            if(keyword==''){

                    srchInputElm.css({'background':'#FF9','color':'#444'}).focus()

            }else{

                    var URL = '#='+keyword+'&cx='+encodeURIComponent('partner-pub-2223768610047094:9011468279')+'&cof='+encodeURIComponent('FORID:10')+'&ie=UTF-8&sa=Search'; 

                    window.location.href = URL;

            }

    }  
            $(".Section-Nav ul.nav_list li").hover(function(){
                    
                    $(this).find(".header_hover_bottom_menu").show();
                    $(this).find(".down_arrow").show();
                    }, function(){
                    $(this).find(".header_hover_bottom_menu").hide()
                    $(this).find(".down_arrow").hide()
            });

            
                    $('.search_button').click(function(){
                            google_search($('.srch_keyword'));
                    });
                    $('.srch_keyword').keypress(function(e) {
                            var p = e.which;
                            if(p==13) google_search($(this));
                    });

            //}

    $('#src_icon').click(function(){
            //$('div.main_menu').hide();
            $('div.search_box').show();
    });
    $('.cross_btn').click(function(){
    //$('div.main_menu').show();
    $('div.search_box').hide();
    });
  // Sticky function
    $(window).bind('scroll', function() {
  if ($(window).scrollTop() > 120) {
    $('#head_nav').css({'position':'fixed','width':'100%','background':'#fff'});
    $('#head_nav').addClass("sticky");
    $('.sticky_home').show();
    $('#src_icon').hide();
    $('#all_menu').hide();
  } else {
    $('#head_nav').removeClass("sticky");
    $('#head_nav').css({'position':'relative','width':'100%'});
            $('.sticky_home').hide();
            $('#src_icon').show();
            $('#all_menu').show();

  }
  });
  });
  $('li#all_menu').click(function(){
                    //$('div.menu_category').toggle();
                    icon = $(this).find("i");
                    if($(icon).hasClass( "fa-times" )){
                            icon.addClass('fa-bars');
                            icon.removeClass('fa-times');
                    }else{
                            icon.removeClass('fa-bars');
                            icon.addClass('fa-times');
                    }
                    if($('.megaMenuWrapper').css('display')=='none')
                            $('.megaMenuWrapper').toggle('fast');
                    else
                            $('.megaMenuWrapper').hide();
            });

    $(document).ready(function(){
            $('div.sidenav ul li').click(function(){
                    $(this).find('ul').toggle();
            });
    });
    function openNav() {
            document.getElementById("mySidenav").style.width = "300px";
            document.getElementById("content_area").style.marginLeft = "300px";
    }

    function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("content_area").style.marginLeft= "0";
    }






    $('.tab_bar_block_new li').on('click',function(){

        if(!$(this).hasClass('active')){

            var tabIndex = $(this).attr('tabIndex');

            $('.tab_bar_block_new li').removeClass('active');

            $(this).addClass('active');

            $('.list_display_block1').hide();

            $('#' + tabIndex).show();

        }

    });



    jQuery('#test1').mCustomScrollbar({

        height: 270,
        autoHideScrollbar:true

    });

    jQuery('#mostview1').mCustomScrollbar({

        height: 270,
        autoHideScrollbar:true

    });



    $(".editor_picks_list").hover(function(){

        $(this).find('.displayTime').show();

    },function(){

        $(this).find('.displayTime').hide();

    });




    