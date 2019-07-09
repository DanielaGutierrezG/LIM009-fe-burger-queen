export default (name) => {
    const div = document.createElement('div');
    const tmp2 = `
    <div class = "col-sm-12">
    <div class = "col-sm-12">
    CLIENTE : ${name}
    </div></br>
    </br>
    <div class = "col-sm-6">
    <div class = "col-sm-6">
        <button>Desayuno</button></br>
            <button>Café americano</button>
            <button>Café con leche</button>
            <button>Sandwich de jamón y queso</button>
            <button>Jugo de frutas natural</button>
        </div>
    <div class = "col-sm-6">
        <button id="lunch">Almuerzo y cena</button></br>
        <button>Café americano</button>
        <button>Café con leche</button>
        <button>Sandwich de jamón y queso</button>
        <button>Jugo de frutas natural</button>
    </div>
    </div>
    <div class = "col-sm-6">PEDIDOS</div>
    </div>
   `;

    div.innerHTML = tmp2;

    return div
};
