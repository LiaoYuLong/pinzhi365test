<?php 
	require "conn.php";
	//轮播
	$lunbo=mysql_query("select * from bananer");
	$arrayimg=array();
	for($i=0;$i<mysql_num_rows($lunbo);$i++){
		$arrayimg[$i]=mysql_fetch_array($lunbo,MYSQLI_ASSOC);
	}
	
	//1楼产品
	$chanpingone=mysql_query("select * from shoujishuma");
	$shoujiimg=array();
	for($i=0;$i<mysql_num_rows($chanpingone);$i++){
		$shoujiimg[$i]=mysql_fetch_array($chanpingone,MYSQLI_ASSOC);
	}

	//2楼产品
	$chanpingtwo=mysql_query("select * from shipingjiushui");
	$shiping=array();
	for($i=0;$i<mysql_num_rows($chanpingtwo);$i++){
		$shiping[$i]=mysql_fetch_array($chanpingtwo,MYSQLI_ASSOC);
	}

	//3楼产品
	$chanpingthree=mysql_query("select * from jiayongdianqi");
	$jiayong=array();
	for($i=0;$i<mysql_num_rows($chanpingtwo);$i++){
		$jiayong[$i]=mysql_fetch_array($chanpingthree,MYSQLI_ASSOC);
	}
	//首页数据接口
	class indexdata{

	}
	$index=new indexdata();
	$index->lunbo=$arrayimg;
	$index->onemoney=$shoujiimg;
	$index->twomoney=$shiping;
	$index->threemoney=$jiayong;
	
	echo json_encode($index);
 ?>