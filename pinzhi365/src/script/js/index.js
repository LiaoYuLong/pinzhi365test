;(function(){
	 function addCookie(key, value, day) {
        var date = new Date(); //创建日期对象
        date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
        document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
    }

    function getCookie(key) {
        var str = decodeURI(document.cookie);
        var arr = str.split('; ');
        for (var i = 0; i < arr.length; i++) {
            var arr1 = arr[i].split('=');
            if (arr1[0] == key) {
                return arr1[1];
            }
        }
    }

    function delCookie(key) {
        addCookie(key, '', -1); //添加的函数,将时间设置为过去时间
    }
    if(getCookie('tel')){
    	$('.cookie').html('你好,'+getCookie('tel')+'欢迎光临品质365商城！');
    }else{
    	$('.cookie').html('你好,欢迎光临品质365商城！')
    }
    $('.boregistor').on('click',function(){
    	delCookie('tel');
    })
})();
//主题轮播
;(function(){
	var $bananerimgs=$('.chartul li');
	var $lili=$('.round li');
	var $num=0;
	var bannertimer=setInterval(function(){
			$num++;
			if($num==$bananerimgs.size()){
				$num=0;
			}
			bannerlunbo();
		},2000)
	$bananerimgs.hover(
			function(){
				clearInterval(bannertimer);
			},function(){
				bannertimer=setInterval(function(){
				$num++;
				if($num==$bananerimgs.size()){
					$num=0;
				}
				bannerlunbo();
			},2000)
			}
		)
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
})();
//tab切换
;(function(){
	var $tabli=$('.main-tab-top li');
	var $tabbox=$('.tabinner');
	var $num=0;
	$tabli.on('click',function(){
		$num=$(this).index()
		indextab();
	})
	var tabtimer=setInterval(function(){
		$num++;
		if($num==4){
			$num=0;
		}
		indextab();
	},2000);

	function indextab(){
		$tabli.eq($num).addClass('bgcolor').siblings('.main-tab-top li').removeClass('bgcolor');
		$tabbox.eq($num).show().siblings('.tabinner').hide();
	}
})();
//一层轮播
;(function(){
	var $onelou=$('.lunbo-boxone');
	var $oneloudiv=$('.lunbo-boxone .lunbo-one')
	var $onelouspan=$('.onebox-qy span');
	var $num=0;
	var oneloutimer=setInterval(function(){
		if($num==2){
			$num=-1;
		}
		$num++;
		$width=$oneloudiv.width()*$num;
		$onelou.animate({left:-$width});
		$onelouspan.eq($num).addClass('one-qy').siblings('.onebox-qy span').removeClass('one-qy');
	},1000)
	$onelouspan.hover(function(){
		clearInterval(oneloutimer);
		$num=$(this).index();
		$onelouspan.eq($num).addClass('one-qy').siblings('onebox-qy span').removeClass('one-qy');
		$width=$oneloudiv.width()*$num;
		$onelou.animate({left:-$width});
	},function(){
		oneloutimer=setInterval(function(){
			if($num==2){
				$num=-1;
			}
			$num++;
			$width=$oneloudiv.width()*$num;
			$onelou.animate({left:-$width});
			$onelouspan.eq($num).addClass('one-qy').siblings('onebox-qy span').removeClass('one-qy');
		},1000)
	})
})();
//3层轮播
;(function(){
	var $twolou=$('.lunbo-boxtwo');
	var $twoloudiv=$('.lunbo-boxtwo .lunbo-one')
	var $twolouspan=$('.twobox-qy span');
	var $num=0;
	var twoloutimer=setInterval(function(){
		if($num==2){
			$num=-1;
		}
		$num++;
		$width=$twoloudiv.width()*$num;
		$twolou.animate({left:-$width});
		$twolouspan.eq($num).addClass('two-qy').siblings('.twobox-qy span').removeClass('two-qy');
	},1000)
	$twolouspan.hover(function(){
		clearInterval(twoloutimer);
		$num=$(this).index();
		$twolouspan.eq($num).addClass('two-qy').siblings('.twobox-qy span').removeClass('two-qy');
		$width=$twoloudiv.width()*$num;
		$twolou.animate({left:-$width});
	},function(){
		twoloutimer=setInterval(function(){
			if($num==2){
				$num=-1;
			}
			$num++;
			$width=$twoloudiv.width()*$num;
			$twolou.animate({left:-$width});
			$twolouspan.eq($num).addClass('two-qy').siblings('.twobox-qy span').removeClass('two-qy');
		},1000)
	})
})();
//10层轮播
;(function(){
	var $threelou=$('.lunbo-boxthree');
	var $threeloudiv=$('.lunbo-boxthree .lunbo-one')
	var $threelouspan=$('.threebox-qy span');
	var $num=0;
	var threeloutimer=setInterval(function(){
		if($num==2){
			$num=-1;
		}
		$num++;
		$width=$threeloudiv.width()*$num;
		$threelou.animate({left:-$width});
		$threelouspan.eq($num).addClass('three-qy').siblings('.threebox-qy span').removeClass('three-qy');
	},1000)
	$threelouspan.hover(function(){
		clearInterval(threeloutimer);
		$num=$(this).index();
		$threelouspan.eq($num).addClass('three-qy').siblings('.threebox-qy span').removeClass('three-qy');
		$width=$threeloudiv.width()*$num;
		$threelou.animate({left:-$width});
	},function(){
		threeloutimer=setInterval(function(){
			if($num==2){
				$num=-1;
			}
			$num++;
			$width=$threeloudiv.width()*$num;
			$threelou.animate({left:-$width});
			$threelouspan.eq($num).addClass('three-qy').siblings('.threebox-qy span').removeClass('three-qy');
		},1000)
	})
})();

//回到顶部
;(function(){
	$('.sidehui').on('click',function(){
		$('html,body').animate({
            scrollTop: 0
        });
	})
})();

//楼梯
;(function(){
	var $loutibox=$('.louti');
	var $louti=$('.louti li');
	var $floor=$('.floor-inner');
	
	$(window).on('scroll', function() {
        var $scrolltop = $(this).scrollTop();
        var $widtop=$(window).scrollTop();
        if($widtop>7150){
       		$loutibox.animate({top:'-145'},200);
       	}else{
       		$loutibox.animate({top:160},200);
    	}


        if($scrolltop>1400){
        	$loutibox.show();
        }else{
        	$loutibox.hide();
        }
		$floor.each(function($index,$ele){
			var $top=$(this).offset().top+300;	
			if($top>$scrolltop){
				$('.louti li').children('.textnum').show();
				$('.louti li').children('.textch').hide();
				$louti.eq($(this).index('.floor-inner')).children('.textch').show().css({color:'red'});
				$louti.eq($(this).index('.floor-inner')).children('.textnum').hide();
				return false;
			}
		})

    })

    $louti.hover(function(){
		$louti.eq($(this).index()).addClass('active').siblings('.louti li').removeClass('active');
		$louti.eq($(this).index()).children('.textch').show().css({color:'#fff'});
		$louti.eq($(this).index()).children('.textnum').hide();
	},function(){
		$louti.eq($(this).index()).removeClass('active');
		$louti.eq($(this).index()).children('.textnum').show();
		$louti.eq($(this).index()).children('.textch').hide();
		$(window).scroll();
	})

	$louti.on('click',function(){
		$louti.eq($(this).index()).removeClass('active');
		$louti.eq($(this).index()).children('.textch').show().css({color:'red'});
		$louti.eq($(this).index()).children('.textnum').hide();
		var $top=$floor.eq($(this).index()).offset().top;
		$('html,body').animate({
			scrollTop:$top
		})
	})
	
})();

/*;(function(){
	var $arrA=$('a');
	$arrA.on('click',function(){
		var $src=$(this).find('img').attr('src')
		if($(this).attr('href')=='details.html'){
			$.ajax({
				url:'../../php/datails.php',
				data:{
					src:$src
				}
			})
		};
	})
})();*/