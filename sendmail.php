<?php 
include('config.php');

use PHPMailer\PHPMailer\PHPMailer;

require 'phpmailer/Exception.php';
require 'phpmailer/PhpMailer.php';
require 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$mail->isSMTP();
$mail->Host = $mailHost;
$mail->SMTPAuth = true;
$mail->Username = $mailUsername;
$mail->Password = $mailPassword;
$mail->SMTPSecure = $mailEncryption;
$mail->Port = $mailPort;

$mail->setFrom($mailUsername);
$mail->addAddress($mailUsername);

$mail->isHTML(true);
$mail->Subject = 'Message Received (Contact Page)';
$mail->Body = "<h3>Name : $name <br> Email : $email <br> Phone : $phone <br> Message : $message </h3>";

if($mail->send()){
    echo json_encode(array(
        'responseCode' => 200,
        'message' => 'Message Sent! Thank you for contacting us.'
    ));
}else{
    echo json_encode(array(
        'responseCode' => 401,
        'message' => 'Something went wrong!'
    ));
}

?>