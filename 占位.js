 function showpic(whis)
{
   var source=whis.getAttribute("href")
   var a=document.getElementById("placeholder");
   a.setAttribute("src",source);
   var text=whis.firstChild.nodeValue;
   var c=document.getElementById("description");
   c.firstChild.nodeValue=text;
}