import {toHex} from "./toHex.js";
const h1 = document.querySelector('h1');
const rgbV = document.querySelectorAll('.rgbV');
const hexV = document.querySelectorAll('.hexV');
for(let i = 0; i < rgbV.length; i++) {
    rgbV[i].addEventListener('focus', () => rgbV[i].value = '');
}
for(let i = 0; i < rgbV.length; i++) {
    rgbV[i].addEventListener('input', () => {
        if(parseInt(rgbV[i].value, 10).toFixed(0) >= 0) {
            if(rgbV[i].value > 255) rgbV[i].value = 255;
            hexV[i].value = rgbV[i].value.toHex();
            if(hexV[i].value === '0undefined' || hexV[i].value === 'NaN') hexV[i].value = '00';
            h1.style = `color: #${hexV[0].value}${hexV[1].value}${hexV[2].value}`;
        }
    });
}