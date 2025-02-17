import { placeholderPropertyObj } from './properties/placeholderPropertyObj.js';
import { propertyForSaleArr } from './properties/propertyForSaleArr.js';
function getPropertyHtml(propertyForSaleArr=[placeholderPropertyObj]) {
    let propertyCardsHtml = propertyForSaleArr.map(function(el){
        return (
        `
            <section class="card">
                <img src="/images/${el.image}">
                <div class="card-right">
                    <h2>${el.propertyLocation}</h2>
                    <h3>£${el.priceGBP}</h3>
                    <p>${el.comment}</p>
                <h3>${el.roomsM2.reduce((total,currentValue) => {return total + currentValue})} m&sup2;</h3>
                </div>
            </section>
        `)
    }).join('');
    return propertyCardsHtml;
}

document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr);