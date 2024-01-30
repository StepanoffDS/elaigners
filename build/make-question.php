<?php

$name = $_POST['questionFormName'];
$name = htmlspecialchars($name);
$name = urldecode($name);
$name = trim($name);
$email = $_POST['questionFormEmail'];
$email = htmlspecialchars($email);
$email = urldecode($email);
$email = trim($email);
$tel = $_POST['questionFormPhone'];
$tel = htmlspecialchars($tel);
$tel = urldecode($tel);
$tel = trim($tel);
$message = $_POST['questionFormMessage'];
$message = htmlspecialchars($message);
$message = urldecode($message);
$message = trim($message);
$utm_source = $_POST['utm_source'];
$utm_medium = $_POST['utm_medium'];
$utm_campaign = $_POST['utm_campaign'];
$utm_term = $_POST['utm_term'];
$utm_content = $_POST['utm_content'];

$body = "Имя: " . $name;
$body .= "\r\nE-mail: " . $email;
$body .= "\r\nТелефон: " . $tel;
$body .= "\r\nСообщение: " . $message;
$body .= "\r\nutm_source: " . $utm_source;
$body .= "\r\nutm_medium: " . $utm_medium;
$body .= "\r\nutm_campaign: " . $utm_campaign;
$body .= "\r\nutm_term: " . $utm_term;
$body .= "\r\nutm_content: " . $utm_content;
$to = 'info@slavinasmile.ru, info@webuse.pro, olesyaxv1@yandex.ru';
// $to = 'stepanoff-web@mail.ru';
$headers = "From: Лендинг Элайнеры <info@slavinasmile.ru>\r\n";
$subject = "Вопрос к врачу с лендинга Элайнеры";
mail($to, $subject, $body, $headers);
