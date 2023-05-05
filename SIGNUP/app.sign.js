let form = document.querySelector("#hoang");
let dataCustomers = localStorage.getItem("listCustomers");
if (dataCustomers) {
  listCustomers = JSON.parse(dataCustomers);
} else {
  listCustomers = [];
}

console.log(form);
let regName = /^[a-zA-Z\-]+$/;
let regGmail= / \b [ AZ 0-9 ._%+ - ] + @ [ AZ 0 -9 . - ] + \. [ AZ ] {2,} \b/

function tPass(str) {
  let newArr = str.split("");
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === " ") {
      return false;
    }
  }
  return true;
}

form.onsubmit = function (e) {
  if (listCustomers.length > 0) {
    for (let i = 0; i < listCustomers.length; i++) {
      if (
        form.username.value === listCustomers[i].name ||
        form.password.value === listCustomers[i].password ||
        form.email.value === listCustomers[i].email
      ) {
        e.preventDefault();
        swal({
          title: "Đăng kí thất bại !!!",
          text: "Tài khoản này đã tồn tại",
          icon: "warning",
        });
      }
    }
  }
  if (
    regName.test(form.username.value) &&
    tPass(form.password.value) &&
    form.password.value === form.password2.value &&
    form.password.value != "" &&
    form.password2.value != ""
  ) {
    swal({
      title: "Đăng ký thành công",
      text: "Chúc bạn có trải nghiệm tốt tại Gucci",
      icon: "success",
    });
    let newUser = {
      id : listCustomers.length + 1 ,
      name: form.username.value,
      passWord: form.password.value,
      email: form.email.value,
      cartCustomers: [],
      historys: [], 
      status: false,
    };
    listCustomers.push(newUser);
    console.log(newUser);
    localStorage.setItem("listCustomers", JSON.stringify(listCustomers));
    form.setAttribute("action", "../LOGIN/index.html");
  } else if (
    form.username.value === "" ||
    form.password.value === "" ||
    form.password2.value === ""
  ) {
    e.preventDefault();
    swal({
      title: "Đăng kí thất bại !!!",
      text: "Bạn chưa nhập đẩy đủ thông tin",
      icon: "warning",
    });
    // alert("dang ky that bai");
  }
};
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
  if (nameCustom[i].status === true) {
    account.innerHTML = `<a href="../HISTORY/index.html"><i class="fa-solid fa-user"></i> ${nameCustom[i].name}</a>`;
    console.log(account.innerHTML);
  }
}
