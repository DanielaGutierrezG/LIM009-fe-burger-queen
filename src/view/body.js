export default () =>{
    const div = document.createElement('div');
   const tmp1 =`
    <div>
        <button id="breakfast">Desayuno</button>
        <ul>
            <li>Café americano</li>
            <li>Café con leche</li>
            <li>Sandwich de jamón y queso</li>
            <li>Jugo de frutas natural</li>
        </ul>
    </div>
    <div>
        <button id="lunch">Almuerzo y cena</button>
        <ul>
            <li>Café americano</li>
            <li>Café con leche</li>
            <li>Sandwich de jamón y queso</li>
            <li>Jugo de frutas natural</li>
        </ul>
    </div>
   `; 

   div.innerHTML = tmp1;
   console.log(div);
   const btnBreak = div.querySelector('#breakfast');
   btnBreak.addEventListener('click', () => {

   })

   return div
};