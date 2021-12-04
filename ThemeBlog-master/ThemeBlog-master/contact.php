<?php

if (isset($_POST['submit'])) { 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $ToEmail = 'test@test.com';
    $website = $_POST['website']; 
    $mailheader = "From: ".$_POST["email"]."\r\n"; 
    $mailheader .= "Reply-To: ".$_POST["email"]."\r\n"; 
    $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
    $MESSAGE_BODY = "Name: ".$_POST["name"]."<br>"; 
    $MESSAGE_BODY .= "Email: ".$_POST["email"]."<br>"; 
    $MESSAGE_BODY .= "Website:".$_POST['website']."<br />";  
    $MESSAGE_BODY .= "Message: ".nl2br($_POST["message"])."<br>";

    if(mail($ToEmail, $website, $MESSAGE_BODY, $mailheader)) {
        echo "<script>alert('Mail was sent !');</script>";
        echo "<script>window.location.href='http://localhost/Running/technextblog/contact.html'</script>";
    }
    else {
        echo "<script>alert('Mail was not sent. Please try again later');</script>";
    }
}