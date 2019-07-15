export default () =>{
   const div = document.createElement('div');
  const tmp1 =`<img src="../images/logo.PNG" alt="logo">
  <a href="#/body"><button>¡Mesero!</button></a>`; 

  div.innerHTML = tmp1;

  return div
};