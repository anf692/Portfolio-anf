<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name           = htmlspecialchars($_POST['name']);
    $visitor_email  = htmlspecialchars($_POST['email']);
    $message        = htmlspecialchars($_POST['message']);

    $to             = "fassaane348@gmail.com";
    $email_subject  = "Nouveau message de $name";
    $email_body     = "Vous avez reçu un nouveau message.\n\n"
                    . "Nom: $name\n"
                    . "Email: $visitor_email\n\n"
                    . "Message:\n$message";
    $headers        = "From: $visitor_email\r\n"
                    . "Reply-To: $visitor_email\r\n"
                    . "X-Mailer: PHP/" . phpversion();

    if (mail($to, $email_subject, $email_body, $headers)) {
        header('Location: merci.html');
    } else {
        header('Location: index.html?error=1');
    }
    exit;
}
?>

