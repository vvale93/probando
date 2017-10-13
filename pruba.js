var xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users",
true);
var cadenaInfo = xhr.responseText;
xhr.onload = function (e) {
    var i=0;
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            cadenaInfo=JSON.parse(xhr.responseText);
        } else {
            console.error(xhr.statusText);
        }
        console.log(cadenaInfo);
    for(i=1; i<cadenaInfo.length; i++)
    {
        document.querySelector('#test').innerHTML += "<tr><th scope=\"row\">"+i+"</th><td>"+cadenaInfo[i].name+"</td><td>"+cadenaInfo[i].username+"</td><td>"+cadenaInfo[i].email+"</td></tr>";
    }
    }
};
xhr.onerror = function (e) {
    console.error(xhr.statusText);
};
xhr.send(null);