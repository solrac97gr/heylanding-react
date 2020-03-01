/* tslint:disable */
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const cors = require("cors")({ origin: true });

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();

export const GetTechnicians = functions.https.onRequest(
  async (request, response) => {
    await cors(request, response, async () => {
      var users: any = [];
      await db
        .collection("Usuario")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            users.push(doc.data());
          });
        })
        .catch((err) => {
          console.log("Error getting documents", err);
        });
      response.set("Access-Control-Allow-Origin", "*");
      response.send(JSON.stringify(users));
      response.send("Passed.");
    });
  }
);

export const CreateUser = functions.https.onRequest(
  async (request, response) => {
    await cors(request, response, async () => {
      var email = request.query.email;
      var password = request.query.password;
      admin
        .auth()
        .createUser({
          email: email,
          password: password
        })
        .then(function(userRecord) {
          console.log("Successfully created new user:", userRecord.uid);
          response.status(200);
          response.send(JSON.stringify(userRecord.uid));
        })
        .catch(function(error) {
          response.status(508);
          console.log("Error creating new user:", error);
        });
    });
  }
);
