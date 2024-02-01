//jQuery
//$(document) - 태그 찾기
//$('#document')

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
    sectionsColor: ["yellow", "orange", "green", "blue", "red", "purple"],
    }
    );
    });