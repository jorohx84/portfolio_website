<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpMailer/src/Exception.php';
require 'phpMailer/src/PHPMailer.php';
require 'phpMailer/src/SMTP.php';

require 'config.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

  // Eingaben sichern
  $name  = trim($_POST['name']);
  $email = trim($_POST['email']);
  $phone = trim($_POST['phone']);
  $message = trim($_POST['message']);

  if (empty($name) || empty($email)) {
    exit('Pflichtfelder fehlen.');
  }

  $mail = new PHPMailer(true);

  try {
    // 🔐 STRATO SMTP
        $mail->isSMTP();
        $mail->Host       = SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = SMTP_USER;
        $mail->Password   = SMTP_PASS;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = SMTP_PORT;
        $mail->Charset = 'UTF-8';
        $mail->Encoding = 'base64';
        $mail->ContentType = 'text/html'; // explizit setzen
        $mail->AltBody = strip_tags($message);

    // Absender & Empfänger
    $mail->setFrom('system@teamscap.de', 'Kontaktformular');
    $mail->addAddress('kontakt@johannes-roth.de'); // Zieladresse
    $mail->addReplyTo($email, $name);

    // Inhalt
    $mail->isHTML(true);
    $mail->Subject = 'Neue Nachricht vom Kontaktformular';
    $mail->Body    = "

      <h2>Es ist eine neue Nachricht aus dem Kontaktformular eingegangen!</h2>
      <p>Es wurden folgende Informationen hinterlegt:</p>
      <strong>Name:</strong> {$name}<br>
      <strong>E-Mail:</strong> {$email}<br>
      <strong>Telefon:</strong> {$phone}<br><br>
  
      <strong>Nachricht:</strong> <br>
      <strong>___________________________________________________</strong><br>
      <br>{$message} <br> <br><br><br>


      <strong>Freundliche Gruesse</strong><br>
      <h3>Deine Webseite</h3>
      
    ";

    $mail->AltBody = "Name: $name\nE-Mail: $email\nTelefon: $phone";

    $mail->send();
    echo 'OK';

  } catch (Exception $e) {
    echo "Fehler: {$mail->ErrorInfo}";
  }
}
