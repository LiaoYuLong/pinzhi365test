<?php 
	require "conn.php";
	header('content-type:text/html;charset=utf-8');
	if(isset($_POST['tel'])){
		$tel=$_POST['tel'];
		$password=md5($_POST['pass']);
	}else{
		exit('非法操作');
	}


	$result=mysql_query("select * from user where tel='$tel' and password='$password' ");
	if(mysql_fetch_array($result)){//有值，登陆通过
		echo true;
	}else{
		echo false;
	}
 ?>