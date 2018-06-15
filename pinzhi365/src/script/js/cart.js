;(function(){
	var $productnum=$('.shuliang b');
	var $left=$('.left-i');
	var $right=$('.right-i');
	var $numshu=$('.numshu');
	var $gounumber=$('.gounumber');
	var $money=$('.money em');
	var $bigmo=$('.bigmo');
	var $zongmoney=$('.bigmo');
	$productnum.html(1);
	var $moneyzong=0;
	var $num=0;
	/*var arrmoney=[];*/
	//var $everymoney=parseInt($money.eq($i).html())/$productnum.eq($i).html();
	var numhtml=$productnum.html();

	$zongmoney.html(function($index,$html){
		$money.each(function($i){
			$moneyzong+=parseInt($money.eq($i).html());
		})
		return '￥'+($moneyzong.toFixed(1));
	})	
	//购物车数量增减

	$numshu.html(function($index,$html){
			$gounumber.each(function($i){
				 $num+=parseInt($gounumber.eq($i).html());
			})
			return $num+'件'
		})





	$right.on('click',function(){
		var $num=0;
		numhtml=$(this).prev($productnum).html();



		$(this).prev($productnum).html(++numhtml);

		$(this).parents('.cartinner').find($money)


		$numshu.html(function($index,$html){
			$gounumber.each(function($i){
				 $num+=parseInt($gounumber.eq($i).html());
			})
			return $num+'件'
		})

		$(this).parents('.cartinner').find($money).html(function(){
			$everymoney=parseInt($(this).parents('.cartinner').find($money).html())/(numhtml-1);
			return ($everymoney*numhtml).toFixed(1);
		})


		$zongmoney.html(function($index,$html){
			$moneyzong=0;
			$money.each(function($i){
				$moneyzong+=parseInt($money.eq($i).html());
			})
			return '￥'+($moneyzong.toFixed(1));
		})	
	})
	$left.on('click',function(){
		numhtml=$(this).next($productnum).html();
		if(numhtml==1){
			return false;
		}else{
			$num=0;
			$(this).next($productnum).html(--numhtml);
			$numshu.html(function($index,$html){
			$gounumber.each(function($i){
				 $num+=parseInt($gounumber.eq($i).html());
				})
			return $num+'件'
			})
		}	
	})
})();


