let product;

let data2 = localStorage.getItem("dataMen");
if (data2) {
  product = JSON.parse(data2);
} else {
  product = [
    {
      id: 1,
      src1: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1676054703/625770_AABZF_2845_001_100_0000_Light-Jumbo-GG-backpack.jpg   ",
      src2: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1676054706/625770_AABZF_2845_002_100_0000_Light-Jumbo-GG-backpack.jpg",
      src3: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1677197728/625770_AABZF_2845_003_100_0000_Light-Jumbo-GG-backpack.jpg",
      price: 5015,
      name: "Jumbo GG backpack",
      color: "taupe leather",
      like: 0,
      count: 0,
      quantity: 200,
    },
    {
      id: 2,
      src1: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1677520804/625770_AABZF_7588_001_100_0000_Light-Jumbo-GG-backpack.jpg",
      src2: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1677520806/625770_AABZF_7588_002_100_0000_Light-Jumbo-GG-backpack.jpg",
      src3: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1677626125/625770_AABZF_7588_003_100_0000_Light-Jumbo-GG-backpack.jpg",
      price: 5015,
      name: "Jumbo GG backpack",
      color: "orange leather",
      like: 0,
      count: 0,
      quantity: 200,
    },
    {
      id: 3,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1664559020/598140_HUHAT_8564_001_100_0000_Light-Ophidia-GG-medium-backpack.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1664559024/598140_HUHAT_8564_002_100_0000_Light-Ophidia-GG-medium-backpack.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1681424191/598140_HUHAT_8564_003_100_0000_Light-Ophidia-GG-medium-backpack.jpg",
      price: 3240,
      name: "Ophidia GG medium backpack",
      color: "GG Superme",
      like: 0,
      count: 0,
      quantity: 200,
    },
    {
      id: 4,
      src1: "https://media.gucci.com/style/HEXE6E3D6_Center_0_0_800x800/1645729219/598140_HUHAN_4079_001_100_0026_Light-Ophidia-GG-medium-backpack.jpg",
      src2: "https://media.gucci.com/style/HEXE6E3D6_Center_0_0_800x800/1645729221/598140_HUHAN_4079_002_100_0026_Light-Ophidia-GG-medium-backpack.jpg",
      src3: "https://media.gucci.com/style/HEXE6E3D6_Center_0_0_800x800/1651702596/598140_HUHAN_4079_003_100_0000_Light-Ophidia-GG-medium-backpack.jpg",
      price: 3240,
      name: "Ophidia GG medium backpack",
      color: "heige and blue",
      like: 0,
      count: 0,
      quantity: 200,
    },
    {
      id: 5,
      src1: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1664820053/696010_FAA5B_9841_009_067_0000_Light-GG-rhombus-print-mini-tote-bag.jpg",
      src2: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1664820051/696010_FAA5B_9841_002_067_0000_Light-GG-rhombus-print-mini-tote-bag.jpg",
      src3: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1674256640/696010_FAA5B_9841_003_100_0000_Light-GG-rhombus-print-mini-tote-bag.jpg",
      price: 2315,
      name: "GG rhombus print mini tote bag",
      color: "pink and beige",
      like: 0,
      count: 0,
      quantity: 200,
    },
    {
      id: 6,
      src1: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1666025139/696010_AABDQ_5148_009_067_0000_Light-GG-embossed-mini-tote-bag.jpg",
      src2: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1676487604/696010_AABDQ_5148_006_100_0000_Light-GG-embossed-mini-tote-bag.jpg",
      src3: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1674240304/696010_AABDQ_5148_003_100_0000_Light-GG-embossed-mini-tote-bag.jpg",
      price: 2975,
      name: "GG embossed mini tote bag",
      color: "purple and orange",
      like: 0,
      count: 0,
      quantity: 200,
    },
    {
      id: 7,
      src1: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1666172742/725292_AABDQ_5745_001_082_0000_Light-GG-embossed-mini-duffle-bag.jpg",
      src2: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1666172744/725292_AABDQ_5745_002_082_0000_Light-GG-embossed-mini-duffle-bag.jpg",
      src3: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1675190735/725292_AABDQ_5745_003_100_0000_Light-GG-embossed-mini-duffle-bag.jpg",
      price: 3685,
      name: "GG embossed mini duffle bag",
      color: "fuchsia and blue",
      like: 0,
      count: 0,
      quantity: 200,
    },
    {
      id: 8,
      src1: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1665678674/725679_FAAYC_9845_009_100_0000_Light-GG-rhombus-print-mini-bag.jpg",
      src2: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1665678672/725679_FAAYC_9845_002_100_0000_Light-GG-rhombus-print-mini-bag.jpg",
      src3: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1670030162/725679_FAAYC_9845_003_100_0000_Light-GG-rhombus-print-mini-bag.jpg",
      price: 1620,
      name: "GG rhombus print mini bag",
      color: "available",
      like: 0,
      count: 0,
      quantity: 200,
    },
  ];
}
localStorage.setItem("dataMen", JSON.stringify(product));

let listProduct = document.querySelector(".item-product");

let tbody = document.querySelector("#tbody");

let dataMenlocal = JSON.parse(localStorage.getItem("dataMen"));

let cart = [];

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
  if ( event.target.classList.contains("buy")) {
    let buyId = Number(event.target.parentElement.id) ;
    console.log(buyId);
    for ( let i = 0 ; i < product.length ; i++) {
      if(buyId === product[i].id) {
        product[i].count += 1 ; 
        console.log(product[i].count);
        cart.push(product[i]);
        console.log("cart",cart);
        localStorage.setItem("cart", JSON.stringify(cart))
      }
    }
    localStorage.setItem("dataMen", JSON.stringify(product));
    console.log("product",product);
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
    localStorage.setItem("dataMen", JSON.stringify(product));
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

