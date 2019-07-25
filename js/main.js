$('.mobileHeader .menuicon').click(function(){
	$('.bgBk').stop().fadeIn(500);
	$("#side").stop().animate({right:"0px"},500);
	return false;
});

// 모바일메뉴영역 닫기
$(".closeMenu").click(function(){
	$('.bgBk').stop().fadeOut(500);
	$("#side").stop().animate({right:"-100%"},500);
	return false;
});

// 모바일메뉴-뎁스1메뉴 클릭했을 때		//.d1(li태그 뎁스1메뉴)	.m(a태그)	.sub(댑스1하위메뉴)
$(".side_menu .d1 .m").click(function(){
	// 현재 클릭한 대상의 형제관계로 사용되는 .sub영역 보이기/안보이기
	$(this).siblings(".sub").stop().slideToggle(600);	//??
	// 현재 클릭한 대상의 부모태그인 .d1에 on클래스 추가/삭제하기
	// 왜??
	/* .d1 on--> 부모인 li의 배경색 바꾸기, 화살표모양 바꾸기 (본인은 a태그)*/
	$(this).parent('.d1').toggleClass('on');
	// 클릭되는 영역의 a태그 무효화
	return false

});

// 모바일메뉴-뎁스2메뉴 클릭했을 때		//.d3(dt태그 뎁스2메뉴)	dd(댑스2 하위메뉴)
$(".side_menu .d3").click(function(){
	$(this).siblings("dd").stop().slideToggle(600);
	//본인에게 on클래스 추가/삭제하기
	//왜??
	/* dt태그 on = .d3 on-->본인 화살표모양 바꾸기 */
	$(this).toggleClass('on');
	return false;


});

// 공지사항
/* setInterval()명령 : 특정동작을 시간마다 반복시켜주는 명령
   setInterval(함수,시간); */
// 공지사항제목 리스트를 저장하는 변수nList를 만듬.
var nList = $(".notice_list li");
// 변수nStart를 만들어 0을 저장함. 이때 0은 최초로 화면에 출력되고 있는 제목의 순서값을 나타냄.
var nStart = 0;
setInterval(function(){
	// 변수nNext를 만들어 변수nStart+1의 값을 저장함. 이값은 다음으로 출력될 제목의 순서값이 될 것임.
	var nNext = nStart+1;
	// 만약 nNext값이 4와 같다면 => nNext의 값을 0으로 지정함.
	if(nNext==4) nNext=0;
	// 리스트가 움직이도록 명령
	nList.css({zIndex:0});
	nList.eq(nNext).css({top:"100%",zIndex:1}).animate({top:0},500);	
	// 동작이 완료 된 후 nStart변수의 값이 nNext변수값으로 변경되도록 명령
	nStart = nNext;
},3000); 	


// slider


// mobileboardslider, PCboradslider

$(".slider").slick({
	autoplaySpeed:3500,
	autoplay:true,
	dots: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows:false,
	centerMode: false,
	// prevArrow : '.best .button .button_prev',
	// nextArrow : '.best .button .button_next',
	customPaging : function(s,i){
		return '<a href="#"></a>';
	},
	});

// menu tab메뉴 (1)

$("document").ready(function(){

	$(".tabmenu").hide();
	$(".tabmenu:first").show();
	
	$(".drinkmenu .itemmenu").hide();
	$(".drinkmenu .itemmenu:first").show();

	$(".dessertmenu .itemmenu").hide();
	$(".dessertmenu .itemmenu:first").show();

	$(".MDmenu .itemmenu").hide();
	$(".MDmenu .itemmenu:first").show();
  });
  
  $(".menuTop li").click(function(e) {
	e.preventDefault();
	$(".tabmenu").hide();
	var activeTab = $(this).attr("rel");
	$("#"+activeTab).fadeIn();
	if($(this).attr("rel") == "tab2"){
	  $('.menutab').addClass('slide');
	}else{
	  $('.menutab').removeClass('slide');
	}
	$(".menuTop li").removeClass("active");
	$(this).addClass("active");

	var i = $(this).index();
	$('.tabmenu').eq(i).find('.itemmenu').hide().eq(0).show();
	$('.tabmenu').eq(i).find('.category').children('li').eq(0).addClass('active').siblings().removeClass('active');

  });

 
  //menu tab메뉴 (2) drink
  
  $(".drink li").click(function(e) {
	e.preventDefault();
	$(".itemmenu").hide();
	var activeTab = $(this).attr("rel");
	$("#"+activeTab).fadeIn();
	if($(this).attr("rel") == "drink2"){
	  $('.category').addClass('slide');
	}else{
	  $('.category').removeClass('slide');
	}
	$(".category li").removeClass("active");
	$(this).addClass("active");
  });

  $(".dessert li").click(function(e) {
	e.preventDefault();
	$(".itemmenu").hide();
	var activeTab = $(this).attr("rel");
	$("#"+activeTab).fadeIn();
	if($(this).attr("rel") == "dessert2"){
	  $('.category').addClass('slide');
	}else{
	  $('.category').removeClass('slide');
	}
	$(".category li").removeClass("active");
	$(this).addClass("active");
  });

  $(".MD li").click(function(e) {
	e.preventDefault();
	$(".itemmenu").hide();
	var activeTab = $(this).attr("rel");
	$("#"+activeTab).fadeIn();
	if($(this).attr("rel") == "MD2"){
	  $('.category').addClass('slide');
	}else{
	  $('.category').removeClass('slide');
	}
	$(".category li").removeClass("active");
	$(this).addClass("active");
  });

//   $("document").ready(function(){
// 	$(".itemmenu").hide();
// 	$(".itemmenu:first").show();
//   });

//   $(".dessert li").click(function() {
// 	$(".itemmenu").hide();
// 	var activeTab = $(this).attr("rel");
// 	$("#"+activeTab).fadeIn();
// 	if($(this).attr("rel") == "dessert2"){
// 	  $('.category').addClass('slide');
// 	}else{
// 	  $('.category').removeClass('slide');
// 	}
// 	$(".categoryTop li").removeClass("active");
// 	$(this).addClass("active");
//   });

    //menu tab메뉴 (2) dessert
//   $("document").ready(function(){
// 	$('.category li a').click(function(e){
// 		e.preventdefault();
// 	}); 
// 	$(".itemmenu").hide();
// 	$(".itemmenu:first").show();
//   });
  
//   $(".categoryTop li").click(function() {
// 	$(".itemmenu").hide();
// 	var activeTab = $(this).attr("rel");
// 	$("#"+activeTab).fadeIn();
// 	if($(this).attr("rel") == "item2"){
// 	  $('.category').addClass('slide');
// 	}else{
// 	  $('.category').removeClass('slide');
// 	}
// 	$(".categoryTop li").removeClass("active");
// 	$(this).addClass("active");
//   });



  
  



