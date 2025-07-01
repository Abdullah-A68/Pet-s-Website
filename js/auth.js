const firebaseConfig = {
  apiKey: "AIzaSyC4UJXlvHhSSSyfsf8G1he339GoGaTenps",
  authDomain: "pet-sscci.firebaseapp.com",
  projectId: "pet-sscci",
  storageBucket: "pet-sscci.firebasestorage.app",
  messagingSenderId: "900791572438",
  appId: "1:900791572438:web:834cdae9e5d1f37d5bf677"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(user => alert("✅ Signed up as " + user.user.email))
    .catch(error => alert("❌ " + error.message));
}


function logIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(user => alert("✅ Logged in as " + user.user.email))
    .catch(error => alert("❌ " + error.message));
}


function logOut() {
  auth.signOut().then(() => alert("👋 Logged out."));
}