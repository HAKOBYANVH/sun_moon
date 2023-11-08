let moon = document.getElementById("moonDiv");
let sun = document.getElementById("sunDiv");

let arevacag= function(){
    sun.style.transition ="10s";
    sun.style.marginTop ="-60px";
    sun.style.backgroundColor = "rgb(236,220,76)";
    moon.style.transition ="13s";
    moon.style.marginLeft ="-60px";
    document.body.style.transition = "15s";
    document.body.style.backgroundColor = "#4cd7ec";
}

setTimeout(()=>{
    arevacag()
},1000
)