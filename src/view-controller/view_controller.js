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
  document.querySelectorAll(".btnProduct").forEach(btn => console.log(btn) || btn.addEventListener('click', (e) => {
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
    let productCell = row.insertCell(0);
    productCell.innerHTML=arrOrder[i].product;
    let priceCell = row.insertCell(1);
    priceCell.innerHTML=`s/ ${arrOrder[i].price}.00`;
  }
}

export const readBody = (query) => {
  const container = document.getElementById('containerBody');
  console.log(container);
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


