let historys = JSON.parse(localStorage.getItem("historys"));
console.log(historys);
let orderHis = document.getElementById("tbody") ;
console.log(orderHis);

function renderHis() {
   orderHis.innerHTML = "";
  for (let i = 0; i < historys.length; i++) {
    orderHis.innerHTML += `
    <tr id="${historys[i].id}">
    <th scope="row">${i + 1}</th>
      <td>${historys[i].productsName}</td>
      <td>${historys[i].address} </td>
      <td>${historys[i].bill}$</td>
      <td>${historys[i].phone} </td>
      <td>${historys[i].count}</td>
    </tr>
    `;
  }
}
renderHis();
