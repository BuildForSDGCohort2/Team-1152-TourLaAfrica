
importScripts('https://www.gstatic.com/firebasejs/7.16.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.16.0/firebase-messaging.js');
  var firebaseConfig = {
    apiKey: "",
    authDomain: "skymilk-1549269219057.firebaseapp.com",
    databaseURL: "https://skymilk-1549269219057.firebaseio.com",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "1:471847861263:web:f3523813ba068da235b77a",
    measurementId: "G-5WS57EVFYD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const messaging =firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload){
	const title =payload.notification.title;
	const options ={
		body: ,
		icon:'',
		vibrate:,
		data:{
			dateOfArrival: Date.now(),
			primaryKey: 'notif-',
			url: payload.data.url
			}
	};
	
	return self.registration.showNotification(title, options);
});
