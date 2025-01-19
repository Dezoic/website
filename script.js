let mybutton = document.getElementById("myBtn");
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }

// for(i=1; i<=5; i++){
//     var img = document.createElement("img");
//     img.style.width='20rem';
//     img.style.backgroundSize='contain';
//     img.src = 'gallery/'+i+'.jpg';
//     var galleryContainer = document.getElementById("galleryContainer");
//     galleryContainer.appendChild(img);
// }
