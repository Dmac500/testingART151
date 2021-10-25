console.log("hello")

setTimeout(function() 
{
  window.location.replace("https://www.youtube.com/watch?v=PlIzKaGBeHk");
},6000)





let link = document.getElementById("link");
let showLink =link.getAttribute("href");

link.setAttribute('href',"https://www.youtube.com/watch?v=PlIzKaGBeHkindex.html");
window.location.replace("https://www.youtube.com/watch?v=PlIzKaGBeHkindex.html");
