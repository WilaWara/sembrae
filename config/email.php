<?php
	session_start();
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

	$subject = "Mensaje de usuario de pagina web";
	$to = "sembraebolivia@gmail.com";
	$headers = "From: Web_Sembrae" . "\r\n";
	$headers .= "Content-type: text/html\r\n";

	$body = "Email: " . $email . "<br>Nombre: " . $nombre . "<br>Mensaje: " . $mensaje;
	$success = mail($to, $subject, $body, $headers);
	echo "Su mensaje ha sido correctamente enviado, muchas gracias!";
?>