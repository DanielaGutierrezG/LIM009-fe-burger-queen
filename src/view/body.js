import { showOrders } from "../view-controller/promises.js";

export default (name) => {
    const div = document.createElement('div');
    const tmp2 = `
    <div class = "col-sm-12">
    <div class = "col-sm-12">
    <nav>
    <div class="nav-wrapper orange">
      <a class="brand-logo">Burger Queen</a>
    </nav> 
    <h5>CLIENTE : ${name}</h5>
    </div></br>
    <div>
        <button class="waves-effect waves-light btn-large orange" id="btn-manana">Desayuno</button>
        <button class="waves-effect waves-light btn-large orange" id="btn-tarde">Almuerzo y Cena</button>
        </div>
    <div class ="col-sm-6" id="general">
       </div>
    <div class ="col-sm-6">
    <ul id="listOrders"></ul>
    </div>
    </div>
   `;

    div.innerHTML = tmp2;

    div.querySelector('#btn-manana')
    .addEventListener('click', () => {
        const general = div.querySelector('#general');
        general.innerHTML = `
        <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="../images/camericano.jpg">
        </div>
        <div class="card-action">
        <button value="Café Americano" class="allbtn waves-effect waves-teal btn-flat"> Café Americano </button>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="../images/cleche.jpg">
        </div>
        <div class="card-action">
        <button value="Café con leche" class="allbtn waves-effect waves-teal btn-flat"> Café con leche </button>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="../images/sandwich.jpg">
        </div>
        <div class="card-action">
        <button value="Sandwich jamón y queso" class="allbtn waves-effect waves-teal btn-flat"> Sandwich de jamón y queso </button>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="../images/jugo.jpg">
        </div>
        <div class="card-action">
        <button value ="Jugo de frutas natural" class="allbtn waves-effect waves-teal btn-flat"> Jugo de frutas natural </button>
        </div>
      </div>
    </div>
  </div> `;
  showOrders();

    })

    
    div.querySelector('#btn-tarde')
    .addEventListener('click', () => {
        const general = document.querySelector('#general')
        general.innerHTML=`
        <button class="allbtn waves-effect waves-teal btn-flat"> Hamburguesa simple </button>
        <button class="allbtn waves-effect waves-teal btn-flat"> Hamburguesa doble </button>
        <button class="allbtn waves-effect waves-teal btn-flat"> Papas fritas </button>
        <button class="allbtn waves-effect waves-teal btn-flat"> Aros de cebolla </button>
        <button class="allbtn waves-effect waves-teal btn-flat"> Agua 500ml </button>
        <button class="allbtn waves-effect waves-teal btn-flat"> Agua 750ml  </button>
        <button class="allbtn waves-effect waves-teal btn-flat"> bebida/gaseosa 500ml </button>
        <button class="allbtn waves-effect waves-teal btn-flat"> bebida/gaseosa 750ml </button>
        `;
    })

    return div
};

