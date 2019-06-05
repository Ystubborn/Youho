<?php
    //验证用户名唯一
    mysql_connect('127.0.0.1','root','hdpHdp8252000.');
    mysql_query('use sz1902');
    $phone = $_GET['phone'];
    $sql = "select * from username where username='$phone'";
    $result = mysql_query($sql);
    $row = mysql_fetch_assoc($result);
    if($row){
        $responseData = ['code'=>200,'message'=>'该手机号已注册'];
    }else{
        $responseData = ['code'=>-1,'message'=>'该手机号可以用'];
    }
    echo json_encode($responseData);
?>