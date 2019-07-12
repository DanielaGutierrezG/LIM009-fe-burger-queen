import { readBody } from '../view-controller/view_controller.js'
import { readData } from '../firestore.js'

export default (name) => {
    const div = document.createElement('div');
    const tmp2 = `
    <header class = "col-sm-12">
        CLIENTE : ${name}
    </header>
    
    <div class = "col-sm-6" id='btns'>
        <button id= 'breakfast'>Desayuno</button>
        <button id= 'lunch'>Almuerzo y cena</button>
        <button id= 'additional'>Extras</button>
    </div>

    <div id="containerBody" class=''></div>
    <form class = "col-sm-6" id="pedidos">
        <ul id="productsList"></ul>
        <div id='priceList'></div>
    </form>
   `;

    div.innerHTML = tmp2;
    
    const btnBreakfast = div.querySelector('#breakfast');
    btnBreakfast.addEventListener('click', () => {
        readData('menumañana', (query) => {
            readBody(query);
        });
    })

    const btnLunch = div.querySelector('#lunch');
    btnLunch.addEventListener('click', () => {
        readData('menutarde', (query) => {
            readBody(query);
        }); 
    })
    const btnAdditional = div.querySelector('#additional');
    btnAdditional.addEventListener('click', () => {
        readData('extras', (query) => {
            readBody(query);
        });
    })    
    return div;
};

