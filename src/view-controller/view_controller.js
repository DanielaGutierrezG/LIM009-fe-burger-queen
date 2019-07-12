export const readBody = (query) => {
  const container = document.getElementById('containerBody');
  container.innerHTML = "";
  query.forEach((doc) => {
    let obj = {
      producto : doc.data().Producto,
      precio : doc.data().Precio,
      get producprecio() {
        return this.producto + `<br>s/ ${this.precio}.00`;
      } 
    }
    container.innerHTML += `<button class='btnProduct' data-price=${doc.data().Precio}> ${obj.producprecio}</button>`
  }) 
}

export const totalList = () => {
  document.querySelectorAll(".btnProduct").forEach(btn => console.log(btn) || btn.addEventListener('click', (e) => {
    const producto = e.target.textContent;
    const precio = e.target.dataset.price;
    sessionStorage.setItem("Producto", producto);
    sessionStorage.setItem("Precio", precio);


  }))
}  
