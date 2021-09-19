const firebaseConfig = {
    apiKey: "AIzaSyAL4NE0DzwPJ2x23ryPjB7yLBZ_BDGKadc",
    authDomain: "kwitter-5ea34.firebaseapp.com",
    databaseURL: "https://kwitter-5ea34-default-rtdb.firebaseio.com",
    projectId: "kwitter-5ea34",
    storageBucket: "kwitter-5ea34.appspot.com",
    messagingSenderId: "997938773821",
    appId: "1:997938773821:web:90d6891227993d3489cf54"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addaddRoom()
  {
    room_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding user"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }