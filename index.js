
 /* document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li");

    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        // Remove the 'active' class from all links
        navLinks.forEach((el) => el.classList.remove("active"));
        // Add the 'active' class to the clicked link
        this.classList.add("active");
      });
    });
  });*/

  function fullview(ImgLink){
    document.getElementById("fullImg").src = ImgLink;
    document.getElementById("Imageview").style.display = "block";
  }
  function Closefullview(){
    document.getElementById("Imageview").style.display = "none"
  }

  //moving images left and right
  let Gallery = document.querySelector(".Gallery");
  let isDragStart = false;

const dragstart = () =>{
   isDragStart = true;
}

const dragging = (e) =>{
  if(!isDragStart) return;
  e.preventDefault();
    Gallery.scrollLeft =  e.pageX;
    console.log( e.pageX);
}
const dragstop = () =>{
  isDragStart = false;
}

  Gallery.addEventListener("mousemove", dragging);
  Gallery.addEventListener("mousedown", dragstart);
  Gallery.addEventListener("mouseup", dragstop);
