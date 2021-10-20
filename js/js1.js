console.log("hello")

setTimeout(function() 
{
  window.location.replace("30years.html");
},5000)





let link = document.getElementById("link");
let showLink =link.getAttribute("href");

link.setAttribute('href',"30years.html");
window.location.replace("30years.html");
