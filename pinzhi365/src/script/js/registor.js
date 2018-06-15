;(function(){
	var $userI=$('.telname i');
	var $userS=$('.telname s');
	var $passI=$('.passname i');
	var $passS=$('.passname s');
	var $repassI=$('.repass i');
	var $repassS=$('.repass s');
	var $tel=$('#tel').val();
	var $pass=$('#password').val();
	var $repass=$('#repass').val();
	var $userlock = true;
    var $passlock = true;
    var $repasslock = true;
	$('#tel').on('focus',function(){
		$userI.css({display:'block'}).html('手机完成验证后，可使用该手机登录').css({background:'url(../img/icons.jpg) no-repeat 0px -18px'});
		$userS.hide();
	})
	/*$userS.on('click',function(){
		$telIn.val('');
		$userI.hide();
	})*/

	//账号验证：
	$('#tel').on('blur',function(){
		var telreg=/^1[3|5|7|8]\d{9}$/;
		$tel=$('#tel').val();
		if($tel!=''){
			if(telreg.test($tel)){
				$.ajax({
					type:'post',
					url:'../../php/registor.php',
					data:{
						retel:$tel
					}
				}).done(function(reuser){
					 if (!reuser) { //没有重复
                       $userS.show().css({background:'url(../img/icons.jpg) no-repeat 0px -36px'});
                       $userlock=true;
                    } else { //有重复
                       $userS.show().css({background:'url(../img/icons.jpg) no-repeat'});
                       $userI.html('该手机号码已注册').css({background:'url(../img/icons.jpg) no-repeat'});
                       $userlock=false;
                    }
				})
			}else{
                       $userI.html('您输入的手机号码格式有误').css({background:'url(../img/icons.jpg) no-repeat'});
                       $userlock=false;

			}				
		}else{
			$userS.hide();
			$userI.html('请输入手机号').css({background:'url(../img/icons.jpg) no-repeat'});
			$userlock=false;
		}
	})

	//密码验证：
	$('#password').on('focus',function(){
		$passI.css({display:'block'}).html('请输入:6-20位字母或数字下划线 " . " " - "').css({background:'url(../img/icons.jpg) no-repeat 0px -18px'});
		$passS.hide();
	})
	$('#password').on('blur',function(){
		var passreg=/^(\w|\-|\.){6,20}$/;
		$pass=$('#password').val();
		if($pass!=''){
			if(passreg.test($pass)){
				$passI.hide();
				$passS.show().css({background:'url(../img/icons.jpg) no-repeat 0px -36px'});
				$passlock = true;
			}else{
				$passI.show().html('您输入的密码格式有误').css({background:'url(../img/icons.jpg) no-repeat'});
				$passlock = false;
			}
		}else{
			$passI.html('请输入密码').css({background:'url(../img/icons.jpg) no-repeat'});
			$passS.hide();
			$passlock = false;
		}
	})

	//密码重复
	$('#repass').on('focus',function(){
		$repassI.css({display:'block'}).html('请您确认密码').css({background:'url(../img/icons.jpg) no-repeat 0px -18px'});
		$repassS.hide();
	})
	$('#repass').on('blur',function(){
		$pass=$('#password').val();
		$repass=$('#repass').val();
		if($repass!=''){
			if($repass==$pass){
				$repassI.show().hide();
				$repassS.show().css({background:'url(../img/icons.jpg) no-repeat 0px -36px'});
				$repasslock = true;
			}else{
				$repassI.show().html('您输入的两次密码不一致').css({background:'url(../img/icons.jpg) no-repeat'});
				$repassS.show().css({background:'url(../img/icons.jpg) no-repeat'});
				$repasslock = false;
			}
		}else{
			$repassI.html('请确认密码').css({background:'url(../img/icons.jpg) no-repeat'});
			$repassS.hide();
			$repasslock = false;
		}		
	})

	$('form').on('submit',function(){
		if($tel==''){
			$userS.hide();
			$userI.html('手机号码不能为空').css({
				background:'url(../img/icons.jpg) no-repeat',
				display:'block'
			});
			return false;
		}
		if($pass==''){
			$passI.html('密码不能为空').css({
				background:'url(../img/icons.jpg) no-repeat',
				display:'block'
			});
			return false;
		}
		if($repass==''){
			$repassI.html('请确认密码').css({
				background:'url(../img/icons.jpg) no-repeat',
				display:'block'
			});
			return false;
		}

		if(!$userlock || !$passlock || !$repasslock){
			return false;
		}
	})


})();