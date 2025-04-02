function beforesubmit() {
  let outputDate = document.querySelector(".outputdate");
  let inputDate = document.querySelector(".inputdate");
  console.log("inputdate.value", inputDate.value); //String -- date(en_IN)

  let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
  outputDate.value = formattedDate;
}
