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
    sectionsColor: ["", "", "green", "blue", "red", "purple"],
    normalScrollElements:'#map', 
    normalScrollElements:".reserv_search",
    }
    );
    });