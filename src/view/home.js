export default () =>{
   const div = document.createElement('div');
  const tmp1 =`<div class="home">
  <img class="img" src="../images/logo.PNG" alt="logo">
  <div class="principal">
  <a class="btnsHome" href="#/waiter"><img class="mainImage" src="https://image.flaticon.com/icons/svg/1919/1919720.svg">
  <button class="btn">¡Mesero!</button></a>
  <a class="btnsHome" href="#/chef"><img class="mainImage" src="https://image.flaticon.com/icons/svg/1912/1912332.svg">
  <button class="btn">¡Cocinero!</button></a>
  </div>
  </div>`; 

  div.innerHTML = tmp1;

  return div //
};