<?php

$from = 'info@bg.dennisya.ru';

$sendto  = 'atemiks@gmail.com'; // кому отправляем


$user_phone = trim($_POST["phone"]);

// Формирование заголовка письма
$subject  = "Новая заявка с сайта: БИЗНЕС ГРУПП АВТО";
$headers  = "From: " . strip_tags($from) . "\r\n";
$headers .= "Reply-To: ". strip_tags($from) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новая заявка с сайта</h2>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$user_phone."</p>\r\n";

$msg .= "</body></html>";


// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}

?>