<?php
# 00-设置响应头信息(告诉客户端返回的是JSON数据)
// header("Content-Type:text/json; charset=UTF-8");

# 01-加载JSON文件中的数据
$file = file_get_contents("../js/shouye.Json");
// # 02-把JSON数据原样返回
echo $file;

// echo '{"type":"id"}';
?>