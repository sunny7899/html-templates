// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../public')));

// app.post('/subscribe', (req, res) => {
//     const email = req.body.email;
//     console.log(email);
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.GMAIL_USER,
//             pass: process.env.GMAIL_PASS
//         }
//     });

//     const mailOptions = {
//         from: process.env.GMAIL_USER,
//         to: email,
//         subject: 'Welcome to Our Newsletter!',
//         text: 'Thank you for signing up for our newsletter. Stay tuned for updates!',
//         html: '<strong>Thank you for signing up for our newsletter. Stay tuned for updates!</strong>'
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error(error);
//             res.status(500).send('Error sending email');
//         } else {
//             console.log('Email sent: ' + info.response);
//             res.status(200).send('Email sent');
//         }
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
function sendMail(){
    event.preventDefault();
    var params={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
    };


 const serviceId="service_x4xdhbi";
 const templateId="template_wemqboy";
 emailjs.send(serviceId,templateId,params)
 .then(
    res=>{
        document.getElementById('name').value=""; 
        document.getElementById('email').value=""; 
        alert("Mail sent");
    }
 )
 .catch((err)=>{
    alert("Mail couldn't be sent");
    console.log(err);
 });
}