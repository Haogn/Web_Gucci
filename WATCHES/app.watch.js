let product ; 
let data5 = localStorage.getItem("dataWaches"); 
if (data5) {
  product = JSON.parse(data5) ; 
} else {
  product= [
     {
       id: 1,
       src1: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1653980403/673301_I16F0_1108_001_100_0000_Light-GUCCI-25H-watch-40mm.jpg",
       src2: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1653980408/673301_I16F0_1108_002_100_0000_Light-GUCCI-25H-watch-40mm.jpg",
       src3: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1653980403/673301_I16F0_1108_001_100_0000_Light-GUCCI-25H-watch-40mm.jpg",
       price: 16340,
       name: "GUCCI 25H watch, 40mm",
       like: 0,
       count: 0,
       quantity: 200,
     },
     {
       id: 2,
       src1: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1649178041/704384_I1600_9818_001_100_0000_Light-GUCCI-25H-watch-38mm.jpg",
       src2: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1649178042/704384_I1600_9818_002_100_0000_Light-GUCCI-25H-watch-38mm.jpg",
       src3: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1649178041/704384_I1600_9818_001_100_0000_Light-GUCCI-25H-watch-38mm.jpg",
       price: 2163,
       name: "GUCCI 25H watch, 38mm",
       like: 0,
       count: 0,
       quantity: 200,
     },
     {
       id: 3,
       src1: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1649178033/704376_I1600_8605_001_100_0000_Light-GUCCI-25H-watch-38mm.jpg",
       src2: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1649178034/704376_I1600_8605_002_100_0000_Light-GUCCI-25H-watch-38mm.jpg",
       src3: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1649178033/704376_I1600_8605_001_100_0000_Light-GUCCI-25H-watch-38mm.jpg",
       price: 2210,
       name: "GUCCI 25H watch, 38mm",
         like: 0,
       count: 0,
       quantity: 200,
     },
     {
       id: 4,
       src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1664471777/717879_J810A_9573_001_100_0000_Light-GUCCI-25H-watch-40mm.jpg",
       src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1664471778/717879_J810A_9573_002_100_0000_Light-GUCCI-25H-watch-40mm.jpg",
       src3: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1664471777/717879_J810A_9573_001_100_0000_Light-GUCCI-25H-watch-40mm.jpg",
       price: 13240,
       name: "GUCCI 25H watch, 40mm",
         like: 0,
       count: 0,
       quantity: 200,
     },
     {
       id: 5,
       src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1554394505/584162_I1600_8489_001_100_0000_Light-G-Timeless-watch-42mm.jpg",
       src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1554394505/584162_I1600_8489_002_100_0000_Light-G-Timeless-watch-42mm.jpg",
       src3: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1554394505/584162_I1600_8489_001_100_0000_Light-G-Timeless-watch-42mm.jpg",
       price: 2760 ,
       name: "G-Timeless watch, 42mm" ,
         like: 0,
       count: 0,
       quantity: 200,
     },
     {
       id: 6,
       src1: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1648083676/704342_I1600_8591_001_100_0000_Light-G-Timeless-multibee-watch-38-mm.jpg",
       src2: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1648083677/704342_I1600_8591_002_100_0000_Light-G-Timeless-multibee-watch-38-mm.jpg",
       src3: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1648083676/704342_I1600_8591_001_100_0000_Light-G-Timeless-multibee-watch-38-mm.jpg",
       price: 2450,
       name: "G-Timeless multibee watch, 38 mm",
         like: 0,
       count: 0,
       quantity: 200,
     },
     {
       id: 7,
       src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1679917519/750462_ICAA0_8512_001_100_0000_Light-G-Timeless-watch-with-bees-38-mm.jpg",
       src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1679917522/750462_ICAA0_8512_002_100_0000_Light-G-Timeless-watch-with-bees-38-mm.jpg",
       src3: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1679917519/750462_ICAA0_8512_001_100_0000_Light-G-Timeless-watch-with-bees-38-mm.jpg",
       price: 9999,
       name: "G-Timeless watch with bees, 38 mm",
       
         like: 0,
       count: 0,
       quantity: 200,
     },
     {
       id: 8,
       src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1619419509/676169_I1600_8794_001_100_0000_Light-G-Timeless-multibee-watch-38-mm.jpg",
       src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1619419509/676169_I1600_8794_002_100_0000_Light-G-Timeless-multibee-watch-38-mm.jpg",
       src3: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1619419509/676169_I1600_8794_001_100_0000_Light-G-Timeless-multibee-watch-38-mm.jpg",
       price: 2890,
       name: "G-Timeless multibee watch, 38 mm",
         like: 0,
       count: 0,
       quantity: 200,
     },
   ];
}
  let listProduct = document.querySelector(".item-product");
  // console.log(listProduct);
  
  function renderProduct() {
    listProduct.innerHTML = "";
    for (let i = 0; i < product.length; i++) {
      listProduct.innerHTML =
        listProduct.innerHTML +
        `<div class="img-product" id="${product[i].id}" data-bs-toggle="modal" data-bs-target="#exampleModal${product[i].id}">
          <div class="img">
            <img src=${product[i].src1} alt="">
            <i class="fa-regular fa-heart"></i>
          </div>
          <div class="carousel">
            <img src=${product[i].src2} alt="">
            <i class="fa-regular fa-heart"></i>
          </div>
          <div class="modal fade" id="exampleModal${product[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Thông tin sản phẩm </h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="card information" >
                <img src="${product[i].src3}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5> ${product[i].name} - <strong> ${product[i].price}</strong> $ </h5> <hr>
                <p> ${product[i].name}Hình dáng thuôn gọn của GUCCI 25H được lấy cảm hứng từ những hình thức bóng bẩy của kiến ​​trúc đương đại. Đồng hồ được trang bị vỏ nhiều lớp mỏng và vòng đeo tay bằng thép năm mắt xích, trong khi thiết kế được hoàn thiện bằng mặt kính màu hồng và họa tiết G lồng vào nhau. Cái tên GUCCI 25H được gán cho một lá bùa đặc biệt mang tính biểu tượng.</p>
                
                </div>
              </div>
                </div>
                <div class="modal-footer">
                <button id="${product[i].id}" type="button" class="btn btn-primary like">Like </button>
                <button id="${product[i].id}">
                    <p class="buy" >Buy</p>
                    <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    }
  }
  renderProduct();
  let nameCustom = JSON.parse(localStorage.getItem("listCustomers"));
console.log(nameCustom);
let cart ; 
let account = document.querySelector("#account");
let log_out = document.querySelector("#log_out");
console.log("log out");
log_out.onclick = function () {
    console.log("log_out");
    for (let i = 0; i < nameCustom.length; i++) {
    nameCustom[i].status = false;
}
    localStorage.setItem("listCustomers", JSON.stringify(nameCustom));
    console.log(nameCustom);
    log_out.children[0].setAttribute("href", "../LOGIN/index.html");
};

for (let i = 0; i < nameCustom.length; i++) {
    if ( nameCustom[i].status === true ) {
        account.innerHTML = `<a href="../HISTORY/index.html"><i class="fa-solid fa-user"></i> ${nameCustom[i].name}</a>`;
        console.log(account.innerHTML);
    cart = nameCustom[i].cartCustomers;

    }
}

/**
 * khi nhấn dis like
 */
tbody.onclick = function (e) {
  if (e.target.classList.contains("btn_dislike")) {
    let dislikeId = Number(e.target.parentElement.parentElement.id);
    // console.log(Number(dislikeId));
    for (let i = 0; i < product.length; i++) {
      if (dislikeId === product[i].id) {
        product[i].like *= 0;
      }
    }
    renderLike();
  }
};

/**
 *  khi nhấn like tang len 1
 * truy van box like
 */
// let boxLike = document.createElement
listProduct.onclick = function (event) {
  // khi thuc hien mua
  if (event.target.classList.contains("buy")) {
    let buyId = Number(event.target.parentElement.id);
    console.log(buyId);
    for (let i = 0; i < product.length; i++) {
      if (buyId === product[i].id) {
        if (cart.length > 0) {
          let isCheck = -1;
          for (let j = 0; j < cart.length; j++) {
            if (buyId === cart[j].id) {
              isCheck = j;
              break;
            }
          }
          if (isCheck > -1) {
            cart[isCheck].count += 1;
          } else {
            cart.push({ ...product[i], count: 1 });
          }
        } else {
          cart.push({ ...product[i], count: 1 });
        }
        // product[i].count += 1;
        // console.log(product[i].count);
        // cart.push(product[i]);
        // console.log("cart", cart);
        localStorage.setItem("listCustomers", JSON.stringify(nameCustom));
      }
    }
    localStorage.setItem("dataWaches", JSON.stringify(product));
    console.log("product", product);
  }
  //khi thuc hien like
  if (event.target.classList.contains("like")) {
    let likeId = Number(event.target.id);
    console.log(likeId);
    for (i = 0; i < product.length; i++) {
      if (likeId === product[i].id) {
        product[i].like += 1;
      }
    }
    // console.log(product);
    renderLike();
    localStorage.setItem("dataWaches", JSON.stringify(product));
  }
  let newLike = product.filter((e) => {
    return e.like > 0;
  });
  let html = newLike.map((e, i) => {
    return `
                    <tr id="${e.id}">
                        <th scope="row">${i + 1}</th>
                        <td>${e.name}</td>
                        <td><img src="${e.src1}" alt=""></td>
                        <td><span>${e.price}</span>$</td>
                        <td> <span>${
                          Math.floor(Math.random() * 100) + 10
                        }</span> </td>
                        <td>
                          <button class="btn_dislike" >Dis Like</button>
                        </td>
                    </tr>
    `;
  });
  tbody.innerHTML = html.join("");
};

function renderLike() {
  let newLike = product.filter((e) => {
    return e.like > 0;
  });
  let html = newLike.map((e, i) => {
    return `
                    <tr id="${e.id}">
                        <th scope="row">${i + 1}</th>
                        <td>${e.name}</td>
                        <td><img src="${e.src1}" alt=""></td>
                        <td><span>${e.price}</span>$</td>
                        <td> <span>${
                          Math.floor(Math.random() * 100) + 10
                        }</span> </td>
                        <td>
                          <button class="btn_dislike" >Dis Like</button>
                        </td>
                    </tr>
    `;
  });
  tbody.innerHTML = html.join("");
}
renderLike();



  
  