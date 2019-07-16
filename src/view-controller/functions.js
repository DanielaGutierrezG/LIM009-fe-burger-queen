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

let arrPrice=[];
const sumPrice = (priceValue) => {

  arrPrice.push(parseInt(priceValue));

  const suma = arrPrice.reduce(((a,b) => a + b),0);

  const tfoot = document.querySelector("#total");
  console.log(suma)
  tfoot.innerHTML= suma;

  return sumPrice;
  
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
  tbody.innerHTML= '';
  for(let i=0; i<arrOrder.length; i++){
    let row = tbody.insertRow(i);
   /*  row.id=`id-${i}`; */
    console.log(row);
    let productCell = row.insertCell(0);
    let priceCell = row.insertCell(1);
    let removeCell = row.insertCell(2);
    productCell.innerHTML=arrOrder[i].product;
    priceCell.innerHTML=`s/ ${arrOrder[i].price}.00`;
    const btnRemove = document.createElement('button');
    btnRemove.setAttribute('data-id', `${i}` )
    /* btnRemove.id=`btn-${i}`; */
    console.log(btnRemove);
    btnRemove.className='icon fas fa-trash-alt';
    btnRemove.type='button';
   /*  btnRemove.textContent=`<i class="fas fa-trash-alt"></i>`; */
    removeCell.appendChild(btnRemove);
    
    
  }
  removeOrder();
   console.log('pasó remove');
 /*  removeOrder(); */
}

export const removeOrder = () => {
  document.querySelectorAll('.icon').forEach(btn => btn.addEventListener('click', (e) => {
    arrOrder.splice(parseInt(e.target.dataset.id), 1); 
    const table = document.querySelector('#tableOrder tbody');
    console.log(table);
    console.log(e.target.dataset.id);
    printOrder();



    /* table.deleteRow(parseInt(e.target.dataset.id))

    console.log(arrOrder); */
    
    /* console.log(typeof e.target.dataset.id);
   
    ;
    console.log(table);
   
    console.log(arrOrder); */
    /* const textTd=arrOrder.find( element => element.product === table ); 
    console.log(arrOrder.indexOf(textTd)); */

    
    /*  console.log(table);
    table.remove();
    console.log(arrOrder);
    console.log(e.target.id) */
    /* ; */
    
    
   /*  const cowsRow = tbody.rows.length
    Console.log(cowsRow); */
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