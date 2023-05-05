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
        form.password.value === dataCustomers[i].passWord &&
        form.email.value === dataCustomers[i].email
      ) {
       dataCustomers[i].status = true;
       console.log(dataCustomers[i].status);
        swal({
          title: "Đăng nhập thành công",
          text: "Chúc bạn có trải nghiệm tốt tại Gucci",
          icon: "success",
        });
        login.setAttribute("href", "../ACCTIVEHOME/index.html");
      } else if (form.username.value === "" || form.password.value === "" || form.email.value ==="") {
        e.preventDefault();
        swal({
          title: "Đăng nhập thất bại !!!",
          text: "Vui lòng nhập đầy đủ thông tin",
          icon: "warning",
        });
        //  alert("đăng nhập thất bại, vui lòng nhập đầy đủ thông tin")
      } else if (
        form.username.value != dataCustomers[i].name &&
        form.password.value === dataCustomers[i].passWord
      ) {
        // alert("đăng nhập thất bại, bạn đã nhập sai tên ")
        swal({
          title: "Đăng nhập thất bại !!!",
          text: "Vui lòng nhập lại tên",
          icon: "warning",
        });
      } else if (
        form.username.value === dataCustomers[i].name &&
        form.password.value != dataCustomers[i].passWord
      ) {
        // alert("đăng nhập thất bại, bạn đã nhập sai password ")
        swal({
          title: "Đăng nhập thất bại !!!",
          text: "Vui lòng nhập lại password ",
          icon: "warning",
        });
      }
      localStorage.setItem("listCustomers", JSON.stringify(dataCustomers));

    }
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
    if ( nameCustom[i].status === true ) {
        account.innerHTML = `<a href="../HISTORY/index.html"><i class="fa-solid fa-user"></i> ${nameCustom[i].name}</a>`;
        console.log(account.innerHTML);
    }
}
