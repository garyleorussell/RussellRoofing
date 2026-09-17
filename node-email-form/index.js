const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const port = 8080;
const { HttpsProxyAgent } = require('https-proxy-agent');

// Proxy server URL and port
const proxyUrl = 'https://russellroofinginc.com/send-mail';
const proxyPort = 8080;

// Create a proxy agent
const proxyAgent = new HttpsProxyAgent(`${proxyUrl}:8080`);

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const service = req.body.service;
  console.log("an email was tried to be sent");
  const transporter = nodemailer.createTransport({
    host: 'smtp.dreamhost.com',
    port: 587,
    secure: false,
    auth: {
      user: 'website@russellroofinginc.com', 
      pass: 'RussellRoofing123!' 
    },
    proxy: proxyUrl,
    pool: true,
    transportOptions: { agent: proxyAgent }
  });

  const mailOptions = {
    from: 'website@russellroofinginc.com',
    to: 'website@russellroofinginc.com', 
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Service Requesting: ${service}
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Form submitted successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});