 export const movieMatch = (movie) => {
   const movieView=`<div class="sheetContainer"></div>`;
   const moviePage=document.createElement('div');
   moviePage.innerHTML=movieView;

   const claseGlobal = moviePage.querySelector(".sheetContainer");

     const newDivElement = document.createElement("div");
     newDivElement.innerHTML = `
     <p class="sheetName">${movie.name}</p>
     <p class="sheetYear">${movie.year}</p>     
     <img class="sheetImg" src="${movie.imgPortada}">
     <p class="sheetSyn">${movie.synopsis}
     `;
     claseGlobal.appendChild(newDivElement);
     
     return moviePage;
 }



  

   

 





