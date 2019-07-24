export default () =>{
   const div = document.createElement('div');
  const tmp1 =`<div class="home"><img class="img" src="../images/logo.PNG" alt="logo">
  <div class="btn">
  <a href="#/waiter"><button>¡Mesero!</button></a>
  <a href="#/chef"><button>¡Cocinero!</button></a></div>
  </div>`; 

  div.innerHTML = tmp1;

  return div //
};