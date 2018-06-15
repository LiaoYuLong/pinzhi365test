;(function(){
	var $bananerimgs=$('.chartul li');
	var $shoujiimg=$('.shouji img');
	var $shipingimg=$('.shiping img');
	var $jiayongimg=$('.jiayong img');
	var $gehuimg=$('.gehu img');
	var $fushiimg=$('.fushi img');
	var $xiexueimg=$('.xiexue img');
	var $baojianimg=$('.baojian img');
	var $jiajvimg=$('.jiajv img');
	var $jiafangimg=$('.jiafang img');
	var $muyinimg=$('.muyin img');
	var $yundongimg=$('.yundong img');
	$.ajax({
		url:'../../php/zhuye.php',
		dataType:'json'
	}).done(function(lunbodata){
		var $obj=lunbodata;
		var $lunboarr=$obj.lunbo;
		var $chanpingone=$obj.onemoney;
		var $chanpingtwo=$obj.twomoney;
		var $chanpingthree=$obj.threemoney;
		var $chanpingfour=$obj.fourmoney;
		var $chanpingfive=$obj.fivemoney;
		var $chanpingsix=$obj.sixmoney;
		var $chanpingseven=$obj.sevenmoney;
		var $chanpingeight=$obj.eightmoney;
		var $chanpingnine=$obj.ninemoney;
		var $chanpingten=$obj.tenmoney;
		var $chanpingeleven=$obj.elevenmoney;



		/*var strone=$chanpingone[0].url;
		var arrone=strone.split(',')
		console.log(arrone[0]);*/
		var $num=0;
		$.each($lunboarr,function($i,$n){
			$bananerimgs.eq($i).css('background','url('+$n.url+')');
		});
		//一楼产品数据
		$.each($chanpingone,function($i,$n){
			var strone=$chanpingone[$i].url;
			var arrone=strone.split(',')
			$shoujiimg.eq($i).attr({src:arrone[0]});
		});

		/*$.each($chanpingone,function($i,$n){
			$shoujiimg.eq($i).attr({src:$n.url});
		});*/
		//二楼产品数据
		$.each($chanpingtwo,function($i,$n){
			$shipingimg.eq($i).attr({src:$n.url});
		});
		//三楼产品数据

		$.each($chanpingthree,function($i,$n){
			$jiayongimg.eq($i).attr({src:$n.url});
		});

		//四楼产品数据

		$.each($chanpingfour,function($i,$n){
			$gehuimg.eq($i).attr({src:$n.url});
		});

		//五楼产品数据
		$.each($chanpingfive,function($i,$n){
			$fushiimg.eq($i).attr({src:$n.url});
		});

		//六楼产品数据
		$.each($chanpingsix,function($i,$n){
			$xiexueimg.eq($i).attr({src:$n.url});
		});

		//七楼产品数据
		$.each($chanpingseven,function($i,$n){
			$baojianimg.eq($i).attr({src:$n.url});
		});

		//八楼产品数据
		$.each($chanpingeight,function($i,$n){
			$jiajvimg.eq($i).attr({src:$n.url});
		});

		//九楼产品数据
		$.each($chanpingnine,function($i,$n){
			$jiafangimg.eq($i).attr({src:$n.url});
		});

		//十楼产品数据
		$.each($chanpingten,function($i,$n){
			$muyinimg.eq($i).attr({src:$n.url});
		});

		//十一楼产品数据
		$.each($chanpingeleven,function($i,$n){
			$yundongimg.eq($i).attr({src:$n.url});
		});

	})

})();