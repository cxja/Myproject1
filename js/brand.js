
var n=0;
var timer;
$(window).mousewheel(function(e,d){
	clearTimeout(timer);
	timer=setTimeout(function(){
		n=n-d;
		console.log(d);
		console.log(n)
	if(d==-1){
		$('.nav-right ul li').eq(n).addClass('active');
	}
	if(d==1){
		$('.nav-right ul li').eq(n+1).removeClass('active');
	}
	if(n<0){
		n=0;	
		$('.nav-right ul li').eq(0).addClass('active');

	}
	if(n==0){
		$('.circle1').css('display', 'none');
		$('.circle2').css('display', 'none');
	}
	if(n==1){
		$('.circle1').show();
		$('.circle2').show();
	}

	if(n==2){	
		$('.mcontent1').children('div').eq('0').removeClass('left-in');
		$('.mcontent1').children('div').eq('1').removeClass('right-in')
		$('.circle1').css('display', 'none');
		$('.circle2').css('display', 'none');
	}
	else{
		$('.mcontent1').children('div').eq('0').addClass('left-in');
		$('.mcontent1').children('div').eq('1').addClass('right-in')
		
	}

	if(n>3){
		
		n=3;   //四屏滚三次
	}
	
	$('.container').stop().css({'top':-100*n+'%'},500)  

	},300)

	
})

//圆圈
$(function(){
 
  $('.circlechart').circlechart();
 
});   

