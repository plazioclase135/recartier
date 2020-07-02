$(document).ready(function(){   
	$('.btnMenu').on('click',function(){
		$('section>article').removeClass('on');
		$('.box2').addClass('on');
		$('.btnMenu2').fadeIn();
		$('.boxP1').stop().animate({bottom:"-70px" ,opacity:0},1800,"easeInOutBack");
		$('.boxP2').stop().animate({bottom:"60px" ,opacity:1},2000,"easeInOutBack");
	});
	$('.btnMenu2').on('click',function(){
		$('section>article').removeClass('on');
		$('.box3').addClass('on');
		$('.btnMenu3').fadeIn();
		$('.boxP2').stop().animate({bottom:"-70px" ,opacity:0},1800,"easeInOutBack");
		$('.boxP3').stop().animate({bottom:"70px" ,opacity:1},1800,"easeInOutBack");
	}); 
	$('.btnMenu3').on('click',function(){
		$('section>article').removeClass('on');
		$('.box1').addClass('on');
		$('.btnMenu1').fadeIn();
		$('.boxP3').stop().animate({bottom:"-70px" ,opacity:0},1800,"easeInOutBack");
		$('.boxP1').stop().animate({bottom:"70px" ,opacity:1},1800,"easeInOutBack");
	}); 
	$('.search input').eq(1).click(function(){
		$(this).attr('src',"img-re/search2.png");
	});

	
	$('h1').on('click',function(){
			$(this).stop().animate({top:"-150px",left:0},1800,"easeInOutBack");
			$('address').stop().animate({right:0, bottom:"-150px"},1800,"easeInOutBack");
		
		$('.top').stop().delay(2200).animate({width:"100%"},900,function(){
			$('.right').stop().animate({height:"100%"},900,function(){
				$('.bottom').stop().animate({width:"100%"},900,function(){
					$('.left').stop().animate({height:"100%"},900,function(){
						$('.box1').addClass('on');
						$('.top,.right,.bottom,.left').stop().delay(2000).animate({opacity:0});
						$('#gnb').stop().delay(1500).animate({top:"-5px",opacity:1},1800,"easeOutBack");
						$('#util').stop().delay(2000).animate({top:"-122px",opacity:1},1800,"easeOutBack");
						$('.boxP1').stop().delay(2500).animate({bottom:"70px" ,opacity:1},1800,"easeInOutBack");/**/
						$('.search').stop().delay(3000).animate({bottom:"-130px",opacity:1},1800,"easeOutBack");
						$('.footer').stop().delay(3500).animate({bottom:"-120px",opacity:1},1800,"easeOutBack");
						
					});//left end
				});//bottom end
			});//right end
		});//top end
	
	
	});//h1 end
	
	$('#gnb>li').mouseenter(function(){
		$(this).css({color:'#840a13'});
	});
	
	$('#gnb>li').on('click', function(){
		$('.search').stop().delay(1000).animate({bottom:"-2400px",opacity:1},3000,"easeInOutBack");
						$('.footer').stop().delay(1000).animate({bottom:"-2400px",opacity:1},3000,"easeInOutBack");		
						$('address').stop().delay(1000).animate({bottom:"-2430px"},3000,"easeInOutBack");
						$('#subMenu').stop().delay(3500).slideDown(4500,"easeOutBack");
						$('#event').stop().delay(5000).slideDown(7000, 'easeInOutBack');
						/*$('#event .bgcolor>img').stop().delay(4000).slideDown(5000,"easeOutBack");*/
						
						$('#footer').stop().delay(6000).slideDown(8000);
;
							
						
						
	});
	
	$('.first ul>li').mouseover(function(){
		$(this).find('i').stop().animate({color:'#840a13'});
		$(this).find('.down').stop().slideDown(300);
	});
	$('#footer>ul>li').eq(0).mouseout(function(){
		$('#footer>ul>li>i').stop().animate({color:'##d3d3d3'});
		$(this).find('.down').stop().slideUp(300);
	});
	$('#footer>img').css({
			position:'absolute' ,
			right:270 ,
			top : 25
	});
	
}); // document end