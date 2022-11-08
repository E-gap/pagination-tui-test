const axios = require('axios').default;
import axios from "axios";
import Notiflix from 'notiflix';

const key = "31147704-3d6790a6d451c63a87a2b7851"

const refs = {
    form: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
  buttonMore: document.querySelector('.load-more'),
    
}

refs.form.style.display = "flex";
refs.form.style.justifyContent = "center";
refs.form.style.marginBottom = "20px";

refs.buttonMore.style.display = "block";
refs.buttonMore.style.marginRight = "auto";
refs.buttonMore.style.marginLeft = "auto";
refs.buttonMore.style.marginTop = "20px";



refs.buttonMore.setAttribute("disabled", true);

let page = 0;
const perPage = 4;

refs.form.addEventListener('submit', search);

function search (e) {
  e.preventDefault();
  refs.gallery.innerHTML = ""
    const request = refs.form.elements.searchQuery.value
    page = 1;
    
    
    fetch(`https://pixabay.com/api/?key=${key}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`)
        .then(response => response.json())
      .then(data => {
        if (data.totalHits) {Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)}
        
        return data.hits
      })
        .then(array => {
            if (array.length === 0) {
                Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
            }
            else {
                
                const fotos = array.map(foto => `
        
        <div class="photo-card">
  <img src="${foto.webformatURL}" alt="${foto.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: <span class="block">${foto.likes}</span></b>
    </p>
    <p class="info-item">
      <b>Views: <span class="block">${foto.views}</span></b>
    </p>
    <p class="info-item">
      <b>Comments: <span class="block">${foto.comments}</span></b>
    </p>
    <p class="info-item">
      <b>Downloads: <span class="block">${foto.downloads}</span></b>
    </p>
  </div>
</div>

`).join('')
              
              
              refs.gallery.innerHTML = fotos; 
              const info = document.querySelectorAll('.info');

              for (const inf of info) {

                inf.style.display = "flex";
                inf.style.justifyContent = "space-between";
              }

              const photoCards = document.querySelectorAll('.photo-card');

              for (const photoCard of photoCards) {

                photoCard.style.width = "calc((100% - 20px)/ 4)";
                photoCard.style.border = "solid"
                photoCard.style.borderColor = "green"

              }

              

              refs.gallery.style.display = "flex";
              refs.gallery.style.flexWrap = "wrap"; 
              refs.gallery.style.justifyContent = "space-between"; 
              
              const images = document.querySelectorAll('img');
              
              
for (const image of images) {

  image.style.width = "100%"; 
  image.style.height = "210px"; 
}
              
  const blocks = document.querySelectorAll('.block');

for (const block of blocks) {

  block.style.display = "flex"; 
  block.style.justifyContent = "center"
}
              
            refs.buttonMore.removeAttribute("disabled");
            }
        })    
     
}

refs.buttonMore.addEventListener('click', loadMore);


function loadMore (e) {
    
    const request = refs.form.elements.searchQuery.value
    page += 1;
    
    
  fetch(`https://pixabay.com/api/?key=${key}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`)
    .then(response => response.json())
    .then(data => {
      
      if (page * perPage >= data.totalHits) {
        Notiflix.Notify.warning(`We're sorry, but you've reached the end of search results.`);
        refs.buttonMore.setAttribute("disabled", true);
      }
            
      return data.hits
    })
    .then(array => {
                            
      const fotos = array.map(foto => `
        <div class="photo-card">
  <img src="${foto.webformatURL}" alt="${foto.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: ${foto.likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${foto.views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${foto.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${foto.downloads}</b>
    </p>
  </div>
</div>
`).join('')
      refs.gallery.innerHTML += fotos
      const info = document.querySelector('.info');
      info.style.display = "flex";

    })        
}
 







