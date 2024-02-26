process.argv.forEach(function(item, index) {
    // 출력
    console.log(`${index} : ${typeof(item)} : ${item}`);
    // 실행 매개변수에 --exit가 있을 때
    if(item == '--exit')
    {
    // 다음 실행 매개변수를 얻는다.
    let exitTime = Number(process.argv[index+1]);
    // 일정 시간 후 프로그램을 종료한다.
    setTimeout(function(){
    process.exit();
    }, exitTime);
    }
    });

    // console.log('- process.connected:',process.connected);