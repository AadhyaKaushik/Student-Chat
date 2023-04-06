var firebaseConfig = {
      apiKey: "AIzaSyDXMO9gvfzjSiP77qpbjf7QVFtoL59N0b0",
      authDomain: "kwitter-c9925.firebaseapp.com",
      databaseURL: "https://kwitter-c9925-default-rtdb.firebaseio.com",
      projectId: "kwitter-c9925",
      storageBucket: "kwitter-c9925.appspot.com",
      messagingSenderId: "765065707574",
      appId: "1:765065707574:web:62437769968d7ddc9d5897"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       class_names = childKey;
      //Start code
      row = "<div class='class_name' id="+class_names+" onclick='redirectToRoomName(this.id)' >#"+ class_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}

     
      getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME" + user_name + "!";

function add_class(){

      class_name = document.getElementById("class_name").value;
      firebase.database().ref("/").child(class_name).update({
            purpose : "adding class name"
      });
      localStorage.setItem("class_name", class_name);
      window.location = "chat_page.html" ;
}

function redirectToClassName(name){

      localStorage.setItem("class_name", name);
      window.location = "chat_page.html";

}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}