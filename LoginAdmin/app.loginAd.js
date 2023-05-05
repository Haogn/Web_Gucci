let formAD = document.querySelector("form");
console.log(formAD);
let men = "admin@gmail.com";
let mkMen = "Abcd@2023";


formAD.onsubmit = function (e) {
  // e.preventDefault(); 
  if (formAD.tk.value === men && formAD.value === mkMen) {
    formAD.setAttribute("action", "../ADMIN/index.html");
  } else if (form.tk.value !== tk || form.pass.value !== mk) {
    e.preventDefault();
    alert("Bạn đã Nhập mật khẩu hoặc tài khoản sai");
  } else if (formAD.tk.value === "" || formAD.pass.value === "") {
    e.preventDefault();
    alert("Xin mời bạn nhập vào tài khoản");
  } else {
    e.preventDefault();
  }
};