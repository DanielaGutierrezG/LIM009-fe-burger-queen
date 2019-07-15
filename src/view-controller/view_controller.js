let arrOrder=[];
const addOrderArr = (producValue, priceValue) => {
  
  const obj = {
    product : producValue,
    price : priceValue,
    get producprecio() {
      return this.product + `<br>s/ ${this.price}.00`;
    }
  }
  arrOrder.push(obj);
 
  return arrOrder;
}

export const saveOrderList = () => {
  document.querySelectorAll(".btnProduct").forEach(btn => btn.addEventListener('click', (e) => {
    const product = e.target.textContent.substring(0, e.target.textContent.lastIndexOf ('s'));
    const price = e.target.dataset.price;
    addOrderArr(product, price);
    printOrder();
    /* sessionStorage.setItem("Producto", product);
    sessionStorage.setItem("Precio", price); */
  }))
}  

const printOrder = () => {
  const tbody = document.querySelector('#tableOrder tbody')
  console.log(tbody);
  tbody.innerHTML= '';
  for(let i=0; i<arrOrder.length; i++){
    let row = tbody.insertRow(i) || 'o';
    row.id=`id-${i}`;
    console.log(row);
    let productCell = row.insertCell(0);
    let priceCell = row.insertCell(1);
    let removeCell = row.insertCell(2);
    productCell.innerHTML=arrOrder[i].product;
    priceCell.innerHTML=`s/ ${arrOrder[i].price}.00`;
    
    const btnRemove = document.createElement('button');
    btnRemove.id=`btn-${i}`;
    console.log(btnRemove);
    btnRemove.className='icon fas fa-trash-alt';
    btnRemove.type='button';
   /*  btnRemove.textContent=`<i class="fas fa-trash-alt"></i>`; */
    removeCell.appendChild(btnRemove);
    
  }
  removeOrder();
  
}
const removeOrder = () => {
  
  document.querySelectorAll('.icon').forEach(btn => btn.addEventListener('click', (e) => {
    
   
    /* const table = document.querySelector('#tableOrder tbody').row[].; */
    console.log(table);
   
    console.log(arrOrder);
    const textTd=arrOrder.find( element => element.product === table ); 
    console.log(arrOrder.indexOf(textTd));

    
    
    

   /*  console.log(table);
    table.remove();
    console.log(arrOrder);
    console.log(e.target.id) */
    /* table.deleteRow(parseInt(e.target.id)); */
    
    
   /*  const cowsRow = tbody.rows.length
    Console.log(cowsRow); */
  }))

}

export const readBody = (query) => {
  const container = document.getElementById('containerBody');
  container.innerHTML = "";
  query.forEach((doc) => {
    const obj = {
      product : doc.data().Producto,
      price : doc.data().Precio,
      get producprecio() {
        return this.product + `<br>s/ ${this.price}.00`;
      } 
    }
    container.innerHTML += `<button class='btnProduct' data-price=${obj.price}>${obj.producprecio}</button>`
    
  }) 
}