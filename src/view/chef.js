export default () => {
    const div = document.createElement('div');
    const tmp3 = `<header class="header">
        <img class="img2" src="../images/logo2.png" alt="logo">
        <a href='#/waiter'>Hacer pedido</a>
    </header>
    <div>
        <button class='btnFilter'  id = 'op' type='button' value='En preparación'>En preparación</button>
        <button class='btnFilter' id = 'opo' type='button' value='Preparado'>Preparado</button>
        <button class='btnFilter' id = 'opop' type='button' value='Entregado'>Entregado</button>
    </div>
    <div id='containerChef'></div>
    `
    div.innerHTML = tmp3;
    return div;  
};

