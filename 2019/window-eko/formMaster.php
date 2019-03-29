<?php

$headers = "From: atemiks@gmail.com";


$recepient = "atemiks@gmail.com";
$sitename = "Окна немецкого качества в Брянске";

$name = trim($_POST["formMasterName"]);
$phone = trim($_POST["formMasterPhone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n $headers");