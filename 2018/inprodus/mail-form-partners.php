<?php

$headers = "From: mrakopotnik@mail.ru" . "\r\n" .
"CC: mrakopotnik@mail.ru";


$recepient = "mrakopotnik@mail.ru, t89206039003@gmail.com";
$sitename = "ИНПРОДАС - Выполняем полный комплекс работ с металлом, пластиком и резиной!";

$name = trim($_POST["formPartnersName"]);
$phone = trim($_POST["formPartnersPhone"]);
$email = trim($_POST["formPartnersEmail"]);
$status = trim($_POST["formPartnersStatus"]);
$text = trim($_POST["formPartnersMessage"]);
$message = "Имя: $name \nТелефон: $phone \nПочта: $email \nСтатус: $status \nСообщение: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n $headers");