var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
function loaded(){
    w = "not filled";
    r = "not filled"
    console.log(w);
    console.log(r);
    document.getElementById("room").style.display = "none";
}

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
} 

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}


// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyDEJ9bOg8OZRrhwE-rJBRJI7HKOk1X1qc0",
authDomain: "login-b48ce.firebaseapp.com",
databaseURL: "https://login-b48ce-default-rtdb.firebaseio.com",
projectId: "login-b48ce",
storageBucket: "login-b48ce.appspot.com",
messagingSenderId: "320480901146",
appId: "1:320480901146:web:51114467c9d5d6e962f9a3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Set Upped Firebase above
var welcome = document.getElementById("hero");
function registeruser(){
    if(!document.getElementById("user_name_register").value){
        r = "notfilled"; 
     }else{
         if(!document.getElementById("user_email_register").value){
             r = "notfilled";
         }else{
             if(!document.getElementById("user_password_register").value){
                 r = "notfilled";
             }else{
                 r = "filled"
             }
         }
     }
//checking if input value is null
if(r = "filled"){
usernameregister = document.getElementById("user_name_register").value;
userpasswordregister = document.getElementById("user_password_register").value;
useremailregister = document.getElementById("user_email_register").value;
firebase.auth().createUserWithEmailAndPassword(useremailregister, userpasswordregister)
.catch((error) => {
document.getElementById("error").innerHTML = error.message;
window.alert("Oops An Error Occured Please Try Again");
});
charAt1= usernameregister.charAt(1);
l = Math.floor(userpasswordregister.length/2);
charAt2 = userpasswordregister.charAt(l);
c = Math.floor(userpasswordregister.length/4);
charAt3 = userpasswordregister.charAt(c);
d = Math.floor(userpasswordregister.length/6);
charAt4 = userpasswordregister.charAt(d);
e = Math.floor(userpasswordregister.length/8);
charAt5 = userpasswordregister.charAt(e);
remove_1 = userpasswordregister.replace(charAt1, "*");
remove_2 = remove_1.replace(charAt2, "*");
remove_3 = remove_2.replace(charAt3, "*");
remove_4 = remove_3.replace(charAt4, "*");
remove_5 = remove_4.replace(charAt2, "*");
remove_6 = remove_5.replace(charAt5, "*");
userpasswordregister = remove_6;
//sending data to firebase
firebase.database().ref("/").child(userpasswordregister).update({
userName : usernameregister,
userPassword : userpasswordregister,
userEmail : useremailregister
});
window.alert("Registered Successfully");
}else{
    window.alert('Please fill required fields');
}
}

function loginuser(){
        if(!document.getElementById("user_email_login").value){
            w = "notfilled";
            console.log(w);
        }else{
            if(!document.getElementById("user_password_login").value){
                w = "notfilled";
                console.log(w);
            }else{
                w = "filled"
                console.log(w);
            }
        }
if(w = "filled"){
    userpasswordlogin = document.getElementById("user_password_login").value;
    useremaillogin = document.getElementById("user_email_login").value;
    
    firebase.auth().signInWithEmailAndPassword(useremaillogin, userpasswordlogin)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message;
        window.alert("Oops An Error Occured, Make sure password or email is correct");
        window.location = "index.html";
        });
    charAt1= userpasswordlogin.charAt(1);
    i = Math.floor(userpasswordlogin.length/2);
    charAt2 = userpasswordlogin.charAt(i);
    o = Math.floor(userpasswordlogin.length/4);
    charAt3 = userpasswordlogin.charAt(o);
    p = Math.floor(userpasswordlogin.length/6);
    charAt4 = userpasswordlogin.charAt(p);
    j = Math.floor(userpasswordlogin.length/8);
    charAt5 = userpasswordlogin.charAt(j);
    remove_1 = userpasswordlogin.replace(charAt1, "*");
    remove_2 = remove_1.replace(charAt2, "*");
    remove_3 = remove_2.replace(charAt3, "*");
    remove_4 = remove_3.replace(charAt4, "*");
    remove_5 = remove_4.replace(charAt2, "*");
    remove_6 = remove_5.replace(charAt5, "*");
    userpasswordlogin = remove_6;
    console.log(userpasswordlogin);
    u = "users/" + userpasswordlogin;
    firebase.database().ref().child(userpasswordlogin).once("value" , function (snapshot) {        
        var name = snapshot.child("userName").val();
          document.getElementById("page").style.display = "none";
          document.body.style.backgroundImage = "url('84561.jpg')";
          document.getElementById("room").style.display = "inline";
          document.getElementById("welcomeuser").innerHTML = "Welcome - " + name+" to KouvenKoro";
          localStorage.setItem("user_name_kk", name);                
          window.alert("Success you are logged in. Please make sure you use it for a good purpose not for bad use. Tip : Dont close this tab you will get logged out! Enjoy!");
  });
}else{
    window.alert("please fill required fields")
}
}
function forgotPassword(){
window.location = "forgotpassword.html";
}

function logout(){
            
    document.getElementById("room").style.display = "none";
    document.getElementById("room").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) , url('3434647.jpg')";
    document.getElementById("user_name_register").value = "";
    document.getElementById("user_password_register").value = "";
    document.getElementById("user_email_register").value = "";
    document.getElementById("user_email_login").value = "";
    document.getElementById("user_password_login").value = "";
    document.getElementById("page").style.display = "inline";
}

function addRoom(){
    room_name_kk = document.getElementById("room_name_kk").value;
      firebase.database().ref("/roomskk").child(room_name_kk).update({
            purpose : "Room Added!"
      });
      localStorage.setItem("room_name_kk", room_name_kk);
      window.location = "kk_page.html";
}

function getData() {firebase.database().ref("/roomskk").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names_kk = childKey;
//Start code    
console.log("Room - " + Room_names_kk);
row = "<div class='room_name' id="+Room_names_kk+" onclick='redirectToRoomName(this.id)' >#"+ Room_names_kk +"</div><hr style='color: white; background-color: white;'>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name_kk", name);
    window.location = "kk_page.html";
}