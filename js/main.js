import { renderThumbnails } from './thumbnail.js';
import { getPictures } from './data.js';
import './form-upload.js';
import './form-validation.js';

const pictures = getPictures();
renderThumbnails(pictures);

