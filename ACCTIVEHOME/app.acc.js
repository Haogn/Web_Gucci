let nameCustom = JSON.parse(localStorage.getItem("listCustomers"));
console.log(nameCustom);

let account = document.querySelector("#account");

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
