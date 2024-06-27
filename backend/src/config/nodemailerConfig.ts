import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // Votre adresse email Gmail
    pass: process.env.GMAIL_PASS, // Votre mot de passe Gmail ou un mot de passe d'application
  },
});

export default transporter;
