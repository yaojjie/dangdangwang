<?php
$db = mysqli_connect("127.0.0.1","root","","dangdang");

// 修改数据库编码为中文
mysqli_set_charset($db,"utf8");

$sql = "SELECT * FROM liebiao";
$result = mysqli_query($db,$sql);
$size = mysqli_num_rows($result);

$count = ceil($size / 48);
// echo "{\"count\":$count}";
$data = array("count"=>$count);
echo json_encode($data,true);
?>