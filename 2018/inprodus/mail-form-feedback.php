<?php

$headers = "From: mrakopotnik@mail.ru" . "\r\n" .
"CC: mrakopotnik@mail.ru";


$recepient = "mrakopotnik@mail.ru, t89206039003@gmail.com";
$sitename = "ИНПРОДАС - Выполняем полный комплекс работ с металлом, пластиком и резиной!";

$name = trim($_POST["formFeedbackName"]);
$phone = trim($_POST["formFeedbackPhone"]);
$text = trim($_POST["formFeedbackMessage"]);
$message = "Имя: $name \nТелефон: $phone \nСообщение: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n $headers");