;(function(){
	var $productnum=$('.numtext b');
	var $left=$('.left-i');
	var $right=$('.right-i');
	$productnum.html(1);
	var numhtml=$productnum.html();
	$right.on('click',function(){
		$productnum.html(++numhtml);
	})
	$left.on('click',function(){
		if(numhtml==1){
			return false;
		}else{
			$productnum.html(--numhtml);
		}	
	})
	var $wrap=$('.wrap')
	var $minpic=$('.minimg');
	var $minbox=$('.minbox');
	var $bigbox=$('.bigbox');
	var $bigpic=$('.bigimg');
	$minpic.hover(function(){
		$bigbox.css({visibility:'visible'});
		$minbox.css({
			visibility:'visible',
			width:$minpic.width()*$bigbox.width()/$bigpic.width(),
			height:$minpic.height()*$bigbox.height()/$bigpic.height()
		});
		$(this).on('mousemove',function(ev){
			$l=ev.pageX-$wrap.offset().left-$minbox.width()/2;
			$t=ev.pageY-$wrap.offset().top-$minbox.height()/2;
			var $bili=$bigbox.width()/$minbox.width();
			if($l<=0){
				$l=0
			}else if($l>$minpic.width()-$minbox.width()){
				$l=$minpic.width()-$minbox.width();
			}
			if($t<=0){
				$t=0
			}else if($t>$minpic.height()-$minbox.height()){
				$t=$minpic.height()-$minbox.height();
			}
			$minbox.css({left:$l,top:$t});
		$bigpic.css({left:-$l*$bili,top:-$t*$bili})
		})
	},function(){
		$bigbox.css({visibility:'hidden'});
		$minbox.css({visibility:'hidden'});
	})

	var $listli=$('.minboximg li');
	var $listul=$('.minboximg');
	var $leftbo=$('.left-bo');
	var $rightbo=$('.right-bo');
	$listli.on('click',function(){
		var $url=$(this).find('img').attr('src');
		$bigpic.attr({src:$url});
		$minpic.find('img').attr({src:$url});
		$(this).css({border:'1px red solid'}).siblings('.minboximg li').css({border:'1px #dcdddd solid'})
	})


	var $mun=5;
	var $listulwidth=$listli.eq(0).outerWidth()*$listli.size()+3*$listli.size();
	$listul.css({width:$listulwidth})

	$rightbo.on('click',function(){
		if($mun<$listli.size()){
			$mun++;
			$leftbo.css({color:'#333'})
			if($mun==$listli.size()){
				$rightbo.css({color:'#fff'})
			}
			$listul.css({left:-($mun-5)*$listli.eq(0).outerWidth()-3})
		}
	})

	$leftbo.on('click',function(){
		if($mun>5){
			$mun--
			$rightbo.css({color:'#333'})
			if($mun==5){
				$leftbo.css({color:'#fff'})
			}
			$listul.css({left:-($mun-5)*$listli.eq(0).outerWidth()})
		}
	})
})();

;(function(){
	var sidarr = [];
	var numarr = [];
	function getcookievalue(){
				if(getCookie('cartsid')){//cartsid：cookie里面id的名称
					sidarr=getCookie('cartsid').split(',');//cookie转数组
				}
				
				if(getCookie('cartnum')){//cartnum：cookie里面数量的名称
					numarr=getCookie('cartnum').split(',');
				}
		}
	$('.cat').on('click', function() {
				var sid = $(this).parents('.main').find('.mubiao').attr('sid');//当前按钮对应图片的sid
				getcookievalue();//获取商品的id和数量,放到对应的数组中,利用数组进行匹配
				if ($.inArray(sid, sidarr) != -1) {//当前的sid是否存在cookie中       存在
					//将之前的数据和当前存的数据相加，存放cookie里面
					if(getCookie('cartnum')==''){
						var num=parseInt($('.numtext b').html());
						numarr[$.inArray(sid,sidarr)]=num;
						addCookie('cartnum', numarr.toString(), 7);//修改后的结果
						sidarr[$.inArray(sid,sidarr)]=sid;//将当前id添加到对应的位置。
        				addCookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
					}else{
						//走这里代码已经存在cookie,数量累加，取出cookie的数量+当前的输入的数量
						var num=parseInt(numarr[$.inArray(sid,sidarr)])+parseInt($('.numtext b').html());
						numarr[$.inArray(sid,sidarr)]=num;
						addCookie('cartnum', numarr.toString(), 7);//修改后的结果
					}
					
				}else{//不存在
					sidarr.push(sid);//将当前id添加到数组里面。
        			addCookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
        			numarr.push($('.numtext b').html());//存放输入的数量
        			addCookie('cartnum', numarr.toString(), 7);
				}
		});
})();