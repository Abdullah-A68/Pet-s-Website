// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC4UJXlvHhSSSyfsf8G1he339GoGaTenps",
  authDomain: "pet-sscci.firebaseapp.com",
  projectId: "pet-sscci",
  storageBucket: "pet-sscci.appspot.com",
  messagingSenderId: "900791572438",
  appId: "1:900791572438:web:834cdae9e5d1f37d5bf677"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign Up
function signUp() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("signup-confirm-password").value;

  if (password !== confirmPassword) {
    alert("❌ Passwords do not match");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("✅ Signed up as: " + userCredential.user.email);
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
}

// Log In
function logIn() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("✅ Logged in as: " + userCredential.user.email);
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
}
