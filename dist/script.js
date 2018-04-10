$('#form').on('submit',function(){
  var inputName = encodeURIComponent($('#input-name').val());
  var baseURL = "https://docs.google.com/forms/d/e/1FAIpQLSeVNDxFd-W3gG1hY5ol16-rQGaLoCkYv0c7H4gCPiW0QHu4oQ/formResponse?entry.903897612=";
  var submitRef = '&submit=-5261942937227159731';
  var submitURL = (baseURL + inputName + submitRef);
  console.log(submitURL);
  $(this)[0].action=submitURL;
  console.log("got here");
});
