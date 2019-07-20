import { components } from './index.js'

import {readWaiter, saveOrderList} from './functions.js'
import { readData } from '../firestore.js';
export const changehash = (hash) => {
    window.location.hash = hash;
}

export const changeTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
        return changeView('#/home');
    } /* else if ( hash === '#/body' ){
        return changeView('#/body');
    }   */
    else {
        return changeView('#/waiter')
    }
} 

export const changeView = (route) => {
    const main = document.getElementById("main");
    main.innerHTML = '';
    switch (route) {
        case '#/home': { 
            main.appendChild(components.home());
            break;
        }
        case '#/waiter': {
            /* var nombre = sessionStorage.getItem("Nombre");  */
            main.appendChild(components.waiter());
            readData('menumañana', (query) => {
               readWaiter(query);
               saveOrderList();
            });
            
            break;
        }
        default: {
            main.appendChild(components.waiter())
        }
    }
}

 export const init = () => {
    window.addEventListener('load', changeTmp(window.location.hash));
    event.currentTarget.addEventListener('hashchange', () => {
      changeTmp(window.location.hash);
    })
}