import { databaseOrder } from '../firestore.js'

export const saveOrderList = () => {
  document.querySelectorAll(".btnProduct").forEach(btn => btn.addEventListener('click', (e) => {
    const idBtn = btn.dataset.id;
    const arrObj = JSON.parse(sessionStorage.getItem('arrList'));
    let obj = arrObj.filter(element => {
      return element.id === idBtn;
    })
    let arrListOrder = JSON.parse(sessionStorage.getItem('arrListOrder'));
    const containerbtnTypes = document.querySelector('#containerbtnTypes');
    containerbtnTypes !== null ? containerbtnTypes.remove() : '';
    if (obj[0].type) {
      let containerbtn = document.querySelector(`#id-${idBtn}`);
      const containerbtnTypes = document.createElement('div');
      containerbtnTypes.setAttribute('id', 'containerbtnTypes');
      containerbtn.appendChild(containerbtnTypes);
      const description = document.createElement('p');
      description.textContent = 'tipo de hamburguesa';
      containerbtnTypes.appendChild(description);
      obj[0].type.forEach((e) => {
        const btnType = document.createElement('button');
        btnType.setAttribute('class', 'btnType');
        btnType.type = 'button';
        btnType.value = e;
        btnType.textContent = e;
        containerbtnTypes.appendChild(btnType);
      });
      const descriptionExtra = document.createElement('p');
      descriptionExtra.textContent = 'Extras (s/ 1.00 adicional)';
      containerbtnTypes.appendChild(descriptionExtra);
      obj[0].extra.forEach((e) => {
        const btnExtra = document.createElement('button');
        btnExtra.setAttribute('class', 'btnExtra');
        btnExtra.type = 'button';
        btnExtra.value = e;
        btnExtra.textContent = e;
        containerbtnTypes.appendChild(btnExtra);
      });
      const br = document.createElement('br');
      const btnAdd = document.createElement('button');
      btnAdd.setAttribute('id', 'btnAdd');
      btnAdd.type = 'button';
      btnAdd.textContent = 'Agregar';
      containerbtnTypes.appendChild(br);
      containerbtnTypes.appendChild(btnAdd);
      obj[0].type = '';
      obj[0].extra = '';

      document.querySelectorAll(".btnType").forEach(btn => btn.addEventListener('click', () => {
        obj[0].type = btn.value;
      }))
      document.querySelectorAll(".btnExtra").forEach(btn => btn.addEventListener('click', () => {
        obj[0].extra = btn.value;
      }))
      document.querySelector('#btnAdd').addEventListener('click', () => {
        obj[0].extra === '' ? delete obj[0].extra : obj[0].price = obj[0].price + 1;
        if (obj[0].type) {
          if (arrListOrder) {
            if (arrListOrder.findIndex(e => e.type === obj[0].type && e.extra === obj[0].extra) !== -1) {
              clickCounter(arrListOrder, arrListOrder.findIndex(e => e.type === obj[0].type && e.extra === obj[0].extra)); 
            }
            else {
              arrListOrder.push(obj[0]);
              sessionStorage.setItem('arrListOrder', JSON.stringify(arrListOrder));
              printOrder();
            }
          }
          else {
            sessionStorage.setItem('arrListOrder', JSON.stringify(obj));
            printOrder();
          }
          containerbtnTypes.remove();
        }
      })
    }
    else {
      if (arrListOrder) {
        if (arrListOrder.map(e => e.id).indexOf(idBtn) !== -1) {
          clickCounter(arrListOrder, arrListOrder.map(e => e.id).indexOf(idBtn));
        }
        else {
          arrListOrder.push(obj[0]);
          sessionStorage.setItem('arrListOrder', JSON.stringify(arrListOrder));
          printOrder();
        }
      }
      else {
        sessionStorage.setItem('arrListOrder', JSON.stringify(obj));
        printOrder();
      }
    }
  }))
}

export const printOrder = () => {
  const nameClient = document.getElementById('nameClient');
  const printName = sessionStorage.getItem("Nombre");
  nameClient.innerHTML = `Cliente : ${printName ? printName : ''}`;
  let arrListOrder = JSON.parse(sessionStorage.getItem('arrListOrder'));
  const tbody = document.querySelector('#tableOrder tbody');
  const tfoot = document.querySelector("#total");
  const blockSubmit = document.querySelector("#blockSubmit")
  const selectbtnSubmit = document.querySelector('#submit');
  selectbtnSubmit !== null ? selectbtnSubmit.remove() : '';
  tbody.innerHTML = '';
  tfoot.innerHTML = 's/ 0.00';
  let total = 0;
  if (arrListOrder) {
    for (let i = 0; i < arrListOrder.length; i++) {
      let row = tbody.insertRow(i);
      let productCell = row.insertCell(0);
      let priceCell = row.insertCell(1);
      let counterCell = row.insertCell(2);
      let removeCell = row.insertCell(3);
      productCell.innerHTML = arrListOrder[i].extra !== undefined ? arrListOrder[i].product + ' ' + arrListOrder[i].type + ' con ' + arrListOrder[i].extra : arrListOrder[i].type !== undefined ? arrListOrder[i].product + ' ' + arrListOrder[i].type : arrListOrder[i].product;

      priceCell.innerHTML = `s/ ${arrListOrder[i].price}.00`;

      total += Number(arrListOrder[i].price);
      tfoot.innerHTML = `s/ ${total}.00`;

      const quantityP = document.createElement('p');
      quantityP.setAttribute('id', `quantity-${arrListOrder[i].id}`)
      quantityP.setAttribute('data-id', `${arrListOrder[i].id}`)
      quantityP.className = 'quantity';
      quantityP.textContent = arrListOrder[i].quantity;

      const btnSubtra = document.createElement('button');
      btnSubtra.setAttribute('data-id', `${arrListOrder[i].id}`)
      btnSubtra.setAttribute('data-i', `${i}`)
      btnSubtra.className = 'subtra fas fa-minus';
      btnSubtra.type = 'button';

      const btnSum = document.createElement('button');
      btnSum.setAttribute('data-id', `${arrListOrder[i].id}`);
      btnSum.setAttribute('data-i', `${i}`);
      btnSum.className = 'sum fas fa-plus';
      btnSum.type = 'button';

      counterCell.appendChild(btnSubtra);
      counterCell.appendChild(quantityP);
      counterCell.appendChild(btnSum);

      const btnRemove = document.createElement('button');
      btnRemove.className='remove';
      btnRemove.setAttribute('data-id', `${arrListOrder[i].id}`);
      btnRemove.setAttribute('data-i', `${i}`);
      btnRemove.innerHTML = `<i class="fas fa-trash-alt"></i>`;
      btnRemove.type = 'button';

      removeCell.appendChild(btnRemove);
    }
    const btnSubmit = document.createElement('button');
    btnSubmit.setAttribute('id', 'submit');
    btnSubmit.setAttribute('class', 'submit');
    btnSubmit.setAttribute('type', 'button');
    btnSubmit.textContent = 'Enviar a cocina';
    blockSubmit.appendChild(btnSubmit);
    sum(arrListOrder);
    subtra(arrListOrder);
    removeCell(arrListOrder);
    sendOrder(arrListOrder);
  }
}

const sum = (arrObj) => {
  document.querySelectorAll(".sum").forEach(btn => btn.addEventListener('click', () => {

    let obj = arrObj[btn.dataset.i];
    const valueQuant = obj.quantity;
    let newValueQuant = valueQuant + 1;
    obj.quantity = newValueQuant;
    const valuePrice = obj.price;
    let newValuePrice = valuePrice + (valuePrice / valueQuant);
    obj.price = newValuePrice;
    sessionStorage.setItem('arrListOrder', JSON.stringify(arrObj));
    printOrder();
  })
  )
}

const subtra = (arrObj) => {
  const btnSubmit = document.querySelector('#submit');
  document.querySelectorAll(".subtra").forEach(btn => btn.addEventListener('click', () => {
    let i = btn.dataset.i;
    let obj = arrObj[i];
    const valueQuant = obj.quantity;
    let newValueQuant = valueQuant - 1;
    obj.quantity = newValueQuant;
    if (obj.quantity === 0) {
      arrObj.splice(i, 1);
      sessionStorage.setItem('arrListOrder', JSON.stringify(arrObj));
      printOrder();
    }
    else {
      const valuePrice = obj.price;
      let newValuePrice = valuePrice - (valuePrice / valueQuant);
      obj.price = newValuePrice;
      sessionStorage.setItem('arrListOrder', JSON.stringify(arrObj));
      printOrder();
    }
  }))
  arrObj.length === 0 ? (sessionStorage.removeItem('arrListOrder'),
    btnSubmit.remove()) : ('');
}

const removeCell = (arrObj) => {
  document.querySelectorAll('.remove').forEach(btn => btn.addEventListener('click', () => {
    let i = btn.dataset.i;
    arrObj.splice(i, 1);
    sessionStorage.setItem('arrListOrder', JSON.stringify(arrObj))
    printOrder();
  }))
}

const clickCounter = (arr, i) => {
  let obj = arr[i];
  const valueQuant = obj.quantity;
  let newValueQuant = valueQuant + 1;
  obj.quantity = newValueQuant;
  const valuePrice = obj.price;
  let newValuePrice = valuePrice + (valuePrice / valueQuant);
  obj.price = newValuePrice;
  sessionStorage.setItem('arrListOrder', JSON.stringify(arr));
  printOrder(); 
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
    const containerbtn = document.createElement('div');
    containerbtn.setAttribute('id', `id-${obj.id}`);
    containerbtn.setAttribute('data-id', `${obj.id}`);
    const btnProduct = document.createElement('button');
    btnProduct.setAttribute('class', 'btnProduct');
    btnProduct.setAttribute('data-id', `${obj.id}`);
    btnProduct.setAttribute('data-price', `${obj.price}`);
    btnProduct.innerHTML = obj.producprecio;

    containerbtn.appendChild(btnProduct);
    container.appendChild(containerbtn);
  })
  sessionStorage.setItem('arrList', JSON.stringify(arrList));
}

const sendOrder = (arrObj) => {
  const selectbtnSubmit = document.querySelector('#submit');
  const nameClient = document.getElementById('nameClient');

  if (selectbtnSubmit) {
    selectbtnSubmit.addEventListener('click', () => {
      let nombre = sessionStorage.getItem('Nombre')
      const obj = {
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        finalDate: firebase.firestore.FieldValue.serverTimestamp(),
        name: nombre,
        order: arrObj,
        state: 'En preparación'
      }
      databaseOrder(obj);
      sessionStorage.removeItem('Nombre');
      sessionStorage.removeItem('arrListOrder');
      nameClient.innerHTML = '';
      printOrder();
    })
  }
}

export const resetWaiter = () => {
  const btnReset = document.querySelector('#btnResetWaiter');
  btnReset.addEventListener('click', () => {
    const nameClient = document.getElementById('nameClient');
    sessionStorage.removeItem('Nombre');
    sessionStorage.removeItem('arrListOrder');
    nameClient.innerHTML = '';
    printOrder();
  })
}