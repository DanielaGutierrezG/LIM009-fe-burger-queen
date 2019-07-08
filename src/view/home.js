export default () =>{
    const div = document.createElement('div');
   const tmp1 =`<img src="../images/logo.PNG" alt="logo">
   <input class ="input" id="name" type="text" placeholder="Nombre Cliente"/>
   <a href="#/body"><button id="AddClient">¡Entrar!</button></a>`; 

   div.innerHTML = tmp1;
   
   return div
};