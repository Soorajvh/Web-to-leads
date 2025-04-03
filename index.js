let captchacheked = false;

function beforesubmit(event) {
  if (captchacheked) {
    let outputDate = document.querySelector(".outputdate");
    let inputDate = document.querySelector(".inputdate");
    console.log("inputdate.value", inputDate.value); //String -- date(en_IN)

    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
    outputDate.value = formattedDate;
  } else {
    alert("Please check the reCaptch box to SUbmit the Lead");
    event.preventDefault();
  }
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function captchasuccess() {
  captchacheked = true;
}
