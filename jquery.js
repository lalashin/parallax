let nav = $("#nav > ul > li");
let cont = $("#contents > div");

nav.click(function(e){
    e.preventDefault();                    //#의 기본 기능을 차단
    let target = $(this);                  //클릭한 타겟을 변수에 할당
    let index = target.index();            //클릭한 타겟에 번호를 할당
    //alert(index);
    let section = cont.eq(index);          //클릭한 버튼과 컨텐츠를 연결
    let offset = section.offset().top;     //각 컨텐츠의 오프셋 값을 할당
    //alert(offset);
    $("html, body").animate({scrollTop: offset},600,"easeInOutExpo");
    
});

$(window).scroll(function(){
    let wScroll = $(this).scrollTop();

    /*if(wScroll >= cont.eq(0).offset().top){
        nav.removeClass("active");
        nav.eq(0).addClass("active");
    }
    if(wScroll >= cont.eq(1).offset().top){
        nav.removeClass("active");
        nav.eq(1).addClass("active");
    }
    if(wScroll >= cont.eq(2).offset().top){
        nav.removeClass("active");
        nav.eq(2).addClass("active");
    }
    if(wScroll >= cont.eq(3).offset().top){
        nav.removeClass("active");
        nav.eq(3).addClass("active");
    }
    if(wScroll >= cont.eq(4).offset().top){
        nav.removeClass("active");
        nav.eq(4).addClass("active");
    }
    if(wScroll >= cont.eq(5).offset().top){
        nav.removeClass("active");
        nav.eq(5).addClass("active");
    }*/

    for(i=0; i<6; i++){
        if(wScroll >= cont.eq(i).offset().top){
        nav.removeClass("active");
        nav.eq(i).addClass("active");
        }
        }
})