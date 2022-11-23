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
    $("html, body").animate({scrollTop: offset},600,"easeOutBounce");
});