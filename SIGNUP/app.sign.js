let form = document.querySelector("#hoang");
let dataCustomers = localStorage.getItem("listCustomers");
if (dataCustomers) {
  listCustomers = JSON.parse(dataCustomers);
} else {
  listCustomers = [];
}

console.log(form);

form.onsubmit = function (e) {
  if (listCustomers.length > 0) {
    for (let i = 0; i < listCustomers.length; i++) {
      if (
        form.username.value === listCustomers[i].name ||
        form.password.value === listCustomers[i].password
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
      name: form.username.value,
      passWord: form.password.value,
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
