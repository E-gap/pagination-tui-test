/* const axios = require('axios').default;
import axios from "axios";
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

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

                photoCard.style.width = "calc((100% - 30px)/ 4)";
                photoCard.style.border = "solid"
                photoCard.style.borderColor = "green"
                photoCard.style.marginBottom = "10px"

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
      refs.gallery.innerHTML += fotos
       const info = document.querySelectorAll('.info');

              for (const inf of info) {

                inf.style.display = "flex";
                inf.style.justifyContent = "space-between";
              }

              const photoCards = document.querySelectorAll('.photo-card');

              for (const photoCard of photoCards) {

                photoCard.style.width = "calc((100% - 30px)/ 4)";
                photoCard.style.border = "solid"
                photoCard.style.borderColor = "green"
                photoCard.style.marginBottom = "10px"

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

    })        
} */



//-------------- 2 стадия-------------------------

/* const axios = require('axios').default;
import axios from "axios";
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import InfiniteScroll from "infinite-scroll";

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
const perPage = 20;

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
        <a href="${foto.largeImageURL}">        
        <div class="photo-card">  
        <img src="${foto.webformatURL}" alt="${foto.tags}" loading="lazy"/>
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
</a>

`).join('')
              
              
              refs.gallery.innerHTML = fotos; 


              const lightbox = new SimpleLightbox('.gallery a');

              

              const info = document.querySelectorAll('.info');

              for (const inf of info) {
                inf.style.textDecoration = "none";
                inf.style.color = "black";
                inf.style.display = "flex";
                inf.style.justifyContent = "space-between";
              }

             const links = document.querySelectorAll('a');

              for (const link of links) {
                link.style.textDecoration = "none";
              }

              const photoCards = document.querySelectorAll('.photo-card');

              for (const photoCard of photoCards) {

                photoCard.style.width = "330px";
                photoCard.style.border = "solid"
                photoCard.style.borderColor = "green"
                photoCard.style.marginBottom = "10px"

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
      <a href="${foto.largeImageURL}">
        
        <div class="photo-card">
        <img src="${foto.webformatURL}" alt="${foto.tags}" loading="lazy"/>
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
</a>
`).join('')
      refs.gallery.innerHTML += fotos;
      const lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh();
       const info = document.querySelectorAll('.info');

              for (const inf of info) {
                inf.style.color = "black";
                inf.style.display = "flex";
                inf.style.justifyContent = "space-between";
              }

      const links = document.querySelectorAll('a');

              for (const link of links) {
                link.style.textDecoration = "none";
              }
      
              const photoCards = document.querySelectorAll('.photo-card');

              for (const photoCard of photoCards) {

                photoCard.style.width = "330px";
                photoCard.style.border = "solid"
                photoCard.style.borderColor = "green"
                photoCard.style.marginBottom = "10px"

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

    })        
}
 */



//--------------------3 стадия без кнопки Load More------------------

/* const axios = require('axios').default;
import axios from "axios";
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const key = "31147704-3d6790a6d451c63a87a2b7851"

const refs = {
    form: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),      
}

refs.form.style.display = "flex";
refs.form.style.justifyContent = "center";
refs.form.style.marginBottom = "20px";

let page = 0;
const perPage = 8;

refs.form.addEventListener('submit', search);

function search (e) {
  e.preventDefault();

  refs.gallery.innerHTML = ""
    const request = refs.form.elements.searchQuery.value
    page = 1;
    
    
    fetch(`https://pixabay.com/api/?key=${key}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`)
        .then(response => response.json())
      .then(({totalHits, hits}) => {
        if (totalHits) {Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`)}
        
        return hits
      })
        .then(array => {
            if (array.length === 0) {
                Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
            }
            else {
                
                const fotos = array.map(({largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => `
        <a href="${largeImageURL}">        
        <div class="photo-card">  
        <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
  <div class="info">
    <p class="info-item">
      <b>Likes: <span class="block">${likes}</span></b>
    </p>
    <p class="info-item">
      <b>Views: <span class="block">${views}</span></b>
    </p>
    <p class="info-item">
      <b>Comments: <span class="block">${comments}</span></b>
    </p>
    <p class="info-item">
      <b>Downloads: <span class="block">${downloads}</span></b>
    </p>
  </div>
</div>
</a>

`).join('')
              
              
              refs.gallery.innerHTML = fotos; 


              const lightbox = new SimpleLightbox('.gallery a');

              const info = document.querySelectorAll('.info');

              for (const inf of info) {
                inf.style.textDecoration = "none";
                inf.style.color = "black";
                inf.style.display = "flex";
                inf.style.justifyContent = "space-between";
              }

             const links = document.querySelectorAll('a');

              for (const link of links) {
                link.style.textDecoration = "none";
              }

              const photoCards = document.querySelectorAll('.photo-card');

              for (const photoCard of photoCards) {

                photoCard.style.width = "330px";
                photoCard.style.border = "solid"
                photoCard.style.borderColor = "green"
                photoCard.style.marginBottom = "10px"

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
              
            }
        })    
     
}

window.addEventListener('scroll', () => { 
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    loadMore()
  }
});

function loadMore (e) {
    
    const request = refs.form.elements.searchQuery.value
    page += 1;
    
    
  fetch(`https://pixabay.com/api/?key=${key}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`)
    .then(response => response.json())
    .then(({totalHits, hits}) => {
      
      if (page * perPage >= totalHits) {
        Notiflix.Notify.warning(`We're sorry, but you've reached the end of search results.`);
        refs.buttonMore.setAttribute("disabled", true);
      }
            
      return hits
    })
    .then(array => {
                            
      const fotos = array.map(({largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => `
      <a href="${largeImageURL}">
        
        <div class="photo-card">
        <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
    <div class="info">
    <p class="info-item">
      <b>Likes: <span class="block">${likes}</span></b>
    </p>
    <p class="info-item">
      <b>Views: <span class="block">${views}</span></b>
    </p>
    <p class="info-item">
      <b>Comments: <span class="block">${comments}</span></b>
    </p>
    <p class="info-item">
      <b>Downloads: <span class="block">${downloads}</span></b>
    </p>
  </div>
</div>
</a>
`).join('')
      refs.gallery.innerHTML += fotos;
      const lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh();
       const info = document.querySelectorAll('.info');

              for (const inf of info) {
                inf.style.color = "black";
                inf.style.display = "flex";
                inf.style.justifyContent = "space-between";
              }

      const links = document.querySelectorAll('a');

              for (const link of links) {
                link.style.textDecoration = "none";
              }
      
              const photoCards = document.querySelectorAll('.photo-card');

              for (const photoCard of photoCards) {

                photoCard.style.width = "330px";
                photoCard.style.border = "solid"
                photoCard.style.borderColor = "green"
                photoCard.style.marginBottom = "10px"

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

    })        
}
 */


//------------modules-function---------------------------

/* const axios = require('axios').default;
import axios from "axios";
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { render } from "../src/render";

const key = "31147704-3d6790a6d451c63a87a2b7851"

export const refs = {
    form: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),      
}

refs.form.style.display = "flex";
refs.form.style.justifyContent = "center";
refs.form.style.marginBottom = "20px";

let page = 0;
const perPage = 8;

refs.form.addEventListener('submit', search);

function search (e) {
  e.preventDefault();

  refs.gallery.innerHTML = ""
    const request = refs.form.elements.searchQuery.value
    page = 1;
    
    fetch(`https://pixabay.com/api/?key=${key}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`)
      .then(response => response.json())   
      .then(({totalHits, hits}) => {
        if (totalHits) {Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`)}
        
        return hits
      })
        .then(array => {
            if (array.length === 0) {
                Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
            }
            else {
              render(array)
            }
        })    
}

window.addEventListener('scroll', () => { 
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    loadMore()
  }
});

function loadMore (e) {
    
    const request = refs.form.elements.searchQuery.value
    page += 1;
    
  fetch(`https://pixabay.com/api/?key=${key}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`)
    .then(response => response.json())
    .then(({totalHits, hits}) => {
      
      if (page * perPage >= totalHits) {
        Notiflix.Notify.warning(`We're sorry, but you've reached the end of search results.`);
        refs.buttonMore.setAttribute("disabled", true);
      }
      return hits
    })
    .then(render)                          
} */

//----------------async-await-------------------------------------------------

/* const axios = require('axios').default;
import axios from "axios";
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { render } from "../src/render";

const key = "31147704-3d6790a6d451c63a87a2b7851"

export const refs = {
    form: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),      
}

refs.form.style.display = "flex";
refs.form.style.justifyContent = "center";
refs.form.style.marginBottom = "20px";

let page = 0;
const perPage = 8;

refs.form.addEventListener('submit', search);

async function search (e) {
  e.preventDefault();

  refs.gallery.innerHTML = ""
    const request = refs.form.elements.searchQuery.value
    page = 1;
  try {
    const response = await fetch(`https://pixabay.com/api/?key=${key}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`)
    const resJson = await response.json()
    const hits = await getHits(resJson)
    const fotos = await getFotos(hits)
  } catch (error) {
    console.log(error);
  }
}

async function getHits(data) {
  const { totalHits, hits } = data;
  if (totalHits && page===1) {
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`)
  }
  if (page * perPage >= totalHits) {
        Notiflix.Notify.warning(`We're sorry, but you've reached the end of search results.`);
        
      }
  return hits
}

async function getFotos(data) {
  if (data.length === 0) {
    Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
  }
  else {
    render(data)
  }
}

window.addEventListener('scroll', () => { 
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    loadMore()
  }
});

async function loadMore (e) {
    
    const request = refs.form.elements.searchQuery.value
    page += 1;
  try {
    const response = await fetch(`https://pixabay.com/api/?key=${key}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`)
    const resJson = await response.json()
    const hits = await getHits(resJson)
    const fotos = await getFotos(hits)
  } catch (error) {
    console.log(error);
  }    
} */

//--------------------axios------------------------------


import axios from "axios";
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { render } from "../src/render";

const key = "31147704-3d6790a6d451c63a87a2b7851"

export const refs = {
    form: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),      
}

refs.form.style.display = "flex";
refs.form.style.justifyContent = "center";
refs.form.style.marginBottom = "20px";

let page = 0;
const perPage = 40;

refs.form.addEventListener('submit', search);

async function search (e) {
  e.preventDefault();

  refs.gallery.innerHTML = ""
    const request = refs.form.elements.searchQuery.value
    page = 1;
  try {
    const response = await axios.get(`https://pixabay.com/api/?key=${key}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`)
    const hits = await getHits(response.data);
    const fotos = await getFotos(hits);
  } catch (error) {
    console.log(error);
  }
}

async function getHits(data) {
  const { totalHits, hits } = data;
  if (totalHits && page===1) {
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`)
  }
  if ((page>1 && page * perPage >= totalHits) || (totalHits && totalHits<=perPage)) {
        Notiflix.Notify.warning(`We're sorry, but you've reached the end of search results.`);
        
      }
  return hits
}

async function getFotos(data) {
  if (data.length === 0) {
    Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
  }
  else {
    render(data)
  }
}

window.addEventListener('scroll', () => { 
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    loadMore()
  }
});

async function loadMore (e) {
    
    const request = refs.form.elements.searchQuery.value
    page += 1;
  try {
    const response = await axios.get(`https://pixabay.com/api/?key=${key}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`)
    const hits = await getHits(response.data);
    const fotos = await getFotos(hits)
  } catch (error) {
    console.log(error);
  }    
}


 



 








