<?php
    //注册验证
    mysql_Connect('127.0.0.1','root','hdpHdp8252000.');
    mysql_query('use sz1902');
    $phone = $_POST['phone'];
    $pwd = $_POST['pwd'];
    $sql = "insert into username(username,password) values('$phone','$pwd')";
    mysql_query($sql);
    $num = mysql_affected_rows();
    if($num){
        $response=['code'=>200,'message'=>'注册成功'];
    }else{
        $response=['code'=>-1,'message'=>'注册成功'];
    }
    echo json_encode($response)




?>