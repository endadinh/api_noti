const { app, db } = require("../firebase/firebase_connect");

async function save(req,res) {
  const noti = {
    title: req.title,
    content: req.content,
  };
  const ref = db.ref(db.getDatabase(app), "/noti/");
  let data = await db.push(ref, noti);
  if(data) {
      return { 
          status: 201,
          message: "Successfully!!",
      }
  }
  else { return "Cannot post notification, something wrong!!!"}
  
}
async function get(req, res) {
  const dbRef = db.ref(db.getDatabase());
  let data = await db
    .get(db.child(dbRef, `/noti/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    })
    .catch((error) => {
      return error;
    });
    if(data) { 
        return { 
           message: "Get successfully",
           data: data
        }
    }
    else { return "Cannot get Noti, something wrong!!!"}
}

module.exports = {
  save: save,
  get: get,
};
