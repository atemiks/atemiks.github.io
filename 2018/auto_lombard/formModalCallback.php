<?php

$headers = "From: atemiks@gmail.com";


$recepient = "atemiks@gmail.com";
$sitename = "Выдаем деньги в СПБ - С НАМИ НАДЕЖНО И ВЫГОДНО!";

$name = trim($_POST["modalCallbackName"]);
$phone = trim($_POST["modalCallbackPhone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n $headers");