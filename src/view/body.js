import { readBody } from '../view-controller/view_controller.js'
import { readData } from '../firestore.js'

export default (name) => {
    const div = document.createElement('div');
    const tmp2 = `
    <header class = "col-sm-12"> 
  <input id="name" type="text" placeholder="Nombre Cliente"/>
  <button id="addClient">¡Entrar!</button>
    </header>
    
    <div class = "" id='btns'>
        <button id= 'breakfast'>Desayuno</button>
        <button id= 'lunch'>Almuerzo y cena</button>
        <button id= 'additional'>Extras</button>
    </div>

    <div id="containerBody" class=''></div>
    <div id='containerTable'>
        <h2 id ="nameClient"></h2>
        <table id="tableOrder">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th></th>
                </tr>
            </thead>
            <tboby>
                <tr>
                </tr>
            </tbody>
            <tfoot>
            <tr>
              <td>TOTAL</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
    </div>
   `;

    div.innerHTML = tmp2;

    div.querySelector('#addClient')
     .addEventListener('click', () => {
         let name = document.getElementById('name').value;
         let nameClient = document.getElementById('nameClient');
         nameClient.innerHTML = `Cliente : ${name}`
    
     })
    
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

