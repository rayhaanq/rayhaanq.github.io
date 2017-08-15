

let errorMessage;

const sendForm = () =>{
let form = $("#contactForm");

let nameField = $("#nameField").val().trim();
let emailField = $("#emailField").val().trim();
let messageField = $("#messageField").val().trim();

  if(isValidName() && isValidEmail() && isValidMsg()){
    $.ajax({
        url: 'https://formspree.io//rayhaan.quazi@gmail.com',
        method: 'POST',
        data: form.serialize(),
        dataType: 'json',
        beforeSend: function() {
        },
        success: function(data) {
          $("#alert").html("Your message has been sent.");
          $("#alert").removeClass("alert-danger");
          $("#alert").addClass("alert-success");
          $("#alert").show();

          resetForm();
        },
        error: function(err) {
          $("#alert").html("There was a problem sending your message.");
          $("#alert").removeClass("alert-success");
          $("#alert").addClass("alert-danger");
          $("#alert").show();
        }
      });
  } else {
    $("#alert").html(errorMessage);
          $("#alert").removeClass("alert-success");
          $("#alert").addClass("alert-danger");
          $("#alert").show();
  }
  
  
}

const isValidName = () => {

  let nameField = $("#nameField").val().trim();
  if (nameField.length != 0){
    return true;
  } else{
    errorMessage = "Name field cannot be empty.\n";
    return false;
  }
}

const isValidMsg = () => {
  
let messageField = $("#messageField").val().trim();
  

  if (messageField.length != 0){
    return true;
  } else {
    errorMessage = "Message field cannot be empty.\n";
    return false;
  }
}

const isValidEmail = () => {
let emailField = $("#emailField").val().trim();
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if( re.test(emailField)){
      return true;
    } else {
      errorMessage = "Incorrect email address.\n";
      return false;
    }
}

const resetForm = () => {
  $("#nameField").val("");
  $("#emailField").val("");
  $("#messageField").val("");
}