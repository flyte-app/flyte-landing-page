import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCmdpvfSYuLnvYf0--7SyI0FBWp0WZzzWg",
    authDomain: "flyte1.firebaseapp.com",
    databaseURL: "https://flyte1.firebaseio.com",
    projectId: "flyte1",
    storageBucket: "flyte1.appspot.com",
    messagingSenderId: "1061461763352",
    appId: "1:1061461763352:web:a37d8b059168c974d8ea6d",
    measurementId: "G-F5DZYXMXBF"
};
firebase.initializeApp(config);
firebase.analytics();

export default firebase;