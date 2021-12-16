<?php
$to = "contact@365physiotherapy.ie";
$subject = "New Message from Contact Form";
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

$message = "
<html>
<head>
<style>
table, th, td {
  border: 1px solid black;
}
</style>
</head>
<body>
<p>Hi Admin!</p>
<p>You have new message from contact form. Form details given below.</p>
<table>
<tr>
<th>Firstname</th>
<th>Lastname</th>
<th>Email</th>
<th>Phone</th>
<th>Selection</th>
<th>Message</th>
</tr>
<tr>
<td>".$_GET['firstname']."</td>
<td>".$_GET['lastname']."</td>
<td>".$_GET['email']."</td>
<td>".$_GET['number']."</td>
<td>".$_GET['selection']."</td>
<td>".$_GET['msg']."</td>
</tr>
</table>
</body>
</html>
";

$headers .= "Reply-To: The Sender <contact@365physiotherapy.ie>\r\n"; 
$headers .= "Return-Path: The Sender <contact@365physiotherapy.ie>\r\n"; 
$headers .= "From: contact@365physiotherapy.ie" ."\r\n" .
$headers .= "Organization: Sender Organization\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "X-Priority: 3\r\n";
$headers .= "X-Mailer: PHP". phpversion() ."\r\n" ;

mail($to,$subject,$message,$headers);
?>