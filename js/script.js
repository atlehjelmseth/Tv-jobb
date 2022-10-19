var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var section=document.getElementById("section");
var el=document.documentElement;


btn1.addEventListener("click",()=>{
  section.style.display = "none";
  if (el.requestFullscreen) {
    el.requestFullscreen()
  }
})

btn2.addEventListener("click",()=>{
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  })

  