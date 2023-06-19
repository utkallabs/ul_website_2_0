<?php 
include('config.php');

use PHPMailer\PHPMailer\PHPMailer;

require 'phpmailer/Exception.php';
require 'phpmailer/PhpMailer.php';
require 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);

$alert = '';

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    try{
        $mail->isSMTP();
        $mail->Host = $mailHost;
        $mail->SMTPAuth = true;
        $mail->Username = $mailUsername;
        $mail->Password = $mailPassword;
        $mail->SMTPSecure = $mailEncryption;
        $mail->Port = $mailPort;

        $mail->setFrom('vaibhavbanerjee@gmail.com');
        $mail->addAddress($_POST['email']);

        $mail->isHTML(true);
        $mail->Subject = 'Message Received (Contact Page)';
        $mail->Body = "<h3>Name : $name <br> Email : $email <br> Phone : $phone <br> Message : $message </h3>";

        $mail->send();
        $alert = '<div class="alert-success">
                    <span>Message Sent! Thank you for contacting us.</span>
                 </div>';
        if($_POST['redirectpage'] == 1){
            header("Location: ". $serverHost ."/index.html");
        }else{
            header("Location: ". $serverHost ."/contact.html");
        }
        
    }catch(Exception $e){
        $alert = '<div class="alert-danger">
                    <span>'. $e->getMessage() .'</span>
                 </div>';
    }
}

?>