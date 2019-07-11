export const readBreak = (query) => {
  const container = document.getElementById('containerBody');
  container.innerHTML = "";
  query.forEach((doc) => {
    container.innerHTML += `<button class='btnProduct' data-id=${doc.data().Producto}>${doc.data().Producto}</br> s/ ${doc.data().Precio}.00</button>`
    console.log(doc.data());
  }) 
}

export const totalList = () => {
  document.querySelectorAll(".btnProduct").forEach(btn => console.log(btn) || btn.addEventListener('click', (e) => {
    console.log(e.target.id);
    const elementList = document.getElementById('listPedidos');
    const li = document.createElement('li');
    li.innerHTML = e.target.dataset.id;
    console.log(li)
    elementList.appendChild(li)
  }))
}  
