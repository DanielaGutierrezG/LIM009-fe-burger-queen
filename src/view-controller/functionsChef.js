

const arrOrders = (arr, id) => {
    let texto = '';
    for (let i = 0; i < arr.length; i++) {
        texto += arr[i].extra ? `<p>${arr[i].quantity + ' ' + arr[i].product + ' ' + arr[i].type + ' con ' + arr[i].extra}</p><br>` :
            arr[i].type ? `<p>${arr[i].quantity + ' ' + arr[i].product + ' ' + arr[i].type}</p><br>` : `<p>${arr[i].quantity + ' ' + arr[i].product}</p><br>`;
    }
    document.getElementById(id).innerHTML = texto;
}






export const readOrders = (query) => {
    const containerChef = document.querySelector('#containerChef');
    containerChef.innerHTML = '';
    query.forEach((doc) => {
        containerChef.innerHTML +=
            `<table>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Productos</th>
                        <th>Estado</th>
                        <th>Tiempo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${doc.data().name}</td>
                        <td id='order-${doc.id}'></td>
                        <td>
                            <select  data-select="${doc.id}" class='selctState'>
                            ${doc.data().state === 'En preparación' ?
                `<option value = ${doc.data().state}  selected >${doc.data().state}</option>
                                <option value ='Preparado'>Preparado</option>
                                <option value ='Entregado'>Entregado</option>` :
                doc.data().state === 'Preparado' ?
                    `<option value = ${doc.data().state}  selected >${doc.data().state}</option>
                                    <option value ='Entregado'>Entregado</option>
                                    <option value ='En preparación'>En preparación</option>` :
                    doc.data().state === 'Entregado' ?
                        `<option value = ${doc.data().state}  selected >${doc.data().state}</option>
                                        <option value ='Preparado'>Preparado</option>`
                        : ''}
                            </select>
                        </td>
                        <td id='time-${doc.id}'>
                           
                        </td>
                    </tr>
                </tbody>
            </table>`
        arrOrders(doc.data().order, `order-${doc.id}`);
       
    })
}





