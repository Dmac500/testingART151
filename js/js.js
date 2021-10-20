console.log("hello")

setTimeout(function() 
{
  window.location.replace("newCheif.html");
},5000)





let link = document.getElementById("link");
let showLink =link.getAttribute("href");

link.setAttribute('href',"newCheif.html");
window.location.replace("newCheif.html");
