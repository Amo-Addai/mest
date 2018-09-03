'use strict';

var linkButtons = document.querySelectorAll(".linkButton"),
text = document.querySelectorAll(".header-text h4"),
highlighters = document.querySelectorAll(".highlight");

for(var b of linkButtons){
    b.onmouseover = function(e){
        var obj = e.target;
        if(obj.innerText == "About Me"){
            for(var t of text){
                t.style.color = "Red";
            }
        }
    };
    b.onmouseleave = function(e){
        var obj = e.target;
        for(var t of text){
            t.style.color = "White";
        }
    };
    b.onclick = function(e){
        alert("'" + e.target.innerText + "' Navigation Link clicked :)");
    };
}