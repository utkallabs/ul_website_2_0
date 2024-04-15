<?php 
include('config.php');

use PHPMailer\PHPMailer\PHPMailer;

require 'phpmailer/Exception.php';
require 'phpmailer/PhpMailer.php';
require 'phpmailer/SMTP.php';

if(isset($_POST['g-recaptcha-response'])){
    
    $ip = $_SERVER['REMOTE_ADDR'];
    $captchaResponse = $_POST['g-recaptcha-response'];
    $captchaVerifyUrl = "https://www.google.com/recaptcha/api/siteverify?secret=$reCaptchaSecretKey&response=$captchaResponse&remoteip=$ip";
    $fire = file_get_contents($captchaVerifyUrl);
    $data = json_decode($fire);

    if($data->success == 'true'){
        $mail = new PHPMailer(true);

        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        if(isset($_POST['message'])){
            $message = $_POST['message'];
        }else{
            $message = "";
        }
        if(isset($_POST['position'])){
            $position = $_POST['position'];
        }
        if(isset($_POST['pagename'])){
            $pagename = $_POST['pagename'];
        }
        if(isset($_FILES['fileInput'])){
            $file = $_FILES['fileInput'];
            $allowedExtensions = ['pdf', 'doc', 'docx'];
            $fileExtension = pathinfo($file['name'], PATHINFO_EXTENSION);
            if (!in_array(strtolower($fileExtension), $allowedExtensions)) {
                echo json_encode(array(
                    'responseCode' => 401,
                    'message' => "Invalid file extension. Allowed extensions: " . implode(", ", $allowedExtensions)
                ));
                exit; 
            }
            $maxFileSize = 2 * 1024 * 1024; // 2MB
            if ($file['size'] > $maxFileSize) {
                echo json_encode(array(
                    'responseCode' => 401,
                    'message' => "File size exceeds limit. Max allowed size: 2MB"
                ));
                exit; 
            }
        }
        
        $mail->isSMTP();
        $mail->Host = $mailHost;
        $mail->SMTPAuth = true;
        $mail->Username = $mailUsername;
        $mail->Password = $mailPassword;
        $mail->SMTPSecure = $mailEncryption;
        $mail->Port = $mailPort;

        if(isset($_FILES['fileInput'])){
            $mail->addAttachment($file['tmp_name'], $file['name']);
        }
        
        $mail->setFrom($mailUsername);
        $mail->addAddress($mailUsername);
        
        $mail->isHTML(true);
        if(isset($_POST['pagename'])){
            $mail->addAddress($hrMailAddress);
            $mail->Subject = 'Message Received (Career Page)';
            $mail->Body = "<h3>Position : $position <br> Name : $name <br> Email : $email <br> Phone : $phone <br> Description : $message <br> </h3>";
            $successMsg = 'Thank you! your application successfully submitted.';
        }else{
            $mail->Subject = 'Message Received (Contact Page)';
            $mail->Body = "<h3>Name : $name <br> Email : $email <br> Phone : $phone <br> Message : $message </h3>";
            $successMsg = 'Message Sent! Thank you for contacting us.';
        }
        
        if($mail->send()){
            echo json_encode(array(
                'responseCode' => 200,
                'message' => $successMsg
            ));
        }else{
            echo json_encode(array(
                'responseCode' => 401,
                'message' => 'Something went wrong!'
            ));
        }
    }else{
        echo json_encode(array(
            'responseCode' => 401,
            'message' => 'Please fill Recaptcha'
        ));
    }
}else{
    echo json_encode(array(
        'responseCode' => 401,
        'message' => 'Please fill Recaptcha'
    ));
}

?>