const fs = require("fs").promises;
const sendMails = require("./auth");

const Handlebars = require("handlebars");

const sendToTAdS = async (data) => {
  let html = await fs.readFile("mailToTAdS.html", { encoding: "utf-8" });
  let template = Handlebars.compile(html);
  let htmlToSend = template(data);
  var mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `New Query from TAdS Website: ${await data.subject} `,
    html: htmlToSend,
  };
  res = await sendMails(mailOptions);
  return res;
};

module.exports = sendToTAdS;
