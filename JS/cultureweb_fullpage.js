$(document).ready(function() {
    $('#fullpage').fullpage({
    // options
    autoScrolling:true,
    scrollHorizontally: true,
    // 네비게이션
    navigation : true,
    navigationPosition : 'right',
    // 링크
    anchors:['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu6'],
    // 배경색
    normalScrollElements:'.map_wrap flex', 
    normalScrollElements:".reserv_search",
    normalScrollElements:"#boardTbody",
    parallax:true
    }
    );
    });

    function notice_scroll(){
    $('#rolling_notice li:first').slideUp( function () { 
    $(this).appendTo($('#rolling_notice')).slideDown();
    });
    }
    setInterval(function(){notice_scroll()},3000);
