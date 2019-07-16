export default () =>{
   const div = document.createElement('div');
  const tmp1 =`<div class="home"><img class="img" src="../images/logo.PNG" alt="logo">
  <a href="#/waiter"><button class="btn">¡Mesero!</button></a></div>`; 

  div.innerHTML = tmp1;

  return div //
};