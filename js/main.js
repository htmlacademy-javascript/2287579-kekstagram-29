import { renderThumbnails } from './thumbnail.js';
import { getPictures } from './data.js';

const pictures = getPictures();
renderThumbnails(pictures);

