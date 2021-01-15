function onAddNoteClick() {
var title = document.getElementById("title").value;
var notes = document.getElementById("notes").value;

    var data = JSON.stringify({"title":title,"content":notes});

    var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
            document.getElementById("success").style.visibility="visible"
            setTimeout(function(){ document.getElementById("success").style.visibility="hidden"
            console.log("toast gone")}, 3000);

        }
    });

    xhr.open("POST", "https://dnote.herokuapp.com/api/notes");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin",'*');

    xhr.send(data);
}


