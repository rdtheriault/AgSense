////Configure var url or grab it from another location/input
var url = website.com/something.json

////Change https or http
getName = "https%3A//"+url;
//getName = "https%3A//"+url;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function()  {
  if (this.readyState == 4 && this.status == 200) {
    extObj =  JSON.parse(this.responseText);
    ////put your json processing code here or call a function
    document.getElementById("named").innerHTML = extObj.name;
  }
};
xmlhttp.open("GET", "proxy.php?url="+getName, true);
xmlhttp.send();
