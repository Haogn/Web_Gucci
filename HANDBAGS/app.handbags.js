let product;

let nameCustom = JSON.parse(localStorage.getItem("listCustomers"));
console.log(nameCustom);

let account = document.querySelector("#account");
let log_out = document.querySelector("#log_out");
console.log("log out");
/**
 * doi ten theo ten tai khoarn
 * them san pham mua vao tung gio hang rieng
 */
let cartCustomer;
let cart;

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
  if (nameCustom[i].status === true) {
    account.innerHTML = `<a href="../HISTORY/index.html"><i class="fa-solid fa-user"></i> ${nameCustom[i].name}</a>`;
    console.log(account.innerHTML);
    cart = nameCustom[i].cartCustomers;
  }
}
console.log(cart);

let data2 = localStorage.getItem("dataHanbags");
if (data2) {
  product = JSON.parse(data2);
} else {
  product = [
    {
      id: 1,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1680628128/744434_1IV0G_9022_001_054_0000_Light-Gucci-Blondie-top-handle-bag.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1680628170/744434_1IV0G_9022_002_054_0000_Light-Gucci-Blondie-top-handle-bag.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1679910324/744434_1IV0G_9022_004_100_0000_Light-Gucci-Blondie-top-handle-bag.jpg",
      price: 2565,
      name: "Gucci Blondie top handle bag",
      color: "white leather",
      like: "",
    },
    {
      id: 2,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1679679044/744434_1IV0G_7519_001_054_0000_Light-Gucci-Blondie-top-handle-bag.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1679077018/744434_1IV0G_7519_002_054_0000_Light-Gucci-Blondie-top-handle-bag.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1679911219/744434_1IV0G_7519_003_100_0000_Light-Gucci-Blondie-top-handle-bag.jpg",
      price: 2565,
      name: "Gucci Blondie top handle bag",
      color: "orange leather",
      like: "",
    },
    {
      id: 3,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1679679016/744434_1IV0G_1000_001_054_0000_Light-Gucci-Blondie-top-handle-bag.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1678992344/744434_1IV0G_1000_002_054_0000_Light-Gucci-Blondie-top-handle-bag.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1679910303/744434_1IV0G_1000_003_100_0000_Light-Gucci-Blondie-top-handle-bag.jpg",
      price: 2565,
      name: "Gucci Blondie top handle bag",
      color: "black leather",
      like: "",
    },
    {
      id: 4,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1679679019/744434_1IV0G_2535_001_054_0000_Light-Gucci-Blondie-top-handle-bag.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1679118344/744434_1IV0G_2535_002_054_0000_Light-Gucci-Blondie-top-handle-bag.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1679911203/744434_1IV0G_2535_003_100_0000_Light-Gucci-Blondie-top-handle-bag.jpg",
      price: 2565,
      name: "Gucci Blondie top handle bag",
      color: "brown leather",
      like: "",
    },
    {
      id: 5,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1681748111/742360_1IV0G_9022_001_075_0000_Light-Gucci-Blondie-small-shoulder-bag.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1681748114/742360_1IV0G_9022_002_075_0000_Light-Gucci-Blondie-small-shoulder-bag.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1681944316/742360_1IV0G_9022_003_100_0000_Light-Gucci-Blondie-small-shoulder-bag.jpg",
      price: 2320,
      name: "Gucci Blondie small shoulder bag",
      color: "white leather",
      like: "",
    },
    {
      id: 6,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1681754415/742360_1IV0G_7519_001_075_0026_Light-Gucci-Blondie-small-shoulder-bag.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1681754418/742360_1IV0G_7519_002_075_0026_Light-Gucci-Blondie-small-shoulder-bag.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1681944314/742360_1IV0G_7519_003_100_0000_Light-Gucci-Blondie-small-shoulder-bag.jpg",
      price: 2320,
      name: "Gucci Blondie small shoulder bag",
      color: "orange leather",
      like: "",
    },
    {
      id: 7,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1677870178/742360_1IV0G_1000_001_075_0000_Light-Gucci-Blondie-small-shoulder-bag.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1677870183/742360_1IV0G_1000_002_075_0000_Light-Gucci-Blondie-small-shoulder-bag.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1679683551/742360_1IV0G_1000_003_100_0000_Light-Gucci-Blondie-small-shoulder-bag.jpg",
      price: 2320,
      name: "Gucci Blondie small shoulder bag",
      color: "black leather",
      like: "",
    },
    {
      id: 8,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1677203240/742360_1IV0G_2535_001_075_0028_Light-Gucci-Blondie-small-shoulder-bag.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1677203241/742360_1IV0G_2535_002_075_0028_Light-Gucci-Blondie-small-shoulder-bag.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1679683555/742360_1IV0G_2535_003_100_0000_Light-Gucci-Blondie-small-shoulder-bag.jpg",
      price: 2320,
      name: "Gucci Blondie small shoulder bag",
      color: "brown leather",
      like: "",
    },
  ];
}
localStorage.setItem("dataMen", JSON.stringify(product));

let listProduct = document.querySelector(".item-product");

let tbody = document.querySelector("#tbody");

let dataMenlocal = JSON.parse(localStorage.getItem("dataMen"));

let heart = document.querySelectorAll(".heart");
function renderProduct() {
  listProduct.innerHTML = "";
  for (let i = 0; i < product.length; i++) {
    listProduct.innerHTML =
      listProduct.innerHTML +
      `<div class="img-product " id="${product[i].id}" data-bs-toggle="modal" data-bs-target="#exampleModal${product[i].id}">
          <div class="img">
            <img src=${product[i].src1} alt="">
            <i class="fa-regular fa-heart heart"></i>
          </div>
          <div class="carousel">
            <img src=${product[i].src2} alt="">
            <i class="fa-regular fa-heart heart"></i>
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
                <p> ${product[i].name} Các tác phẩm đặc trưng của Gucci không ngừng phát triển xung quanh một câu chuyện năng động. Dòng hành lý được đặc trưng bởi màu nâu sẫm như một phần của bộ sưu tập Xuân Hè 2023, một sắc thái tinh tế để phản ánh sự xuất hiện của một mùa mới. Họa tiết GG khổng lồ trở lại trên đỉnh chiếc ba lô này, nổi bật với kích thước tối đa để tạo cảm giác logo đặc biệt.</p>
                <ul>
                  <li> ${product[i].color} Sản xuất tại Ý</li>
                  <li>Vải lanh lót bông</li>
                  <li>Bên ngoài: 2 túi bên có khóa và khóa cài nam châm bổ sung</li>
                  <li>Nội thất: Vỏ Iaptop có đệm và 2 vỏ điện thoại thông minh</li>
                  <li>Đóng nắp bằng khóa và các chốt nam châm bổ sung</li>
                  <li>13,4"Rộng x 16,2"H x 4,7"Sâu</li>
                </ul>
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
    localStorage.setItem("dataHanbags", JSON.stringify(product));
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
    localStorage.setItem("dataHanbags", JSON.stringify(product));
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
