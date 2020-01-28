<?php
$cont = $_REQUEST["cont"];
$db = mysqli_connect("127.0.0.1","root","","dangdang");
mysqli_query($db,'set names utf8');
$sql = "SELECT * FROM liebiao WHERE id='$cont'";
$result = mysqli_query($db,$sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);
?>