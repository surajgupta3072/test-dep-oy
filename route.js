const express = require("express");
const sendToClient = require("./mailToClient");
const sendToTAdS = require("./mailToTAdS");
const router = express.Router();
const bodyParser = require("body-parser");

router.post("/contact", bodyParser.json(), async (req, res) => {
  try {
    let data = await req.body;
    let logStatus = await sendToTAdS(await data);

    if (await logStatus) {
      console.log(`LogStatus: ${await logStatus}`);
      res.status(200).send({
        status: true,
        emailContent: {
          queryBy: data.name,
          queryByEmail: data.email,
          subject: data.subject,
          message: data.message,
        },
      });
      let replyStatus = await sendToClient(data);
      console.log(`replyStatus: ${await replyStatus}`);
    } else {
      res.status(400).send({
        status: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
