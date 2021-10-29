const express = require("express");
const notiController = require("../controllers/noti.controller");
const router = express.Router();
const FCM = require("fcm-node");
const SERVER_KEY =
  "AAAAYbuK3Y8:APA91bEVG_rDxJDPQyKw23-05wfUy5qdNgkmmuEVCqSmj8bxdY2dRXHEpDMJ8tWcMgwNWrfLTqvpaZ0NnYxSW1UTq95LWYuWflfjDr-LPqgvmz4RBwzm8cQQf9w-QjzLggsmkUsf7e9G";

router.get("/", async (req, res) => {
  try {
    const getNoti = await notiController.get();
    console.log(getNoti);
    res.status(200).json({
      status: 200,
      message: getNoti.message,
    });
  } catch (error) {
    throw new Error("Lỗi");
  }
});
router.post("/sendToAll", async (req, res, next) => {
  try {
    const noti = {
      title: req.body.title,
      content: req.body.body,
    };
    const SaveNoti = await notiController.save(noti);
    let fcm = new FCM(SERVER_KEY);
    let message = {
      to: "/topics/news",
      notification: {
        title: req.body.title,
        body: req.body.body,
        sound: "default",
        click_action: "FCM_PLUGIN_ACTIVITY",
        icon: "fcm_push_icon",
      },
      data: req.body.data,
      android: {
        notification: {
          title: req.body.title,
          body: req.body.body,
          sound: "default",
        },
        direct_boot_ok: true,
      },
      apns: {
        payload: {
          alert: {
            title: req.body.title,
            body: req.body.body,
          },
          category: "POST_NOTIFICATION",
        },
      },
      webpush: {
        title: req.body.title,
        body: req.body.body,
        click_action: "FCM_PLUGIN_ACTIVITY",
      },
    };
    await fcm.send(message, (err, response) => {
      if (err) {
        next(err);
      } else {
        res.status(201).json({
          status: SaveNoti.status,
          message: SaveNoti.message,
          message_id: response.message_id,
        });
      }
      if (response) {
      }
    });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
