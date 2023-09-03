import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
import User from "@/models/schema";

export const mailer = async ({ email, emailType, userId }: any) => {
  try {
    const hashToken = await bcryptjs.hash(userId.toString(), 10);
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyUserToken: hashToken,
        verifyUserTokenExpiry: Date.now() + 1300000,
      });
    } else {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashToken,
        forgotPasswordTokenExpiry: Date.now() + 1300000,
      });
    }

    var transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "03191ad241f625",
        pass: "a8b3d8a972c856",
      },
    });

    const mailOptions = {
      from: "krishnapaulraj2004@gmail.com",
      to: email,
      subject: emailType === "VERIFY" ? "Verify your email" : "Reset Password",
      html: `<p> Click <a herf="${process.env.DOMAIN}/${
        emailType === "VERIFY" ? "verifyemail" : "recreatePass"
      }?token=${hashToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      } </p>`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    return mailResponse;
  } catch (error: any) {
    return console.log({ error: error.message });
  }
};
