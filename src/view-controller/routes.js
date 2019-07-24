import { components } from './index.js'

import {readWaiter, saveOrderList, printOrder} from './functions.js'
import { readData } from '../firestore.js';
export const changehash = (hash) => {
    window.location.hash = hash;
}

export const changeTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
        return changeView('#/home');

    }  else if ( hash === '#/waiter' ){
        return changeView('#/waiter');
    }   
    else {
        return changeView('#/chef')
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
            main.appendChild(components.waiter());
            readData('menumañana', (query) => {
                console.log(query);
               readWaiter(query);
               printOrder();
               saveOrderList();
               
            });
            
            break;
        }
        case '#/chef': { 
            main.appendChild(components.chef());
            break;
        }
        default: {
            main.appendChild(components.home())
        }
    }
}

 export const init = () => {
    window.addEventListener('load', changeTmp(window.location.hash));
    event.currentTarget.addEventListener('hashchange', () => {
      changeTmp(window.location.hash);
    })
}