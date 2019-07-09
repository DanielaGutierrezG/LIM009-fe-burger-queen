import { changehash } from '../view-controller/routes.js';
export default () =>{
    const div = document.createElement('div');
   const tmp1 =`<img src="../images/logo.PNG" alt="logo">
   <input class ="input" id="name" type="text" placeholder="Nombre Cliente"/>
   <button id="enter">Ingresar</button>`; 

   div.innerHTML = tmp1;
   const button = div.querySelector('#enter');
  button.addEventListener('click', () => {
    changehash('#/body')
    console.log('ya tiene su hash')
   });
   
   return div;
};