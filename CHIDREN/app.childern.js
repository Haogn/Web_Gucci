let product;

// đẩy dữ liệu lên local

let data1 = localStorage.getItem("dataChidren");
if (data1) {
  product = JSON.parse(data1);
} else {
  product = [
    {
      id: 1,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1670022937/575114_XJEZP_9756_001_100_0000_Light-Childrens-cotton-cat-print-T-shirt.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1670022938/575114_XJEZP_9756_002_100_0000_Light-Childrens-cotton-cat-print-T-shirt.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1670022937/575114_XJEZP_9756_001_100_0000_Light-Childrens-cotton-cat-print-T-shirt.jpg",
      price: 295,
      name: "Children's cotton cat print T-shirt",
      like: "",
    },
    {
      id: 2,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1667949404/575114_XJEZQ_7193_001_100_0000_Light-Childrens-cotton-cat-print-T-shirt.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1667949406/575114_XJEZQ_7193_002_100_0000_Light-Childrens-cotton-cat-print-T-shirt.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1667949404/575114_XJEZQ_7193_001_100_0000_Light-Childrens-cotton-cat-print-T-shirt.jpg",
      price: 295,
      name: "Children's cotton cat print T-shirt",
      like: "",
    },
    {
      id: 3,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1673461803/575114_XJEY8_4684_001_100_0000_Light-Childrens-cotton-logo-print-T-shirt.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1673461808/575114_XJEY8_4684_002_100_0000_Light-Childrens-cotton-logo-print-T-shirt.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1673461803/575114_XJEY8_4684_001_100_0000_Light-Childrens-cotton-logo-print-T-shirt.jpg",
      price: 295,
      name: "Children's cotton logo print T-shirt",
      like: "",
    },
    {
      id: 4,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1670022931/575114_XJEZO_9756_001_100_0000_Light-Childrens-cotton-cat-print-T-shirt.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1670022933/575114_XJEZO_9756_002_100_0000_Light-Childrens-cotton-cat-print-T-shirt.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1670022931/575114_XJEZO_9756_001_100_0000_Light-Childrens-cotton-cat-print-T-shirt.jpg",
      price: 295,
      name: "Children's cotton logo print T-shirt",
      like: "",
    },
    {
      id: 5,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1673460072/722404_XJEZW_9756_001_100_0000_Light-Childrens-printed-cotton-sweatshirt.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1673460074/722404_XJEZW_9756_002_100_0000_Light-Childrens-printed-cotton-sweatshirt.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1673460072/722404_XJEZW_9756_001_100_0000_Light-Childrens-printed-cotton-sweatshirt.jpg",
      price: 590,
      name: "Children's printed cotton sweatshirt",
      like: "",
    },
    {
      id: 6,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1667951188/714350_XJEZV_3157_001_100_0000_Light-Childrens-cotton-sweatshirt-with-patch.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1667951190/714350_XJEZV_3157_002_100_0000_Light-Childrens-cotton-sweatshirt-with-patch.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1667951188/714350_XJEZV_3157_001_100_0000_Light-Childrens-cotton-sweatshirt-with-patch.jpg",
      price: 590,
      name: "Children's cotton sweatshirt with patch",
      like: "",
    },
    {
      id: 7,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1654103734/696872_XJEL7_4720_001_100_0000_Light-Childrens-Interlocking-G-sweatshirt.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1654103736/696872_XJEL7_4720_002_100_0000_Light-Childrens-Interlocking-G-sweatshirt.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1654103734/696872_XJEL7_4720_001_100_0000_Light-Childrens-Interlocking-G-sweatshirt.jpg",
      price: 695,
      name: "Children's Interlocking G sweatshirt",

      like: "",
    },
    {
      id: 8,
      src1: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1657146608/692520_XJEIC_4669_001_100_0000_Light-Childrens-cotton-jersey-zip-jacket.jpg",
      src2: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1657146609/692520_XJEIC_4669_002_100_0000_Light-Childrens-cotton-jersey-zip-jacket.jpg",
      src3: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1657146608/692520_XJEIC_4669_001_100_0000_Light-Childrens-cotton-jersey-zip-jacket.jpg",
      price: 735,
      name: "Children's cotton jersey zip jacket",
      like: "",
    },
  ];
}
localStorage.setItem("dataChidren", JSON.stringify(product));
// chuyen du lieu fix cung tu chuoi chuyen thanh mang 

let listProduct = document.querySelector(".item-product");
// console.log(listProduct);

// khởi tạo sản phẩm
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
                  
                </ul>
                </div>
              </div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-primary like">Like </button>
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

// localStorage
