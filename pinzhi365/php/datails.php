<?php
	require "conn.php";
	//$src=$_GET['src'];
	$chanpingone=mysql_query("select * from shoujishuma");
	$shoujiimg=array();
	for($i=0;$i<mysql_num_rows($chanpingone);$i++){
		$shoujiimg[$i]=mysql_fetch_array($chanpingone,MYSQLI_ASSOC);
	}


	class detailsdata{

	} 
	$details=new detailsdata();
	$detailsdata->onemoney=$shoujiimg;

	echo json_encode($detailsdata);
 ?>