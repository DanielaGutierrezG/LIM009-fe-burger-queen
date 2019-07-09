import { components } from '../view-controller/index.js'
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
            main.appendChild(components.body());
            console.log('ya debió mostrar boton')
            break;
        }
        default: {
            main.appendChild(components.body())
        }
           
    }
}

/* export const init = () => {
    window.addEventListener('load', changeTmp(window.location.hash))
    if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
} */