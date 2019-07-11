import {readBreak} from '../view-controller/view_controller.js'
import {readData} from '../firestore.js'

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
    <div class = "col-sm-6" id="pedidos">
        <ul id="listPedidos"></ul>
    </div>
   `;

    div.innerHTML = tmp2;
    
    const btnBreakfast = div.querySelector('#breakfast');
    btnBreakfast.addEventListener('click', () => {
        readData('menumañana', (query) => {
            readBreak(query);
        });
    })

    const btnLunch = div.querySelector('#lunch');
    btnLunch.addEventListener('click', () => {
        readData('menutarde', (query) => {
            readBreak(query);
        }); 
    })
    const btnAdditional = div.querySelector('#additional');
    btnAdditional.addEventListener('click', () => {
        readData('extras', (query) => {
            readBreak(query);
        });
    })    
    return div;
};

