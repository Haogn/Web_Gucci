let product;

let data = localStorage.getItem("dataMX");
if (data) {
  product = JSON.parse(data);
} else {
  product = [
    {
      id: 1,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1678151820/682302_Z8AWR_2184_001_100_0000_Light-GG-canvas-jacket-with-Web-belt.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1678152736/682302_Z8AWR_2184_005_100_0000_Light-GG-canvas-jacket-with-Web-belt.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1678152733/682302_Z8AWR_2184_002_100_0000_Light-GG-canvas-jacket-with-Web-belt.jpg",
      price: 6200,
      name: "GG canvas jacket with Web belt",
      like: 0,
      count: 0,
      quantity: 200,
    },
    {
      id: 2,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1632938413/681034_Z8AV6_2184_001_100_0000_Light-GG-canvas-jacket-with-leather-trim.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1632938413/681034_Z8AV6_2184_002_100_0000_Light-GG-canvas-jacket-with-leather-trim.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1632938413/681034_Z8AV6_2184_004_100_0000_Light-GG-canvas-jacket-with-leather-trim.jpg",
      price: 6000,
      name: "GG canvas jacket with leather trim",
      like: 0,
      count: 0,
      quantity: 200,
    },
    {
      id: 3,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1625848204/610488_XKA5U_9751_001_100_0000_Light-GG-wool-cape.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1625848204/610488_XKA5U_9751_002_100_0000_Light-GG-wool-cape.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1625848204/610488_XKA5U_9751_004_100_0000_Light-GG-wool-cape.jpg",
      price: 3900,
      name: "GG wool cape",
      like: 0,
      count: 0,
      quantity: 200,
    },
    {
      id: 4,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1678234594/734911_Z8BEI_2184_001_100_0000_Light-Reversible-GG-cotton-bomber-jacket.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1678234598/734911_Z8BEI_2184_002_100_0000_Light-Reversible-GG-cotton-bomber-jacket.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1678234603/734911_Z8BEI_2184_005_100_0000_Light-Reversible-GG-cotton-bomber-jacket.jpg",
      price: 8000,
      name: "Reversible GG cotton bomber jacket",
      like: 0,
      count: 0,
      quantity: 200,
    },
    {
      id: 5,
      src1: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1679355050/742855_XDCEY_1168_001_100_0000_Light-Cotton-canvas-and-GG-Supreme-jacket.jpg",
      src2: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1679113912/742855_XDCEY_1168_002_100_0000_Light-Cotton-canvas-and-GG-Supreme-jacket.jpg",
      src3: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1679113914/742855_XDCEY_1168_003_100_0000_Light-Cotton-canvas-and-GG-Supreme-jacket.jpg",
      price: 4785,
      name: "Cotton canvas and GG Supreme jacket",
      like: 0,
      count: 0,
      quantity: 200,
    },
    {
      id: 6,
      src1: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1679113116/742596_XDCEY_1168_001_100_0000_Light-Cotton-canvas-pant-with-GG-inserts.jpg",
      src2: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1679113118/742596_XDCEY_1168_002_100_0000_Light-Cotton-canvas-pant-with-GG-inserts.jpg",
      src3: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1679113121/742596_XDCEY_1168_003_100_0000_Light-Cotton-canvas-pant-with-GG-inserts.jpg",
      price: 2560,
      name: "Cotton canvas pant with GG inserts",
      like: 0,
      count: 0,
      quantity: 200,
    },
    {
      id: 7,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1678211104/729935_XDCE9_4759_001_100_0000_Light-Reversible-denim-jacket.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1678211124/729935_XDCE9_4759_004_100_0000_Light-Reversible-denim-jacket.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1678211120/729935_XDCE9_4759_002_100_0000_Light-Reversible-denim-jacket.jpg",
      price: 7650,
      name: "Reversible denim jacket",
      like: 0,
      count: 0,
      quantity: 200,
    },
    {
      id: 8,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1678299303/737640_XDCFG_4759_001_100_0000_Light-Reversible-denim-shorts.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1678299314/737640_XDCFG_4759_004_100_0000_Light-Reversible-denim-shorts.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1678299308/737640_XDCFG_4759_002_100_0000_Light-Reversible-denim-shorts.jpg",
      price: 3700,
      name: "Reversible denim shorts",
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
                <p> ${product[i].name} Các tác phẩm đặc trưng của Gucci không ngừng phát triển xung quanh một câu chuyện năng động. Dòng hành lý được đặc trưng bởi màu nâu sẫm như một phần của bộ sưu tập Xuân Hè 2023, một sắc thái tinh tế để phản ánh sự xuất hiện của một mùa mới. Họa tiết GG khổng lồ trở lại trên đỉnh chiếc ba lô này, nổi bật với kích thước tối đa để tạo cảm giác logo đặc biệt.</p>
                <ul>
                  <li> ${product[i].name} Sản xuất tại Ý</li>
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
                <button id=${product[i].id} type="button" class="btn btn-primary like">Like </button>
                <button id=${product[i].id}>
                    <p class="buy">Buy</p>
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

localStorage.setItem("dataMX", JSON.stringify(product));

let tbody = document.querySelector("#tbody");

let cart = [];

listProduct.onclick = function (e) {
  //khi thuc hien mua
  if (e.target.classList.contains("buy")) {
    console.log("heloo");
    let buyId = Number(e.target.parentElement.id);
    console.log(buyId);
    for (let i = 0; i < product.length; i++) {
      if (buyId === product[i].id) {
        product[i].count += 1;
        console.log(product[i].count);
        cart.push(product[i]);
        console.log(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
    localStorage.setItem("dataMX", JSON.stringify(product));
    console.log(product);
  }
  // khi thuc hien like
  if (e.target.classList.contains("like")) {
    let likeId = Number(e.target.id);
    // console.log(likeId);
    for (let i = 0; i < product.length; i++) {
      if (likeId === product[i].id) {
        // console.log("like");
        product[i].like += 1;
        // console.log(product[i].like);
      }
    }
    renderLike();
    localStorage.setItem("dataMX", JSON.stringify(product));
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

/**
 * tao ham khi like tang len 1 va them vao offcanvap
 */
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

/**
 * khi nhan Dislike
 */
tbody.onclick = function (e) {
  if (e.target.classList.contains("btn_dislike")) {
    // console.log("btn_dislike");
    let dislikeId = Number(e.target.parentElement.parentElement.id);
    // console.log(dislikeId);
    for (let i = 0; i < product.length; i++) {
      if (dislikeId === product[i].id) {
        product[i].like *= 0;
      }
    }
    renderLike();
  }
};
