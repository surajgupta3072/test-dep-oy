const fs = require("fs").promises;
const sendMails = require("./auth");

const Handlebars = require("handlebars");

const sendToClient = async (data) => {
  fs.readFile("mailToClient.html", { encoding: "utf-8" });
  let html = await fs.readFile("mailToTAdS.html", { encoding: "utf-8" });
  let template = Handlebars.compile(html);
  let htmlToSend = template(data);
  var mailOptions = {
    from: process.env.EMAIL,
    to: await data.email,
    subject: `Team TAdS: Your Query has been recieved`,
    html: htmlToSend,
  };
  res = await sendMails(mailOptions);
  return res;
};

module.exports = sendToClient;
