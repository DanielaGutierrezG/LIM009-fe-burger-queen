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
  const tbody = document.querySelector('#tableOrder tbody');
  const tfoot = document.querySelector("#total");
  const blockSumit = document.querySelector("#blockSumit")
  const selectbtnSumit = document.querySelector('#submit');
  selectbtnSumit !== null ? selectbtnSumit.remove() : '';
  tbody.innerHTML= '';
  tfoot.innerHTML = 's/ 0.00';
  let total=0;
  for(let i=0; i<arrOrder.length; i++){
    let row = tbody.insertRow(i);
    let productCell = row.insertCell(0);
    let priceCell = row.insertCell(1);
    let removeCell = row.insertCell(2);
    productCell.innerHTML=arrOrder[i].product;
    priceCell.innerHTML=`s/ ${arrOrder[i].price}.00`;
    total+=Number(arrOrder[i].price);
    tfoot.innerHTML= `s/ ${total}.00`;
    const btnRemove = document.createElement('button');
    btnRemove.setAttribute('data-id', `${i}` )
    btnRemove.className='icon fas fa-trash-alt';
    btnRemove.type='button';
   /*  btnRemove.textContent=`<i class="fas fa-trash-alt"></i>`; */
    removeCell.appendChild(btnRemove);
  }
  const btnSubmit = document.createElement('button');
  btnSubmit.setAttribute('id', 'submit');
  btnSubmit.setAttribute('type', 'button');
  btnSubmit.textContent='Enviar a cocina';
  blockSumit.appendChild(btnSubmit);
  removeOrder();
}

export const removeOrder = () => {
  document.querySelectorAll('.icon').forEach(btn => btn.addEventListener('click', (e) => {
    arrOrder.splice(parseInt(e.target.dataset.id), 1); 
    printOrder();
  }))

}

export const readWaiter = (query) => {
  const container = document.getElementById('containerWaiter');

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