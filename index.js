const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const bookingMail = require("./templates/bookingMail");
const config = require("./config");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));

const PORT = 5000 || process.env.PORT;

//this is because the smtp user is the same as the receiving mail
const contactAddress = config.user;

const mailer = nodemailer.createTransport({
  host: config.host,
  port: 465,
  secure: true,
  auth: {
    user: config.user,
    pass: config.pass
  }
});

app.get("/", (req, res) => {
  res.json({ msg: "welcome" });
});

app.post("/contact", function(req, res) {
  const {
    name,
    email,
    website,
    phone,
    organizationType,
    venue,
    state,
    country,
    typeOfEvent,
    eventDate,
    altDate,
    description
  } = req.body;
  const payload = {
    name,
    email,
    website,
    phone,
    organizationType,
    venue,
    state,
    country,
    typeOfEvent,
    eventDate,
    altDate,
    description
  };

  const from = `${name} <${email}>`;
  const subject = "Booking Received - www.nathanielbassey.net";

  mailer.sendMail(
    {
      from,
      to: [contactAddress],
      subject: subject || "[No subject]",
      html: bookingMail(payload) || "[No message]"
    },
    function(err, info) {
      if (err) return res.status(500).send(err);
      res.json({ success: true });
    }
  );
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
