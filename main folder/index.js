let container = document.getElementById("wew");
let buy = document.getElementsByClassName("sections");
var hello = document.getElementById("pogi");

function navigateAndScroll(pageUrl, sectionId) {
    // Combine the target section ID with the page URL
    var url = pageUrl + '#' + sectionId;
    
    // Navigate to the other HTML page with the target section ID
    window.location.href = url;
  }
