<?php 
	require "conn.php";
	header('content-type:text/html;charset=utf-8');
	if(isset($_POST['retel']) || isset($_POST['submit'])){
		$name=@$_POST['retel'];
	}else{
		exit('非法操作');
	}

	$result=mysql_query("select * from user where tel='$name'");

	if(mysql_fetch_array($result)){//满足条件有重复
		echo true;
	}else{//没有重复
		echo false;
	}

	if(isset($_POST['submit'])){
		$tel=$_POST['tel'];
		$password=md5($_POST['password']);
		$query="insert user value(default,'$tel','$password')";
		mysql_query($query);
		header('location:../src/html/login.html');
	}
 ?>