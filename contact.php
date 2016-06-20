<?php 
    $name=$_REQUEST['name']; 
    $email=$_REQUEST['email']; 
    $message=$_REQUEST['message']; 
    $from="From: $name<$email>\r\nReturn-path: $email"; 
	$subject="Message sent using your contact form"; 
    mail("contact@ople.io", $subject, $message, $from); 
?> 