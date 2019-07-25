import { databaseOrder } from '../firestore.js'

export const saveOrderList = () => {
  console.log('pasó');
  document.querySelectorAll(".btnProduct").forEach(btn => btn.addEventListener('click', () => {  
    console.log(btn);

    const idi = btn.dataset.id;
    const arrObj = JSON.parse(sessionStorage.getItem('arrList'));
    let obj = arrObj.filter(element => {
      return element.id === idi;
    })
    console.log(obj)
    let arrListOrder = JSON.parse(sessionStorage.getItem('arrListOrder'));
    if (arrListOrder) {
      console.log(arrListOrder);
      if (arrListOrder.map(e => e.id).indexOf(idi) !== -1) {
      }
      else {
        arrListOrder.push(obj[0])
       sessionStorage.setItem('arrListOrder', JSON.stringify(arrListOrder));
        printOrder(); 
      }
    }
    else {
      sessionStorage.setItem('arrListOrder', JSON.stringify(obj));
      printOrder(); 
    }
  }))
}


export const printOrder = () => {
  let arrListOrder = JSON.parse(sessionStorage.getItem('arrListOrder')); 
  console.log(arrListOrder);
  const tbody = document.querySelector('#tableOrder tbody');
  const tfoot = document.querySelector("#total");
  const blockSubmit = document.querySelector("#blockSubmit")
  const selectbtnSubmit = document.querySelector('#submit');
  selectbtnSubmit !== null ? selectbtnSubmit.remove() : '';
  tbody.innerHTML = '';
  tfoot.innerHTML = 's/ 0.00';
  let total = 0;
   if (arrListOrder !== null) { 
    for (let i = 0; i < arrListOrder.length; i++) {
      let row = tbody.insertRow(i);
      let productCell = row.insertCell(0);
      let priceCell = row.insertCell(1);
      let removeCell = row.insertCell(2);
      productCell.innerHTML = arrListOrder[i].product;
      priceCell.innerHTML = `s/ ${arrListOrder[i].price}.00`; //agrgar funcion que varie con el contador

      total += Number(arrListOrder[i].price);
      tfoot.innerHTML = `s/ ${total}.00`;

      const quantityP = document.createElement('p');
      quantityP.setAttribute('id', `quantity-${arrListOrder[i].id}`)
      quantityP.setAttribute('data-id', `${arrListOrder[i].id}`)
      quantityP.className = 'quantity';
      quantityP.textContent = arrListOrder[i].quantity;

      const btnSubtra = document.createElement('button');
      btnSubtra.setAttribute('data-id', `${arrListOrder[i].id}`)
      btnSubtra.className = 'subtra fas fa-minus';
      btnSubtra.type = 'button';

      const btnSum = document.createElement('button');
      btnSum.setAttribute('data-id', `${arrListOrder[i].id}`)
      btnSum.className = 'sum fas fa-plus';
      btnSum.type = 'button';

      removeCell.appendChild(btnSubtra);
      removeCell.appendChild(quantityP);
      removeCell.appendChild(btnSum);
    }
    const btnSubmit = document.createElement('button');
    btnSubmit.setAttribute('id', 'submit');
    btnSubmit.setAttribute('class', 'submit');
    btnSubmit.setAttribute('type', 'button');
    btnSubmit.textContent = 'Enviar a cocina';
    blockSubmit.appendChild(btnSubmit);
    console.log(arrListOrder);
    sum(arrListOrder);
    subtra(arrListOrder);
    sendOrder(arrListOrder);
  } 
}

const sum = (arrObj) => {
  document.querySelectorAll(".sum").forEach(btn => btn.addEventListener('click', () => {
    let id = btn.dataset.id;
    let obj = arrObj.find(elemet => {
      return elemet.id === id;
    })
    const valueQuant = obj.quantity;
    let newValueQuant = valueQuant + 1;
    obj.quantity = newValueQuant;
    const valuePrice = obj.price;
    let newValuePrice = valuePrice + (valuePrice/valueQuant);
    obj.price = newValuePrice;
    sessionStorage.setItem('arrListOrder', JSON.stringify(arrObj));
    printOrder();
  })
  )
}

const subtra = (arrObj) => {
  document.querySelectorAll(".subtra").forEach(btn => btn.addEventListener('click', () => {
    let id = btn.dataset.id;
    let obj = arrObj.find(elemet => {
      return elemet.id === id;
    })
    const valueQuant = obj.quantity
    let newValueQuant = valueQuant - 1;
    obj.quantity = newValueQuant;
    if (obj.quantity === 0) {
      let newArrObj = arrObj.filter(elemet => {
        return elemet.id !== id;
      })

      sessionStorage.setItem('arrListOrder', JSON.stringify(newArrObj));
      printOrder();
    }
    else {
      const valuePrice = obj.price;
      let newValuePrice = valuePrice - (valuePrice/valueQuant);
      obj.price = newValuePrice;
      sessionStorage.setItem('arrListOrder', JSON.stringify(arrObj));
      printOrder();
    }
  }))
  arrObj.length === 0 ? sessionStorage.removeItem('arrListOrder') : ''; 
}

export const readWaiter = (query) => {
  const container = document.getElementById('containerWaiter');
  let arrList = [];
  container.innerHTML = "";
  query.forEach((doc) => {
    const obj = {
      id: doc.id,
      product: doc.data().Producto,
      price: doc.data().Precio,
      image: doc.data().Imagen,
      type: doc.data().tipo,
      extra: doc.data().adicional,
      quantity: 1,
      get producprecio() {
        return `<img class="image" src="${this.image}">` + this.product + `<br>s/ ${this.price}.00`;
      }
    }
    arrList.push(obj);
    container.innerHTML += `<button class='btnProduct' data-id=${obj.id} data-price=${obj.price}>${obj.producprecio}</button>`
  })
  sessionStorage.setItem('arrList', JSON.stringify(arrList));
}


const sendOrder = (arrObj) => {
  const selectbtnSubmit = document.querySelector('#submit');
  const nameClient = document.getElementById('nameClient');
  selectbtnSubmit.addEventListener('click', () => {
    let nombre = sessionStorage.getItem('Nombre')
    const obj = {
      name: nombre,
      order: arrObj,
      /* condition:jj,
      time:name,  */
    }
    databaseOrder(obj);
    nameClient.innerHTML=''
    sessionStorage.removeItem('Nombre')
    sessionStorage.removeItem('arrListOrder')
    printOrder();
  })
}