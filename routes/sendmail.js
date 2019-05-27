'use strict';
const nodemailer = require('nodemailer');
require('dotenv').config();
const MAIL_SMTP_HOST  = process.env.MAIL_SMTP_HOST;
const MAIL_AUTH_USER = process.env.MAIL_AUTH_USER;
const MAIL_AUTH_PASSWORD = process.env.MAIL_AUTH_PASSWORD;

module.exports = class Sendmail {
  constructor(params) {

this.subject = '［天板化粧シート］お申し込み完了のお知らせ';
this.bodyText = 'お申し込みが完了しました';

this.messageBody = `${params.username} 様
${this.bodyText}
【お申し込み内容】
お名前 :
${params.username}
メールアドレス :
${params.email}
性別 : 
${params.sex}
学年 :
${params.year}
学部 :
${params.college}
学科 :
${params.department}
部活・サークル
${params.club}
`;

    this.message = {
      from: '天板化粧シート <' + MAIL_AUTH_USER + '>',
      to: params.email,
      subject: this.subject,
      text: this.messageBody
    };
    this.smtpConfig = {
      host: MAIL_SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: MAIL_AUTH_USER,
        pass: MAIL_AUTH_PASSWORD
      }
    };
    this.transporter = nodemailer.createTransport(this.smtpConfig);
  }

  send() {
    this.transporter.sendMail(this.message, (error, response) => {
      if (error) {
        // 後でエラー処理をする
        console.log(error);
      } else {
        console.log(response);
      }
    });
  }
  
}
