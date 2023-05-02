let form = document.querySelector("#hoang");
let dataCustomers = JSON.parse(localStorage.getItem("listCustomers"));
let login = document.querySelector("#login");
console.log(login);
console.log(form);
console.log(dataCustomers);


login.onclick = function (e) {
  console.log("hello");
  console.log(form.username.value);
  console.log(form.password.value);
  if (dataCustomers.length > 0) {
    for (let i = 0; i < dataCustomers.length; i++) {
      if (
        form.username.value === dataCustomers[i].name &&
        form.password.value === dataCustomers[i].passWord
      ) {
        swal({
            title: "Đăng ký thành công",
            text: "Chúc bạn có trải nghiệm tốt tại Gucci",
            icon: "success",
          });
        login.setAttribute("href", "../HOME/index.html");
      } else if (form.username.value === "" || form.password.value === "") {
        e.preventDefault();
        swal({
            title: "Đăng kí thất bại !!!",
            text: "Vui lòng nhập đầy đủ thông tin",
            icon: "warning",
          });
    //  alert("đăng nhập thất bại, vui lòng nhập đầy đủ thông tin")
      } else if ( form.username.value != dataCustomers[i].name && form.password.value === dataCustomers[i].passWord ) {
        // alert("đăng nhập thất bại, bạn đã nhập sai tên ")
        swal({
            title: "Đăng kí thất bại !!!",
            text: "Vui lòng nhập lại tên",
            icon: "warning",
          });
      } else if ( form.username.value === dataCustomers[i].name && form.password.value != dataCustomers[i].passWord) {
        // alert("đăng nhập thất bại, bạn đã nhập sai password ")
        swal({
            title: "Đăng kí thất bại !!!",
            text: "Vui lòng nhập lại password ",
            icon: "warning",
          });
      }
    }
  }
};
