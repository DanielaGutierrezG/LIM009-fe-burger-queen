export default () =>{
    const div = document.createElement('div');
   const tmp1 =`<img src="../images/logo.PNG" alt="logo">
   <p>Daniela</p>`; 

   div.innerHTML = tmp1;
   
   return div
};