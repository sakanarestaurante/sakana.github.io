<?php

$recipient = 'sakana@sakanarestaurante.es';

$date = $_POST['datepicker'];
$time = $_POST['time'];
$persons = $_POST['persons'];
$author = $_POST['author'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$mess = $_POST['message'];

if (isset($_POST['email'])) {	
	if (preg_match('(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,})', $_POST['email'])) {
		$msg = 'E-mail address is valid';
	} else {
		$msg = 'Invalid email address';
	}

  $ip = getenv('REMOTE_ADDR');
  $host = gethostbyaddr($ip);	
  $message = "Fecha: ".$date."\n";
  $message .= "Hora: ".$time."\n";
  $message .= "Personas: ".$persons."\n";
  $message .= "Nombre: ".$author."\n";
  $message .= "Email: ".$email."\n";
  $message .= "Movil: ".$phone."\n";
  $message .= "Mensaje: ".$mess."\n\n";
  //$message .= "IP:".$ip." HOST: ".$host."\n";
  
  $headers = "From: <".$email.">\r\n"; 
  $title = "Reserva sakana";
  
    if(isset($_POST['url']) && $_POST['url'] == ''){

       $sent = mail($recipient, $title, $message, $headers); 
}
  

} else {
	die('Invalid entry!');
}

?>