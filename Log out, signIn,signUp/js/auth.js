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
            window.location.href = "../admin/index.html";
            alert("Đăng nhập thành công");

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
    let email = document.getElementById("emails").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("passwords").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let confirm = document.getElementById("confirm").value;
    console.log(email + username + name + phone + address + password + confirm);
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (username && email && name && password && address && phone && confirm) {
        if (!(re.test(email))) {
            alert("Email không hợp lệ.")
            return false;
        } else {
            CheckPassword(password);
            if (!isValidPhone(phone)) {
                alert("Số điện thoại không hợp lệ");
                return false;
            } else {
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
                } else {
                    alert("Vui lòng xác thực mật khẩu");
                }
            }
        }
    } else {
        alert("Vui lòng nhập đầy đủ thông tin");
    }
}
var isValidPhone = function(phoneNumber) {
    var found = phoneNumber.search(/^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/);
    if (found > -1) {
        return true;
    } else {
        return false;
    }
}
var CheckPassword = function(inputtxt) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
    if (passw.test(inputtxt)) {
        return true;
    } else {
        alert('Vui lòng nhập từ 6-10 kí tự và có ít nhất số, chữ thường và chữ hoa.')
        return false;
    }
}
var isShow = false;
var logout = function() {
    localStorage.setItem("signin", null);
    window.location.href = "../auth/index.html";
}