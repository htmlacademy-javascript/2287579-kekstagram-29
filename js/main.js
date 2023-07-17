import { renderThumbnails } from './thumbnail.js';
import { getPictures } from './data.js';
import './form-upload.js';
import './form-validation.js';
import './effect-control';
import './scale-control.js';

const pictures = getPictures();
renderThumbnails(pictures);

