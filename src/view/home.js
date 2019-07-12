export default () =>{
   const div = document.createElement('div');
  const tmp1 =`<img src="../images/logo.PNG" alt="logo">
  <input id="name" type="text" placeholder="Nombre Cliente"/>
  <a href="#/body"><button id="addClient">¡Entrar!</button></a>`; 

  div.innerHTML = tmp1;

  div.querySelector('#addClient')
     .addEventListener('click', () => {
         let name = document.getElementById('name').value;
         sessionStorage.setItem("Nombre", name);
         document.getElementById('name').value = "";
     })
  return div
};