// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  msg: string;
};
type RecordRequest = {
  name: string;
  company: string;
  contact: string;
  company_size: string;
  content: string;
  from: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const receiver = process.env.EMAIL_RECEIVER;
  if (receiver) {
    const receivers = receiver?.split(",");
    receivers?.forEach((receiver) => {
      sendEmail(receiver, "", buildHtml(req.body as RecordRequest));
    });
  }
  res.status(200).json({ msg: "successs" });
}

function sendEmail(to: string, subject: string, html: string) {
  if (!to) {
    return;
  }
  // 创建一个smtp客户端配置

  const config = {
    host: "smtp.exmail.qq.com",
    port: 465,
    secureConnection: true,
    auth: {
      // 发件人邮箱账号
      user: process.env.EMAIL_SENDER,
      pass: process.env.EMAIL_SENDER_PWD,
    },
  };

  const transporter = nodemailer.createTransport(config);

  //创建一个收件人对象

  const mail = {
    // 发件人 邮箱 '昵称<发件人邮箱>'

    from: `"${process.env.EMAI_FROM}"<${process.env.EMAIL_SENDER}>`,

    // 主题

    subject: process.env.EMAI_SUBJECT,

    // 收件人 的邮箱

    to: to,

    //这里可以添加html标签

    html: html,
  };

  transporter.sendMail(mail, function (error, info) {
    if (error) {
      return console.log(error);
    }

    transporter.close();
  });
}

function buildHtml(data: RecordRequest) {
  //get current date
  const date = new Date();
  return `
    <p>name:${data.name}</p>
    <p>company:${data.company}</p>
    <p>companySize:${data.company_size}</p>
    <p>contact:${data.contact}</p>
    <p>from:${data.from}</p>
    <p>content:${data.content}</p>
    <p>created:${date}</p>
    `;
}
