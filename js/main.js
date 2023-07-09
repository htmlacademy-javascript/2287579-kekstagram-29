// import { getPictures } from './data.js';

import { renderThumbnails } from './thumbnail.js';
import { getPictures } from './data.js';
import './gallery.js';

const pictures = getPictures();
renderThumbnails(pictures);


// import { renderThumbnails } from './thumbnail.js';
// import { renderGallery } from './gallery.js';


// renderThumbnails(getPictures());
