if(!localStorage.getItem('user')) {
  window.localStorage.setItem('user','username');
}
if(!localStorage.getItem('pass')) {
  window.localStorage.setItem('pass','password');
}

window.addEventListener('load',function() {
  //Check if user and pass have been set. If not,
  //Bring up 'Sign up' page first.

  if(localStorage.getItem('user') === 'username' && localStorage.getItem('pass') === 'password')
  {
    document.getElementById('signCont').style.display = 'block';
  }
  else {
    document.getElementById('logCont').style.display = 'block';
  }

  //Once signed up, save info in localStorage
  //Then run the 'successful' stuff.

  //When user comes back to site, automatically give them
  //the login stuff because we will detect the user and password
  //info from signing up.

  var user = localStorage.getItem('user');
  var pass = localStorage.getItem('pass');
  if (user === 'username') {
    console.log("Need to set a username");
  }
  else {
    console.log("Found username in storage");
  }

  if(pass === 'password') {
    console.log("Need to set a password");
  } else {
    console.log("Found password in storage");
  }
});

function validate_info() {
  var this_user = localStorage.getItem('user');
  console.log(this_user);
}
var characters = ['!', '@', '#', '$','%','^','&','*','(',')'];
str = "";
var arrLength = characters.length;
function checkForCharacters(word) {
  str = word;
  for(var c = 0; c < arrLength; c++) {
    console.log(characters[c]);
    if(str.includes(characters[c])) {
      console.log("Word: '" + str + "' contains " + "'" + characters[c] + "'");
      break;
    }
    if (arrLength - 1 === c) {
      console.log("Password does not contain a special character");
    }
  }
}

function signup() {
  var new_user;
  var new_pass;
  if(document.getElementById("i-user").value != "") {
    new_user = document.getElementById("i-user").value;
    window.localStorage.setItem('user',new_user);
    console.log(new_user);
  } else {
    console.log("No username recorded");
    alert("No username entered.")
  }
  if(document.getElementById("i-pass").value != "") {
    new_pass = document.getElementById("i-pass").value;
    window.localStorage.setItem('pass',new_pass);
    } else {
      console.log("No password recorded");
      alert("No password entered.")
    }

    if (new_pass.length < 8) {
      alert("Password must be 8 or more characters.");
    } else {
      console.log(new_pass);
    }

  if(document.querySelector('#i-agree').checked) {
    console.log("they agreed, sir.");
  } else {
    alert("Please accept the terms. >:(");
  }
  //Password should be 8+ characters long
  //Check if password contains an uppercase letter and special character ($,!,%)
  //Username can be whatever
}

function clearData() {
  //Clicking 'Clear Data' will clear the localStorage
  //and then reload the page - which will bring you back to the 'Sign Up' page.

  alert("Login data has been cleared - set new username and password.");
  window.localStorage.clear();
  location.reload(false);
}
