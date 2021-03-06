const mongoose = require("mongoose");
const Product = mongoose.model("products");
const nodemailer = require("nodemailer");
const creds = require("../config");

module.exports = (app) => {
  const transport = {
    host: "smtpout.secureserver.net",
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
      ciphers: "SSLv3",
    },
    requireTLS: true,
    port: 465,
    auth: {
      user: creds.USER,
      pass: creds.PASS,
    },
  };

  const transporter = nodemailer.createTransport(transport);

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take messages");
    }
  });

  app.get(`/api/product/:id`, async (req, res) => {
    const { id } = req.params;
    let product = await Product.findById(id, req.body);
    return res.status(202).send({
      error: false,
      product,
    });
  });

  app.get(`/api/product`, async (req, res) => {
    let products = await Product.find();
    return res.status(200).send(products);
  });

  app.post(`/api/product`, async (req, res) => {
    let product = await Product.create(req.body);
    return res.status(201).send({
      error: false,
      product,
    });
  });

  app.put(`/api/product/:id`, async (req, res) => {
    const { id } = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product,
    });
  });

  app.delete(`/api/product/:id`, async (req, res) => {
    const { id } = req.params;

    let product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product,
    });
  });

  app.post("/api/send", (req, res, next) => {
    console.log("API SEND");
    let name = req.body["first-name"] + " " + req.body["last-name"];
    let contact = req.body.number;
    let email = req.body.email;
    let service = req.body.dropdown;
    let message = req.body.message;
    let content = `<html>
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
    <td>${req.body["first-name"]}</td>
    <td>${req.body["last-name"]}</td>
    <td>${email}</td>
    <td>${contact}</td>
    <td>${service}</td>
    <td>${message}</td>
    </tr>
    </table>
    </body>
    </html>
    `;
    // `name: ${name} \n contact: ${contact} \n email: ${email} \n message: ${message} \n service: ${service}`;

    let mail = {
      from: req.body.email,
      to: creds.USER,
      subject: "New Message from Contact Form",
      html: content,
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log("send mail as error" + err + data);
        res.json({
          status: "fail",
          data: err,
        });
        res.end();
      } else {
        console.log("send mail " + data);
        res.json({
          status: "success",
          data: mail,
        });
        res.end();
      }
    });
  });
};
