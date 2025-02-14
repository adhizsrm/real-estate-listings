import { placeholderPropertyObj } from './properties/placeholderPropertyObj.js';
import { propertyForSaleArr } from './properties/propertyForSaleArr.js';
function getPropertyHtml(propertyForSaleArr=[placeholderPropertyObj]) {
}

document.getElementById('container').innerHTML = getPropertyHtml();