let product;
let data3 = localStorage.getItem("dataWomen");
if (data3) {
  product = JSON.parse(data3);
} else {
  product = [
    {
      id: 1,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1676589460/726274_AAA9F_7519_001_083_0000_Light-Aphrodite-medium-shoulder-bag.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1676589462/726274_AAA9F_7519_002_083_0000_Light-Aphrodite-medium-shoulder-bag.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1679700608/726274_AAA9F_7519_003_100_0000_Light-Aphrodite-medium-shoulder-bag.jpg",
      price: 2960,
      name: "Aphrodite medium shoulder bag",
      color: "orange leather",
      like: "",
    },
    {
      id: 2,
      src1: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1664210798/726274_AAA9F_1000_007_083_0000_Light-Aphrodite-medium-shoulder-bag.jpg",
      src2: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1664210797/726274_AAA9F_1000_002_083_0000_Light-Aphrodite-medium-shoulder-bag.jpg",
      src3: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1677800718/726274_AAA9F_1000_006_100_0000_Light-Aphrodite-medium-shoulder-bag.jpg",
      price: 2960,
      name: "Aphrodite medium shoulder bag",
      color: "black leather",
      like: "",
    },
    {
      id: 3,
      src1: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1663260381/726274_AAA9F_3727_007_083_0000_Light-Aphrodite-medium-shoulder-bag.jpg",
      src2: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1674085610/726274_AAA9F_3727_006_100_0000_Light-Aphrodite-medium-shoulder-bag.jpg",
      src3: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1670284882/726274_AAA9F_3727_003_100_0000_Light-Aphrodite-medium-shoulder-bag.jpg",
      price: 2960,
      name: "Aphrodite medium shoulder bag",
      color: "green leather",
      like: "",
    },
    {
      id: 4,
      src1: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1663343139/726274_AAA9F_5815_007_083_0000_Light-Aphrodite-medium-shoulder-bag.jpg",
      src2: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1674085611/726274_AAA9F_5815_006_100_0000_Light-Aphrodite-medium-shoulder-bag.jpg",
      src3: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1674500435/726274_AAA9F_5815_004_100_0000_Light-Aphrodite-medium-shoulder-bag.jpg",
      price: 2960,
      name: "Aphrodite medium shoulder bag",
      color: "pink leather",
      like: "",
    },
    {
      id: 5,
      src1: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1658768487/702823_96GRN_4091_001_073_0000_Light-Gucci-Attache-large-shoulder-bag.jpg",
      src2: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1658768491/702823_96GRN_4091_002_073_0000_Light-Gucci-Attache-large-shoulder-bag.jpg",
      src3: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1654622110/702823_96GRN_4091_003_100_0000_Light-Gucci-Attache-large-shoulder-bag.jpg",
      price: 3860,
      name: "Gucci Attache large shoulder bag",
      color: "beige and ebony",
      like: "",
    },
    {
      id: 6,
      src1: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1658164589/702823_96GRN_4082_001_074_0000_Light-Gucci-Attache-large-shoulder-bag.jpg",
      src2: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1658164590/702823_96GRN_4082_002_074_0000_Light-Gucci-Attache-large-shoulder-bag.jpg",
      src3: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1654622109/702823_96GRN_4082_004_100_0000_Light-Gucci-Attache-large-shoulder-bag.jpg",
      price: 3860,
      name: "Gucci Attache large shoulder bag",
      color: "beige and blue",
      like: "",
    },
    {
      id: 7,
      src1: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1675184547/739730_K9GSG_8358_001_100_0000_Light-Ophidia-medium-tote-bag.jpg",
      src2: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1675184549/739730_K9GSG_8358_002_100_0000_Light-Ophidia-medium-tote-bag.jpg",
      src3: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1677540695/739730_K9GSG_8358_003_100_0000_Light-Ophidia-medium-tote-bag.jpg",
      price: 2165,
      name: "Ophidia medium tote bag",
      color: "beige and gray",
      like: "",
    },
    {
      id: 8,
      src1: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1675363541/739684_DAAAH_2754_001_100_0000_Light-GG-Marmont-large-tote-bag.jpg",
      src2: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1675363544/739684_DAAAH_2754_002_100_0000_Light-GG-Marmont-large-tote-bag.jpg",
      src3: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1677200407/739684_DAAAH_2754_003_100_0000_Light-GG-Marmont-large-tote-bag.jpg",
      price: 3220,
      name: "GG Marmont large tote bag",
      color: "rose beige leather",
      like: "",
    },
  ];
}

// localStorage.setItem("dataWomen", JSON.stringify(product));
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
                <p> ${product[i].name} đặc trưng cho dòng Gucci Blondie bắt nguồn từ kho lưu trữ của House. Những món đồ đặc trưng như chiếc túi đeo vai và đeo chéo Gucci Blondie này tái hiện biểu tượng như một chi tiết vá da tinh tế hơn.</p>
                <ul>
                  <li> ${product[i].color} Sản xuất tại Ý</li>
                  <li>Vải lanh lót bông</li>
                  <li>Miếng dán da Round Interlocking G</li>
                  <li>Dây đeo vai có thể điều chỉnh với độ rơi 20,5"</li>
                  <li>Khóa kéo đôi với Round Interlocking G</li>
                  <li>Kích thước lớn: 15,1"W x 11,4"H x 5,5"D</li>
                </ul>
                </div>
              </div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-primary like">Like</button>
                <button>
                    <p>Subscribe</p>
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
