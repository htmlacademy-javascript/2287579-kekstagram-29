import { renderThumbnails } from './thumbnail.js';
import { getPictures } from './data.js';
import './form-upload.js';

const pictures = getPictures();
renderThumbnails(pictures);
