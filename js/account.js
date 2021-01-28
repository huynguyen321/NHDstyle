// hien thi phan dang nhap
function callFormSignIn() {
    var html = `
    <!-- Modal Sign In HTML -->
    <style>

</style>
    <div id="loginModal" class="modal fade" style="color: black">
        <div class="modal-dialog modal-login">
        <div class="modal-content">
            <div class="modal-header" style="color: black">				
                <h4 class="modal-title">Đăng nhập</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>

            <div class="modal-body">
                <p>Để đăng nhập vui lòng nhập email và mật khẩu:</p>
                <div class="login-form">
                <div class="form-group">
                    <label for="form-username">Email</label></br>
                    <input type="text" name="form-username" placeholder="Email..." class="form-username form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="form-password">Mật khẩu</label></br>
                    <input type="password" name="form-password" placeholder="Mật khẩu..." class="form-password form-control" id="password">
                </div>
                <button type="submit" class="btn btn-primary" onclick="signIn()">Đăng nhập</button>
            </div>
            <div class="modal-footer" style="color: black" >Nếu bạn chưa có tài khoản, hãy <a href="#" data-dismiss="modal" aria-hidden="true" onclick="callFormSignUp()" data-toggle="modal" data-target="#signUpModal">&nbsp Đăng ký</a></div>
        </div>

    </div>
        </div>
    </div>  
`;

    document.getElementById("form-sign-in").innerHTML = html;
}

// hien thi phan dang ky

function callFormSignUp() {
    var html = `
    <!-- Modal Sign Up HTML -->
    <div id="signUpModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header" style="color: black">				
                <h4 class="modal-title">Đăng ký</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
           
        <div class="modal-body">
        <div class="login-form">
        <div class="form-group" style="color: black">
        <p>Để đăng kí vui lòng thực hiện như sau:<br/>
            <i>- Nhập đúng email của bạn theo: ...@gmail.com</i><br/>
            <i>- Nhập đúng số điện thoại</i><br/>
            <i>- Xác thực mật khẩu và mật khẩu với 6-10 kí tự, ít nhất 1 số, chữ hoa, và chữ thường.</i><br/>
        </p>
    </div>
        
            <div class="login-form">
                <div class="form-group">
                    <label class="sr-only">Email</label>
                    <input type="text" placeholder="email@gmail.com" class="form-email form-control" id="emails">
                </div>
                <div class="form-group">
                    <label class="sr-only" for="form-username">Tên tài khoản</label>
                    <input type="text" name="form-username" placeholder="ngacute123" class="form-username form-control" id="username">
                </div>
                <div class="form-group">
                    <label class="sr-only" for="form-name">Họ và tên</label>
                    <input type="text" name="form-name" placeholder="Nguyễn Thị Thanh Nga" class="form-name form-control" id="name">
                </div>
                <div class="form-group">
                    <label class="sr-only" for="form-phone">Số điện thoại</label>
                    <input type="text" name="form-phone" placeholder="0912345678" class="form-phone form-control" id="phone">
                </div>
                <div class="form-group">
                    <label class="sr-only" for="form-address">Địa chỉ liên hệ</label>
                    <input type="text" name="form-address" placeholder="101B Lê Hữu Trác" class="form-address form-control" id="address">
                </div>
                <div class="form-group">
                    <label class="sr-only" for="form-password">Mật khẩu</label>
                    <input type="password" name="form-password" placeholder="******" class="form-password form-control" id="passwords">
                </div>
                <div class="form-group">
                    <label class="sr-only" for="form-confirm">Mật khẩu</label>
                    <input type="password" name="form-confirm" placeholder="******" class="form-confirm form-control" id="confirm">
                </div>
                <button type="submit" class="btn btn-primary" onclick="signUp()">Đăng kí</button>
            </div>
        </div>


                <div class="modal-footer" style="color: black" >Nếu bạn đã có tài khoản, hãy <a href="#" data-dismiss="modal" aria-hidden="true" onclick="callFormSignIn()" data-toggle="modal" data-target="#loginModal">&nbsp Đăng nhập</a></div>
            </div>
        </div>
    </div>  
    `;
    document.getElementById("form-sign-up").innerHTML = html;
}

// set data
var user = [{
        id: 1,
        username: "admin",
        name: "Admin",
        phone: "123456778",
        email: "admin@gmail.com",
        password: "1",
        address: "BD",
        role: "admin",
    },
    {
        id: 2,
        username: "user",
        name: "User",
        phone: "123456778",
        email: "user@gmail.com",
        password: "1",
        address: "BD",
        role: "user",
    },
];
var saveUser = function() {
    localStorage.setItem("listUser", JSON.stringify(user));
};
var loadUser = function() {
    user = JSON.parse(localStorage.getItem("listUser"));
};
if (localStorage.getItem("listUser") != null) {
    loadUser();
}
saveUser();

// sign in
var signIn = function() {
    var k = -1;
    for (var i in user) {
        var data = JSON.parse(JSON.stringify(user[i]));
        if (
            document.getElementById("email").value == data.email &&
            document.getElementById("password").value == data.password &&
            data.role == "admin"
        ) {
            k = 1;
            console.log(data);

            $('#signInModal').modal('hide');
            //hide the modal
            alert("Đăng nhập thành công");
            // Script for account
            localStorage.setItem("signin", JSON.stringify(data));

            document.getElementById("control-accout").innerHTML = `
                <button>
                    <i class="fas fa-clipboard-list fa-fw "></i>Theo dõi đơn hàng
                </button>
                <button onclick="logout()">
                    <i class=" fa fa-user fa-fw" aria-hidden="true"></i>Đăng xuất
                </button>`;
        }
        if (
            document.getElementById("email").value == data.email &&
            document.getElementById("password").value == data.password &&
            data.role == "user"
        ) {
            k = 1;
            localStorage.setItem("signin", JSON.stringify(data));
            alert("Đăng nhập thành công");
            // Script for account
            document.getElementById("control-accout").innerHTML = `
<button>
    <i class="fas fa-clipboard-list fa-fw "></i>Theo dõi đơn hàng
    </button>
    <button onclick="logout()">
    <i class=" fa fa-user fa-fw" aria-hidden="true"></i>Đăng xuất
    </button>
</button>`;
        }
    }
    if (k == -1) {
        alert("Đăng nhập không thành công.");
    }
};
var checkEmail = function(email) {
    let k = -1;
    for (let i in user) {
        var data = JSON.parse(JSON.stringify(user[i]));
        if (email === data.email) {
            k = 1;
        } else {
            k = -1;
        }
    }
    if (k == 1) {
        return true;
    } else {
        return false;
    }
};
//sign up
var signUp = function() {
    let email = document.getElementById("emails").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("passwords").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let confirm = document.getElementById("confirm").value;
    //console.log(email + username + name + phone + address + password + confirm);
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email && name && password && address && phone && confirm) {
        if (!re.test(email) || checkEmail(email)) {
            alert("Email không hợp lệ hoặc đã tồn tại.");
            return false;
        } else {
            if (!isValidPhone(phone)) {
                alert("Số điện thoại không hợp lệ");
                return false;
            } else {
                if (CheckPassword(password)) {
                    if (password == confirm) {
                        var User = {
                            id: parseInt(user.length + 1),
                            name: name,
                            email: email,
                            password: password,
                            address: address,
                            phone: phone,
                            role: "user",
                        };
                        alert("Đăng kí thành công.");
                        user.push(User);
                        localStorage.setItem("listUser", JSON.stringify(user));
                    } else {
                        alert("Vui lòng xác thực mật khẩu");
                    }
                }
            }
        }
    } else {
        alert("Vui lòng nhập đầy đủ thông tin");
    }
};
// check phone
var isValidPhone = function(phoneNumber) {
    var found = phoneNumber.search(
        /^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/
    );
    if (found > -1) {
        return true;
    } else {
        return false;
    }
};
// kiem tra mat khau co dung dieu kien k
var CheckPassword = function(inputtxt) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
    if (passw.test(inputtxt)) {
        return true;
    } else {
        alert(
            "Vui lòng nhập từ 6-10 kí tự và có ít nhất số, chữ thường và chữ hoa."
        );
        return false;
    }
};

// dang xuat
var logout = function() {
    localStorage.setItem("signin", null);
    window.location.href = "../home/index.html";
};