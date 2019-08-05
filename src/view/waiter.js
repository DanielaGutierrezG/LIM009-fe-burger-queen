import { readWaiter, saveOrderList } from '../view-controller/functions.js'
import { readData } from '../firestore.js'

export default () => {
    const div = document.createElement('div');
    const tmp2 = `
    <header class="header">
        <img class="img2" src="../images/logo2.png" alt="logo">
        <a href='#/chef'>Ver pedidos</a>
    </header>
    <div class="waiter">
        <div class="general">
            <div class="containerbuttons">
                <div class="contName"> 
                    <input id="name" type="text" class="input" placeholder="Nombre Cliente"/>
                    <button id="addClient" class="input">OK</button>
                </div>
                <div id='btns'>
                    <button class="btns" id='breakfast'>Desayuno</button>
                    <button class="btns" id='lunch'>Almuerzo y cena</button>
                </div>
                <div class="contw" id="containerWaiter"></div>
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
                                <th></th>
                            </tr>
                        </thead>
                        <tboby>
                            <tr></tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>TOTAL: </td>
                                <td id="total">s/ 0.00</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div id="blockSubmit"></div>
            </div>
            <div>
                <button id='btnResetWaiter' type='button'>Limpiar</button>
            </div>
        </div>
    </div>
   `;

    div.innerHTML = tmp2;

    div.querySelector('#addClient').addEventListener('click', () => {
        let name = document.getElementById('name').value;
        sessionStorage.setItem("Nombre", name);
        const nameClient = document.getElementById('nameClient');
        nameClient.innerHTML = `Cliente : ${name}`;
        document.getElementById("name").value = "";
    })

    const btnBreakfast = div.querySelector('#breakfast');
    btnBreakfast.addEventListener('click', () => {
        readData('menumañana', 'Producto', (query) => {
            readWaiter(query);
            saveOrderList();
        });
    })

    const btnLunch = div.querySelector('#lunch');
    btnLunch.addEventListener('click', () => {
        readData('menutarde', 'Producto', (query) => {
            readWaiter(query);
            saveOrderList();
        });
    })
    return div;
};