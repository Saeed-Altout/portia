importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyD6ViOS3uD-XwyOGT1z_ssPdOqV0MN-6Rg",
  authDomain: "portia-57398.firebaseapp.com",
  projectId: "portia-57398",
  storageBucket: "portia-57398.firebasestorage.app",
  messagingSenderId: "513569291218",
  appId: "1:513569291218:web:8c98cdccff4f97b3fd660b",
  measurementId: "G-FQD36DDW6Q",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("payload", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
