var form = document.getElementById("form");
function check() {
  document.getElementById("conditions").style.display = "block";
  var input = document.getElementById("password").value;
  input = input.trim();
  document.getElementById("password").value = input;
  document.getElementById("count").innerText = "Length: " + input.length;
  if (input.length >= 5) {
    document.getElementById("check0").style.color = "green";
  } else {
    document.getElementById("check0").style.color = "red";
  }
  if (input.length <= 10) {
    document.getElementById("check1").style.color = "green";
  } else {
    document.getElementById("check1").style.color = "red";
  }
  if (input.match(/[0-9]/i)) {
    document.getElementById("check2").style.color = "green";
  } else {
    document.getElementById("check2").style.color = "red";
  }
  if (input.match(/[^A-Za-z0-9-'']/i)) {
    document.getElementById("check3").style.color = "green";
  } else {
    document.getElementById("check3").style.color = "red";
  }
  if (input.match(" ")) {
    document.getElementById("check4").style.color = "red";
  } else {
    document.getElementById("check4").style.color = "green";
  }
}
function release() {
  document.getElementById("conditions").style.display = "none";
}
function checkPassword() {
  var confirmPass = document.getElementById("confirmPass");
  confirmPass.style.display = "block";
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password != confirmPassword) {
    document.getElementById("validity").innerText = "Password didn't match!!";
    document.getElementById("validity").style.color = "red";
    return false;
  } else {
    document.getElementById("validity").innerText = "Password matched!!";
    document.getElementById("validity").style.color = "green";
    return false;
  }
}
