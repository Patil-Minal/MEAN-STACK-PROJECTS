

function addBlog(){

    var title = document.getElementById("title").value;
    var article = document.getElementById("article").value;

    if(title.length==0){
        alert("Title is Required")
        return false
    }else if (article.length==0){
        alert("Article is Required")
        return false
    }
    var divtag = document.createElement("div")
    var brtag = document.createElement("br")
    var ptag = document.createElement("p");

    var titletext = document.createTextNode("Title: "+title);
    var ptagcontent2 = document.createTextNode("  Article :"+article);
    divtag.setAttribute("class","card")
    divtag.style.backgroundColor = "dodgerblue";
    divtag.style.color = "white"

    ptag.appendChild(titletext)
    ptag.appendChild(brtag)
    ptag.appendChild(ptagcontent2);
    divtag.appendChild(ptag)



    document.getElementById("main").appendChild(divtag);
    reset()

}

function reset() {
    document.getElementById("title").value="";
    document.getElementById("article").value=""; 
}