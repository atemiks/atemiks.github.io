<?php

$from = 'info@bg.dennisya.ru';

$sendto  = 'atemiks@gmail.com'; // кому отправляем


$user_name = trim($_POST["name"]);
$user_surname = trim($_POST["surname"]);
$user_phone = trim($_POST["phone"]);
$user_email = trim($_POST["email"]);

// Формирование заголовка письма
$subject  = "Новая заявка с сайта: БИЗНЕС ГРУПП АВТО";
$headers  = "From: " . strip_tags($from) . "\r\n";
$headers .= "Reply-To: ". strip_tags($from) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новая заявка с сайта</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$user_name."</p>\r\n";
$msg .= "<p><strong>Фамилия:</strong> ".$user_surname."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$user_phone."</p>\r\n";
$msg .= "<p><strong>Почта:</strong> ".$user_email."</p>\r\n";

$msg .= "</body></html>";


// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}

?>