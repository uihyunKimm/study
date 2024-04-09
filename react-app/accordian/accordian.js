window.onload = () => {
    const panelFaqContainer = document.querySelectorAll('.panel-faq-container');
    const panelFaqAnswer = document.querySelectorAll('.panel-faq-answer');
    console.log (panelFaqContainer);
    console.log (panelFaqAnswer);

    //반복문 순회하면서 해당 FAQ 제목 클릭시 콜백 처리

    for(let i=0; i<panelFaqContainer.length; i++) {
        panelFaqContainer[i].addEventListener('click',function(){
            //클릭시 처리 할 일
            console.log('클릭'+ i);

            //FAQ제목 클릭시 > 본문이 보이게끔 > active클래스 추가
            /* this.classList.add('active'); */
            if(panelFaqAnswer[i].classList.contains('active')){
                    panelFaqAnswer[i].classList.remove('active');
                }else{panelFaqAnswer[i].classList.add('active');};
        });
    };
    const btnAllClose = document.getElementById('btn-all-close');
    console.log(btnAllClose);

    btnAllClose.addEventListener('click',function(){
        console.log('모두닫기');
        for (i = 0; i < panelFaqAnswer.length; i++){
            panelFaqAnswer[i].classList.remove('active');
        }
    })

}
