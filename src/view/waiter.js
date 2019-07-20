import { readWaiter,saveOrderList } from '../view-controller/functions.js'
import { readData } from '../firestore.js'

export default () => {
    const div = document.createElement('div');
    const tmp2 = `
    <div class="waiter">
    <div class="containerbuttons">
    <header> 
  <input id="name" type="text" class="input" placeholder="Nombre Cliente"/>
  <button id="addClient" class="btn">OK</button>
    </header>
    
    <div class = "" id='btns'>
        <button id= 'breakfast'>Desayuno</button>
        <button id= 'lunch'>Almuerzo y cena</button>
        <button id= 'additional'>Extras</button>
    </div>
    <div id="containerWaiter"></div>
    </div>

    <div class="containerOrders">
        <div id='containerTable'>
            <h3 class ="name" id ="nameClient"></h3>
        <table id="tableOrder" class="table">
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
              <td>TOTAL: </td>
              <td id="total">s/ 0.00</td>
            </tr>
          </tfoot>
        </table>
        <div id="blockSubmit" class=''></div>
    </div>
    </div>
   `;

    div.innerHTML = tmp2;

    div.querySelector('#addClient')
     .addEventListener('click', () => {
         let name = document.getElementById('name').value;
         sessionStorage.setItem("Nombre", name);
         document.getElementById("name").value = "";
         let nameClient = document.getElementById('nameClient');
         let printName = sessionStorage.getItem("Nombre")
         nameClient.innerHTML = `Cliente : ${printName}`
    
     })
    
    const btnBreakfast = div.querySelector('#breakfast');
    btnBreakfast.addEventListener('click', () => {
        readData('menumañana', (query) => {
            readWaiter(query);
            saveOrderList();
        });
    })

    const btnLunch = div.querySelector('#lunch');
    btnLunch.addEventListener('click', () => {
        readData('menutarde', (query) => {
            readWaiter(query);
            saveOrderList();
        }); 
    })
    const btnAdditional = div.querySelector('#additional');
    btnAdditional.addEventListener('click', () => {
        readData('extras', (query) => {
            readWaiter(query);
            saveOrderList();
        });
    })    
    return div;
};