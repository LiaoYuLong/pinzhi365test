;(function(){
	function addCookie(key, value, day) {
            var date = new Date(); //创建日期对象
            date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
            document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
        }
	$('#btn').on('click',function(){
		$.ajax({
			type:'post',
			url:'http://localhost/1802-js/pinzhi365test/pinzhi365/php/login.php',
			data:{
				tel:$('#tel').val(),
				pass:$('#password').val()
			}
		}).done(function(login){
			if(!login){
				$('.telname i').html('手机号或密码错误').css({
					display:'block',
					background:'url(../img/icons.jpg) no-repeat 0px 0px',
					color:'red'
				})
				$('.password i').html('手机号或密码错误').css({
					display:'block',
					background: 'url(../img/icons.jpg) no-repeat 0px 0px',
					color:'red'
				})
			}else{
				location.href='http://localhost/1802-js/pinzhi365test/pinzhi365/src/html/';
				addCookie('tel',$('#tel').val(),7);
			}
		})
	})
})();