import { components } from '../view-controller/index.js'
import {readBreak, totalList} from '../view-controller/view_controller.js'
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
        return changeView('#/body')
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
        case '#/body': {
            var nombre = sessionStorage.getItem("Nombre"); 
            main.appendChild(components.body(nombre));
            readData('menumañana', (query) => {
               readBreak(query);
               totalList();
            });
            
            break;
        }
        default: {
            main.appendChild(components.body())
        }
           
    }
}

 export const init = () => {
    window.addEventListener('load', changeTmp(window.location.hash));
    event.currentTarget.addEventListener('hashchange', () => {
      changeTmp(window.location.hash);
    })
}