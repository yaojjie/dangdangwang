<?php
$db = mysqli_connect("127.0.0.1","root","","dangdang");
$password = $_REQUEST["password"];
$phone    = $_REQUEST["phone"];

$sql = "SELECT * FROM user WHERE phone='$phone'";
$result = mysqli_query($db,$sql);
if(mysqli_num_rows($result) == 0)
{
  # 该用户不存在可以直接注册
  # 具体：向数据库中写入一行数据
  $sql = "INSERT INTO `user` (`id`,  `phone`, `password`) VALUES (NULL, '$phone', '$password' )";
  $result = mysqli_query($db, $sql);
  
  $arr = array("status"=>"success","msg"=> "恭喜你，注册成功！");
  echo json_encode($arr);
  // echo '{"status":"success","msg":"恭喜你，注册成功！"}';
}else{
  # 该用户已经存在，不能再注册
  echo '{"status":"error","msg":"抱歉，该号码已经被注册，请换一个手机号码！！"}';
}
?>