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
	for($i=0;$i<mysql_num_rows($chanpingthree);$i++){
		$jiayong[$i]=mysql_fetch_array($chanpingthree,MYSQLI_ASSOC);
	}

	//4楼产品
	$chanpingfour=mysql_query("select * from gehuhuazhuang");
	$gehu=array();
	for($i=0;$i<mysql_num_rows($chanpingfour);$i++){
		$gehu[$i]=mysql_fetch_array($chanpingfour,MYSQLI_ASSOC);
	}
	//5楼产品

	$chanpingfive=mysql_query("select * from fushineiyi");
	$fushi=array();
	for($i=0;$i<mysql_num_rows($chanpingfive);$i++){
		$fushi[$i]=mysql_fetch_array($chanpingfive,MYSQLI_ASSOC);
	}

	//6楼产品
	$chanpingsix=mysql_query("select * from xiexuexiangbao");
	$xiexue=array();
	for($i=0;$i<mysql_num_rows($chanpingsix);$i++){
		$xiexue[$i]=mysql_fetch_array($chanpingsix,MYSQLI_ASSOC);
	}

	//7楼产品
	$chanpingseven=mysql_query("select * from yingyangbaojian");
	$yingyang=array();
	for($i=0;$i<mysql_num_rows($chanpingseven);$i++){
		$yingyang[$i]=mysql_fetch_array($chanpingseven,MYSQLI_ASSOC);
	}

	//8楼产品
	$chanpingeight=mysql_query("select * from jiajvyongping");
	$jiajv=array();
	for($i=0;$i<mysql_num_rows($chanpingeight);$i++){
		$jiajv[$i]=mysql_fetch_array($chanpingeight,MYSQLI_ASSOC);
	}

	//9楼产品
	$chanpingnine=mysql_query("select * from jiafangjiashi");
	$jiafang=array();
	for($i=0;$i<mysql_num_rows($chanpingnine);$i++){
		$jiafang[$i]=mysql_fetch_array($chanpingnine,MYSQLI_ASSOC);
	}


	//10楼产品
	$chanpingten=mysql_query("select * from muyinwanjv");
	$muyin=array();
	for($i=0;$i<mysql_num_rows($chanpingten);$i++){
		$muyin[$i]=mysql_fetch_array($chanpingten,MYSQLI_ASSOC);
	}


	//11楼产品
	$chanpingeleven=mysql_query("select * from muyinwanjv");
	$yundong=array();
	for($i=0;$i<mysql_num_rows($chanpingeleven);$i++){
		$yundong[$i]=mysql_fetch_array($chanpingeleven,MYSQLI_ASSOC);
	}
	

	//首页数据接口
	class indexdata{

	}
	$index=new indexdata();
	$index->lunbo=$arrayimg;
	$index->onemoney=$shoujiimg;
	$index->twomoney=$shiping;
	$index->threemoney=$jiayong;
	$index->fourmoney=$gehu;
	$index->fivemoney=$fushi;
	$index->sixmoney=$xiexue;
	$index->sevenmoney=$yingyang;
	$index->eightmoney=$jiajv;
	$index->ninemoney=$jiafang;
	$index->tenmoney=$muyin;
	$index->elevenmoney=$yundong;

	echo json_encode($index);
 ?>