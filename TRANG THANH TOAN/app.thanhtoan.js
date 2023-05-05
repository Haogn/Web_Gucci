// let cart = localStorage.getItem("dataMen");
let cart ; 
let historys ; 
let nam = JSON.parse(localStorage.getItem("dataMen")); 
let nu = JSON.parse(localStorage.getItem("dataMX")) ; 

let nameCustom = JSON.parse(localStorage.getItem("listCustomers"));
// console.log(nameCustom);

let account = document.querySelector("#account");
let log_out = document.querySelector("#log_out");

log_out.onclick = function () {
    // console.log("log_out");
    for (let i = 0; i < nameCustom.length; i++) {
    nameCustom[i].status = false;
}
    localStorage.setItem("listCustomers", JSON.stringify(nameCustom));
    log_out.children[0].setAttribute("href", "../LOGIN/index.html");
};

for (let i = 0; i < nameCustom.length; i++) {
    if ( nameCustom[i].status === true ) {
        account.innerHTML = `<a href="../HISTORY/index.html"><i class="fa-solid fa-user"></i> ${nameCustom[i].name}</a>`;
        // console.log(account.innerHTML);
        cart = nameCustom[i].cartCustomers;
        historys = nameCustom[i].historys; 
    }
}
console.log("cart",cart);

let tbody = document.getElementById("tbody");

let money = document.getElementById("money");

let btn_pay = document.getElementById("btn_pay");

let pay = document.getElementById("input_money");

let endPay = document.getElementById("endpay");

// let historys;
// let dataHis = localStorage.getItem("historys");
// if (dataHis) {
//   historys = JSON.parse(dataHis);
// } else {
//   historys = [];
// }

let phone = document.querySelector("#number_phone");

let address = document.querySelector("#address");

function renderCart() {
  let newA = cart.filter((e) => {
    return e.count > 0;
  });
  let html = newA.map((e, i) => {
    return `
                    <tr id="${e.id}">
                        <th scope="row">${i + 1}</th>
                        <td>${e.name}</td>
                        <td> <img src="${e.src1}" alt=""></td>
                        <td><span>${e.price.toLocaleString()}</span>$</td>
                        <td> <span>${e.count}</span> </td>
                        <td>
                            <div class="buy-sell">
                                <i id="cong" class="fa-sharp fa-solid fa-plus cong"></i>
                                <i id="tru" class="fa-solid fa-minus tru"></i>
                            </div>
                        </td>
                    </tr>
                    `;
  });
  tbody.innerHTML = html.join("");
  let sum = 0;
  for (let i = 0; i < newA.length; i++) {
    sum += newA[i].count * newA[i].price;
  }
  money.innerHTML = `${sum.toLocaleString()}`;
  // chuyen chuoi thanh co dau cham
}
renderCart();

// tong ten
function sumName() {
  let newName = "";
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].count > 0) {
      newName += cart[i].name + "<br>";
    }
  }
  return newName;
}
sumName();

// tong conut
function sumCount() {
  let sumCount = 0;
  for( let i = 0 ; i < cart.length ; i++ ) {
    sumCount += Number(cart[i].count) ;
  }
  
  console.log("tong count", sumCount);
  return sumCount;
}
sumCount();

// so sanh
function compar() {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].count * cart[i].price;
    // console.log(sum);
  }
  return sum;
}
// console.log(compar());
btn_pay.onclick = function ()  {
  pay.value = `${compar()} $`; 
}

endPay.onclick = function () {
  if ( phone.value === "" || address.value === "") {
    swal({
            title: "Lỗi thanh toán",
            text: "Vui lòng nhập đủ địa chỉ và số điện thoại ",
            icon: "warning",
          }); 
  } else {
    let newHistory = {
          id: historys.length + 1,
          productsName: sumName(),
          address: address.value,
          bill: compar(),
          phone: phone.value,
          count: sumCount(),
        };
        historys.push(newHistory);
        console.log(historys);
    
        localStorage.setItem("listCustomers", JSON.stringify(nameCustom));
    
        //  console.log("hello");
        swal("Thanks!", "Thanh toán thành công", "success");
        cart.length = 0 ; 
        localStorage.setItem("listCustomers", JSON.stringify(nameCustom));
        renderCart();
  }
}
// {
//   if (+pay.value === compar() ) {
//     let newHistory = {
//       id: historys.length + 1,
//       productsName: sumName(),
//       address: address.value,
//       bill: compar(),
//       phone: phone.value,
//       count: sumCount(),
//     };
//     historys.push(newHistory);
//     console.log(historys);

//     localStorage.setItem("listCustomers", JSON.stringify(nameCustom));

//     //  console.log("hello");
//     swal("Thanks!", "Thanh toán thành công", "success");
//     cart.length = 0 ; 
//     localStorage.setItem("listCustomers", JSON.stringify(nameCustom));
//     renderCart();
//   } else  {
//     swal({
//       title: "Lỗi thanh toán",
//       text: "Vui lòng nhập lại số tiền cần thanh toán ",
//       icon: "warning",
//     }); 
//   } 
// };

/**
 *
 */

tbody.onclick = function (e) {
  if (e.target.classList.contains("tru")) {
    // console.log(e.target.classList.contains("tru"));
    let truId = Number(e.target.parentElement.parentElement.parentElement.id);
    for (i = 0; i < cart.length; i++) {
      if (truId === cart[i].id) {
        if (cart[i].count <= 0) {
          cart[i].count = 0;
        } else {
          --cart[i].count;
        }
      }
      money.innerHTML = cart[i].price * cart[i].count;
    }
    renderCart();
  }
  if (e.target.classList.contains("cong")) {
    let congId = Number(e.target.parentElement.parentElement.parentElement.id);
    for (i = 0; i < cart.length; i++) {
      if (congId === cart[i].id) {
        cart[i].count += 1;
        // congMoney = money +  cart[i].price ;

        money.innerHTML = cart[i].price * cart[i].count;
      }
    }
  }
  renderCart();
};





