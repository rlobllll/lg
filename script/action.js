// $('header').click(function(){
//     $('.modal').show()
// })

// $('.popup a').click(function(){
//     $('.modal').hide()
// })


// header가 너무 길어서 따로 작성한거 연결하기 (햄버거 메뉴 작동 될 수 있게 따로 안에 넣음) 
// $("header").load("include/header_js.html",function(){
//     $('.hambuger').click(function(){
//         $('.hambuger').toggleClass('on')
//         $('nav').toggleClass('on')
//     })      
// });
                //ㄴtoggle은 껐다켰다해주는거 addClass와 removeClass를 합친것//    


$('.hambuger').click(function(){
    $('.hambuger').toggleClass('on')
    $('nav').toggleClass('on')
})



// 브라우저 화면 확대 및 축소를 완전히 막는 스크립트
document.addEventListener('keydown', function (event) {
    // Ctrl 키 (Windows) 또는 Command 키 (Mac)와 + 또는 - 키가 동시에 눌려있는 경우
    if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-')) {
        event.preventDefault(); // 이벤트의 기본 동작을 막음
    }
});

// 마우스 휠로의 화면 조절을 막는 스크립트
document.addEventListener('wheel', function (event) {
    if (event.ctrlKey || event.metaKey) {
        event.preventDefault(); // 이벤트의 기본 동작을 막음
    }
}, { passive: false });






