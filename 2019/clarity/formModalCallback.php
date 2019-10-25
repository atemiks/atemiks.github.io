<?php

$headers = "From: mrakopotnik@mail.ru";


$recepient = "mrakopotnik@mail.ru";
$sitename = "Clarity";

$name = trim($_POST["formModalCallbackName"]);
$phone = trim($_POST["formModalCallbackPhone"]);
$message = "Имя: $name \nТелефон: $phone \n";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n $headers");