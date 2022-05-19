function spread(count){
    let submenu = document.getElementById('submenu-' + count);
    if(submenu){
        // 평소에는 숨겨져있다가 숨겨진게 제거됨
        if(submenu.classList.contains('hide')) submenu.classList.remove('hide');
        else submenu.classList.add('hide');
    }

    //아이콘을 만들어서 평소에는 하얀색이었다가 마우스를 대면 grey로 바뀌면서 dropdown 됨
    let spreadIcon = document.getElementById('spread-icon-' + count);
    if(spreadIcon){
        if(spreadIcon.innerHTML == 'arrow_right') {
            spreadIcon.innerHTML = 'arrow_drop_down';
            spreadIcon.style.color = 'grey';
        }else{
            spreadIcon.innerHTML = 'arrow_right';
            spreadIcon.style.color = 'white';
        } 
    }
}

// 만들어놓은 함수를 우리가 쓸 수 있게 my-head.html에 정의함
