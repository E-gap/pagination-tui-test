//------------------------------готово без off------------------------------------

/* import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';
import { render } from '../src/render';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const key = '31147704-3d6790a6d451c63a87a2b7851';

export const refs = {
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
};

refs.form.style.display = 'flex';
refs.form.style.justifyContent = 'center';
refs.form.style.marginBottom = '20px';

const perPage = 4;

const options = {
  totalItems: 0,
  itemsPerPage: perPage,
  visiblePages: 5,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

//let pagination = new Pagination('pagination', options);
//let page = pagination.getCurrentPage();
//pagination.off('afterMove', morePopular);

function loadPopular() {
  fetch(
    `https://pixabay.com/api/?key=${key}&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=1`
  )
    .then(response => response.json())
    .then(({ totalHits, hits }) => {
      if (totalHits) {
        options.totalItems = totalHits;
        const pagination = new Pagination('pagination', options);
        pagination.on('afterMove', morePopular);
      }
      return hits;
    })
    .then(array => render(array));
}

loadPopular();

function morePopular(event) {
  const currentPage = event.page;
  refs.gallery.innerHTML = '';

  fetch(
    `https://pixabay.com/api/?key=${key}&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${currentPage}`
  )
    .then(response => response.json())
    .then(({ hits }) => hits)
    .then(array => render(array));
}

refs.form.addEventListener('submit', searchQuery);

function searchQuery(e) {
  e.preventDefault();
  refs.gallery.innerHTML = '';
  const query = refs.form.elements.searchQuery.value;

  fetch(
    `https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=1`
  )
    .then(response => response.json())
    .then(({ totalHits, hits }) => {
      if (totalHits) {
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
        options.totalItems = totalHits;
        const pagination = new Pagination('pagination', options);
        pagination.on('afterMove', moreQuery);
      }
      return hits;
    })
    .then(array => {
      if (array.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        render(array);
      }
    });
}

function moreQuery(event) {
  const currentPage = event.page;
  refs.gallery.innerHTML = '';
  const query = refs.form.elements.searchQuery.value;
  console.log('запрос');

  fetch(
    `https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${currentPage}`
  )
    .then(response => response.json())
    .then(({ hits }) => hits)
    .then(array => {
      render(array);
    });
} */

//-------------------------пробуем с off-------------------------------------------

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';
import { render } from '../src/render';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const key = '31147704-3d6790a6d451c63a87a2b7851';

export const refs = {
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  pagination: document.querySelector('.tui-pagination'),
};

refs.form.style.display = 'flex';
refs.form.style.justifyContent = 'center';
refs.form.style.marginBottom = '20px';

const perPage = 4;

const options = {
  totalItems: 0,
  itemsPerPage: perPage,
  visiblePages: 5,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(refs.pagination, options);
const page = pagination.getCurrentPage();

function loadPopular() {
  fetch(
    `https://pixabay.com/api/?key=${key}&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`
  )
    .then(response => response.json())
    .then(({ totalHits, hits }) => {
      if (totalHits) {
        pagination.reset(totalHits);
        refs.pagination.classList.remove('pagination-is-hidden');
      }
      return hits;
    })
    .then(array => render(array));
}

loadPopular();

pagination.on('afterMove', loadMorePopular);

function loadMorePopular(event) {
  const currentPage = event.page;
  refs.gallery.innerHTML = '';

  fetch(
    `https://pixabay.com/api/?key=${key}&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${currentPage}`
  )
    .then(response => response.json())
    .then(({ hits }) => hits)
    .then(array => render(array));
}

refs.form.addEventListener('submit', searchQuery);

function searchQuery(e) {
  e.preventDefault();
  refs.gallery.innerHTML = '';
  const query = refs.form.elements.searchQuery.value;

  fetch(
    `https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`
  )
    .then(response => response.json())
    .then(({ totalHits, hits }) => {
      if (totalHits) {
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);

        pagination.off('afterMove', loadMorePopular);
        pagination.off('afterMove', loadMoreQuery);
        pagination.on('afterMove', loadMoreQuery);
        pagination.reset(totalHits);
        refs.pagination.classList.remove('pagination-is-hidden');
      }
      return hits;
    })
    .then(array => {
      if (array.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        refs.pagination.classList.add('pagination-is-hidden');
      } else {
        render(array);
      }
    });
}

function loadMoreQuery(event) {
  const currentPage = event.page;
  refs.gallery.innerHTML = '';
  const query = refs.form.elements.searchQuery.value;

  fetch(
    `https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${currentPage}`
  )
    .then(response => response.json())
    .then(({ hits }) => hits)
    .then(array => {
      render(array);
    });
}
