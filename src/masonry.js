import Masonry from 'masonry-layout'

let grid;
let msnry;

  let initMasonry = function(){
    window.onload = function() {

    grid = document.querySelector('.grid')
    msnry = new Masonry(grid, {
      itemSelector: '.grid-item',
      gutter: 20,
      transitionDuration: 300,
      initLayout: false
    })

   msnry.once('layoutComplete', () => {
     grid.classList.add('load')
   })

   msnry.layout()
  };
 }



 let addElement = function(el){

   msnry.prepended( el )

}

export default {addElement: addElement, initMasonry:initMasonry};
