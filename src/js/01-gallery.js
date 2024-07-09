'use strict';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { images } from './images.js';

const gallery = document.querySelector('ul.gallery');

const markup = images
  .map(
    image =>
      `<li class="gallery-item">
			<a class="gallery-link" href="${image.original}">
				<img
					class="gallery-image"
					src="${image.preview}"
					data-source="${image.original}"
					alt="${image.description}"
          title="${image.description}"
				/>
			</a>
		</li>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', markup);

const lightbox = new SimpleLightbox('ul.gallery li a', {
  captionType: 'alt',
  overlay: 'true',
  overlayOpacity: 0.9,

  captionDelay: 250,
  heightRatio: 0.9,
});
lightbox.on('show.simplelightbox', function () {});
