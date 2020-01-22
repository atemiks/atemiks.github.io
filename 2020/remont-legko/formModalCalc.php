<?php

$headers = "From: mrakopotnik@mail.ru";


$recepient = "mrakopotnik@mail.ru";
$sitename = "Ремонт Легко";

$name = trim($_POST["formModalCalcName"]);
$phone = trim($_POST["formModalCalcPhone"]);
$message = "Имя: $name \nТелефон: $phone \n";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n $headers");