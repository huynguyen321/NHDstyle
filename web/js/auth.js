var user = [{
        id: 1,
        username: "admin",
        name: 'Admin',
        phone: '123456778',
        email: "admin@gmail.com",
        password: "1",
        address: "BD",
        role: "admin",
    },
    {
        id: 2,
        username: "user",
        name: 'User',
        phone: '123456778',
        email: "user@gmail.com",
        password: "1",
        address: "BD",
        role: "user",
    },

];
var saveUser = function() {
    localStorage.setItem("listUser", JSON.stringify(user))
}
var loadUser = function() {
    user = JSON.parse(localStorage.getItem("listUser"))
}
if (localStorage.getItem("listUser") != null) {
    loadUser();
}
saveUser();

var signInArr = [];
var saveLogin = function() {
    localStorage.setItem("signin", JSON.stringify(signInArr))
}
var loadLogin = function() {
    signInArr = JSON.parse(localStorage.getItem("signin"))
}
if (localStorage.getItem("signin" != null)) {
    loadLogin();
}
saveLogin();
var signIn = function() {
    var k = -1;
    for (var i in user) {
        var data = JSON.parse(JSON.stringify(user[i]))
        if (
            (document.getElementById("email").value == data.email) &&
            (document.getElementById("password").value == data.password) &&
            (data.role == "admin")
        ) {
            k = 1;
            alert("Đăng nhập thành công");
            window.location.href = "../admin/index.html";
        }
        if (
            (document.getElementById("email").value == data.email) &&
            (document.getElementById("password").value == data.password) &&
            (data.role == "user")
        ) {
            k = 1;
            alert("Đăng nhập thành công");
            window.location.href = "../user/home.html";
            var userLogin = {
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
            }
            signInArr.push(userLogin);
            localStorage.setItem('signin', JSON.stringify(signInArr));
            saveLogin();
        }
    }
    if (k == -1) {
        alert("Đăng nhập không thành công.");
    }
}

var signUp = function() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let confirm = document.getElementById("confirm").value;
    if (username && email && name && password && address && phone && confirm) {
        if (password == confirm) {
            var User = {
                id: parseInt(user.length + 1),
                username: username,
                name: name,
                email: email,
                password: password,
                address: address,
                phone: phone,
                role: "user",
            }
            alert("Đăng kí thành công.");
            user.push(User);
            localStorage.setItem("listUser", JSON.stringify(user));
            window.location.href = "./signIn.html";
        } else {
            alert("Vui lòng xác thực mật khẩu");
        }
    } else {
        alert("Vui lòng nhập đầy đủ thông tin");
    }


}