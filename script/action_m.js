$('.hambuger').click(function(){
    $('.modal').stop().fadeToggle()
    $('nav').toggleClass('on')
    $(this).toggleClass('on')
});
        // $(this).toggleClass('on') 여기에 this 대신 '.hambuger'로도 사용 가능



$('.gnb li').click(function(){
    $('.lnb').stop().slideUp()
    $(this).children('.lnb').stop().slideToggle()
});
        // ㄴstop은 효과가 중복되지 않게끔 해주는것 ex.광클 (완전히 안접히고 접혔다 켜지기가 계속되어서)
        // ㄴslideDown <-> slideUp

//show(), hide(), toggle()
//fadeIn(), fadeOut(), fadeToggle()
//slideDown(), slideUp(), slideToggle()
//addClass(), removeClass(), toggleClass()