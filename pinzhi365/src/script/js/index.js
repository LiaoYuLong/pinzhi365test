;(function(){
	var $bananerimgs=$('.chartul li');
	var $lili=$('.round li');
	var $shoujiimg=$('.shouji img');
	var $shipingimg=$('.shiping img');
	var $jiayongimg=$('.jiayong img');
	$.ajax({
		url:'http://localhost/1802-js/pinzhi365test/pinzhi365/php/zhuye.php',
		dataType:'json'
	}).done(function(lunbodata){
		var $obj=lunbodata;
		var $lunboarr=$obj.lunbo;
		var $chanpingone=$obj.onemoney;
		var $chanpingtwo=$obj.twomoney;
		var $chanpingthree=$obj.threemoney;
		var $num=0;
		$.each($lunboarr,function($i,$n){
			$bananerimgs.eq($i).css('background','url('+$n.url+')');
		});

		$.each($chanpingone,function($i,$n){
			$shoujiimg.eq($i).attr({src:$n.url});
		});

		$.each($chanpingtwo,function($i,$n){
			$shipingimg.eq($i).attr({src:$n.url});
		});


		$.each($chanpingthree,function($i,$n){
			$jiayongimg.eq($i).attr({src:$n.url});
		});










		var bannertimer=setInterval(function(){
			$num++;
			if($num==$bananerimgs.size()){
				$num=0;
			}
			bannerlunbo();
		},2000)
		$lili.hover(function(){
			clearInterval(bannertimer);
			$num=$(this).index();
			bannerlunbo();
		},function(){
			bannertimer=setInterval(function(){
				$num++;
				if($num==$bananerimgs.size()){
					$num=0;
				}
				bannerlunbo();
			},2000)
		})
		function bannerlunbo(){
			$lili.eq($num).addClass('roundli').siblings('.round li').removeClass('roundli');
			//$bananerimgs.eq($num).addClass('active').siblings($bananerimgs).removeClass('active');
			$bananerimgs.eq($num).stop().animate({opacity:1},800).siblings('.chartul li').stop().animate({opacity:0});
		}
	})

})();