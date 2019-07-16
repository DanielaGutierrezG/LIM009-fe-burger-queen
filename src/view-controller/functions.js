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
  }))
}  

const printOrder = () => {
  const tbody = document.querySelector('#tableOrder tbody')
  tbody.innerHTML= '';
  for(let i=0; i<arrOrder.length; i++){
    let row = tbody.insertRow(i);
    let productCell = row.insertCell(0);
    let priceCell = row.insertCell(1);
    let removeCell = row.insertCell(2);
    productCell.innerHTML=arrOrder[i].product;
    priceCell.innerHTML=`s/ ${arrOrder[i].price}.00`;
    
    const btnRemove = document.createElement('button');
    btnRemove.setAttribute('data-id', `${i}` )
    btnRemove.className='icon fas fa-trash-alt';
    btnRemove.type='button';
   /*  btnRemove.textContent=`<i class="fas fa-trash-alt"></i>`; */
    removeCell.appendChild(btnRemove);
  }
  removeOrder();
}

export const removeOrder = () => {
  document.querySelectorAll('.icon').forEach(btn => btn.addEventListener('click', (e) => {
    arrOrder.splice(parseInt(e.target.dataset.id), 1); 
    const table = document.querySelector('#tableOrder tbody');
    console.log(table);
    console.log(e.target.dataset.id);
    printOrder();
  }))

}

export const readWaiter = (query) => {
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