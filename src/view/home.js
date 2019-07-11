export default () =>{
    const div = document.createElement('div');
   const tmp1 =`<div class="home"><img src="../images/logo.PNG" alt="logo">
   <input id="name" type="text" placeholder="Nombre Cliente"/>
   <a href="#/body"><button class="btn-floating btn-large waves-effect waves-light orange" id="addClient">Entra</button></a></div>`; 

   div.innerHTML = tmp1;

   div.querySelector('#addClient')
      .addEventListener('click', () => {
        /* listAlmu */
          let name = document.getElementById('name').value;
          sessionStorage.setItem("Nombre", name);
          document.getElementById('name').value = "";
      })
   return div
};
