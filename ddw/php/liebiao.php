<?php
$db = mysqli_connect("127.0.0.1","root","","dangdang");

// 修改数据库编码为中文
mysqli_set_charset($db,"utf8");

// 编写sql语句查询数据库中的数据
$page = $_REQUEST["page"];
$start = ($page - 1)*48;

$type = $_REQUEST["type"];
if($type == "default")
{
 $sql = "SELECT * FROM liebiao LIMIT $start,48";
}elseif($type == "desc")
{
 $sql = "SELECT * FROM liebiao ORDER BY price DESC LIMIT $start,48";
}elseif($type == "asc")
{
 $sql = "SELECT * FROM liebiao ORDER BY price ASC LIMIT $start,48";
}

// 把数据以json格式返回
$result = mysqli_query($db,$sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);
?>