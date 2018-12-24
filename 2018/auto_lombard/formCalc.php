<?php

$headers = "From: atemiks@gmail.com";


$recepient = "atemiks@gmail.com";
$sitename = "Выдаем деньги в СПБ - С НАМИ НАДЕЖНО И ВЫГОДНО!";

$name = trim($_POST["formCalcName"]);
$phone = trim($_POST["formCalcPhone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n $headers");