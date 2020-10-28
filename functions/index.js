const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// admin.firestore().settings({ ignoreUndefinedProperties: true })
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: true }));

// get all the data from menu
app.get("/", async (req, res) => {
  const items = [];
  try {
    const snap = await admin.firestore().collection("menuItems").get();
      snap.forEach(item => {
        const id = item.id
        const data = item.data()
        items.push({id, data})
      })
  } catch (error) {
    console.log({ message: error });
  }
  res.send(items)
});

// get individual menu by id 
app.get("/:id", async (req, res) => {
    const snapshot = await
    admin.firestore().collection('menuItems').doc(req.params.id).get();
    const menuId = snapshot.id;
    const menu = snapshot.data();
    res.send({id: menuId, menu});
  })

// with an option to post more than one data to menu at once
app.post("/", async (req, res) => {
  const data = await req.body.map((item) => {
    const items = {
      name: item.name,
      image: item.image,
      alt: item.alt,
      category : item.category,
      date: Date.now(),
    };
    return items;
  });

  data.forEach((item) => {
    admin.firestore().collection("menuItems").add(item);
  });
  res.send(data);
});



exports.menu = functions.https.onRequest(app);
