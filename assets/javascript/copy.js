function copyLink(){
  var copyLinkDiv = document.getElementById("copyLinkDiv");
  var copyLinkText = document.getElementById("copyLinkText");
  var link = copyLinkText.textContent;
  navigator.clipboard.writeText(link);
  copyLinkText.textContent = "COPIED!";
}
