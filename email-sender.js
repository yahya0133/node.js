const nodemailer = require('nodemailer');

// Configurer le transporteur
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'votre-email@gmail.com', // remplacez par votre email
        pass: 'votre-mot-de-passe'     // remplacez par votre mot de passe
    }
});

// Configurer les options de l'email
const mailOptions = {
    from: 'votre-email@gmail.com',
    to: 'destinataire@email.com',
    subject: 'Test Email from Node.js',
    text: 'This is a test email sent using Node.js and Nodemailer!'
};

// Envoyer l'email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});