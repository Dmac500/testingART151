console.log("hello")

setTimeout(function() 
{
  window.location.replace("index.html");
},6000)





let link = document.getElementById("link");
let showLink =link.getAttribute("href");

link.setAttribute('href',"index.html");
window.location.replace("index.html");
