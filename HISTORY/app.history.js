// let historys = JSON.parse(localStorage.getItem("historys"));

let nameCustom = JSON.parse(localStorage.getItem("listCustomers"));
// console.log(nameCustom);
let historys ; 
let account = document.querySelector("#account");
let log_out = document.querySelector("#log_out");
console.log("log out");
log_out.onclick = function () {
    console.log("log_out");
    for (let i = 0; i < nameCustom.length; i++) {
    nameCustom[i].status = false;
}
    localStorage.setItem("listCustomers", JSON.stringify(nameCustom));
    // console.log(nameCustom);
    log_out.children[0].setAttribute("href", "../LOGIN/index.html");
};

for (let i = 0; i < nameCustom.length; i++) {
    if ( nameCustom[i].status === true ) {
        account.innerHTML = `<a href="../HISTORY/index.html"><i class="fa-solid fa-user"></i> ${nameCustom[i].name}</a>`;
        console.log(account.innerHTML);
        cart = nameCustom[i].cartCustomers;
        historys = nameCustom[i].historys ; 

    }
}

let orderHis = document.getElementById("tbody");
// console.log(orderHis);

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
      <td>
        <button id="${
          historys[i].id
        }" class="btn btn-success btn-update update">Update</button>
        <button id="${
          historys[i].id
        }" class="btn btn-danger btn-delete delete">Hủy đơn</button>
      </td>
    </tr>
    `;
  }
}
renderHis();
let updateIndex ; 
orderHis.onclick = function (e) {
  let check;
  if (e.target.classList.contains("delete")) {
    console.log("delete");
    let deleteId = Number(e.target.id);
    console.log(deleteId);
    for (let i = 0; i < historys.length; i++) {
      if (deleteId === historys[i].id) {
        check = i;
      }
    }
    historys.splice(check, 1);
    renderHis();
    localStorage.setItem("listCustomers", JSON.stringify(nameCustom));
  }

  if (e.target.classList.contains("update")) {
    console.log("update");
    let updateId = Number(e.target.id);
    console.log(updateId);
    let thay_doi = e.target.parentElement.parentElement;
    let findIndex = -1;
    for (i = 0; i < historys.length; i++) {
      if (updateId === historys[i].id) {
        findIndex = i;
      }
    }
    if (findIndex !== -1) {
      
      updateIndex = findIndex;
      let find = historys[findIndex];
      console.log(find);
      thay_doi.innerHTML = `
      <tr id="${find.id}">
        <th scope="row">${i}</th>
        <td>${find.productsName}</td>
        <td><input class="form-control" type="text"></td>
        <td>${find.bill}$</td>
        <td><input class="form-control" type="text"> </td>
        <td>${find.count}</td>
        <td>
          <button id="${find.id}" class="btn btn-success btn-update confirm">Confirm</button>
          <button id="${find.id}" class="btn btn-danger btn-delete cancel">Cancel</button>
        </td>
      </tr>
      `;
    }
  }
  if (e.target.classList.contains("confirm")) {
    console.log("confirm ");
    let address =
      e.target.parentElement.parentElement.children[2].children[0].value;
    let phone =
      e.target.parentElement.parentElement.children[4].children[0].value;
      if(address === "" || phone === "") {
        swal({
          title: "Vui lòng nhập đẩy đủ thông tin",
          icon: "warning",
        });
      } else {

        historys[updateIndex] = {
          ...historys[updateIndex],
          address: address,
          phone: phone,
        };
        renderHis();
        localStorage.setItem("listCustomers", JSON.stringify(nameCustom));
      }
  }
  if ( e.target.classList.contains("cancel")) {
    console.log("cancel");
    renderHis() ; 
  }
};



