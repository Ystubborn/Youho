<?php
    //登录验证
    mysql_connect('127.0.0.1','root','hdpHdp8252000.');
    mysql_query('use sz1902');
    $username = $_POST['username'];
    $password = $_POST['password'];
    $sql = "select * from username where username='$username'and password='$password'";
    $result = mysql_query($sql);
    $row = mysql_fetch_assoc($result);
    if($row){
        $response = ['code'=>200,'message'=>'登录成功'];
    }else{
        $response = ['code'=>-1,'message'=>'用户名或密码错误'];
    }
    echo json_encode($response);
?>