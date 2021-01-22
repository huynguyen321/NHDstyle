var customerAdmin = function() {
    var listCustomer = "";
    for (var i in customer) {
        var data = JSON.parse(JSON.stringify(customer[i]));
        listCustomer = `
        <tr>
        <tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.phone}</td>
        <td>${data.address}</td>
        <td> <button onclick="updateCustomer(${i})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateCustomer">     <i class="fas fa-cogs"> </i></button>
            <button onclick="deleteCustomer(${i})" class="btn btn-out-warning"> <i class="fas fa-trash"> </i></button>
        </td>    
        </tr>
        `;
        document.getElementById("customer_admin").innerHTML += listCustomer;
    }
};



var addCustomer = function() {
    var cus = {
        id: "KH" + parseInt(customer.length + 1),
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value
    };
    customer.push(cus);
    localStorage.setItem("listCustomer", JSON.stringify(customer));
    // save();
    window.location.reload();
}

var updateCustomer = function(i) {
    var k = customer[i];
    document.getElementById("idd").value = k.id;
    document.getElementById("named").value = k.name;
    document.getElementById("emaild").value = k.email;
    document.getElementById("phoned").value = k.phone;
    document.getElementById("addressd").value = k.address;
    document.getElementById("summitUpdate").innerHTML =
        '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate(' + i + ')">Update</button>';
}

var submitUpdate = function(i) {
    var k = customer[i];
    k.id = document.getElementById("idd").value;
    k.name = document.getElementById("named").value;
    k.email = document.getElementById("emaild").value;
    k.phone = document.getElementById("phoned").value;
    k.address = document.getElementById("addressd").value;
    localStorage.setItem("listCustomer", JSON.stringify(customer));
    window.location.reload();
}

var deleteCustomer = function(i) {
    customer.splice(i, 1);
    localStorage.setItem("listCustomer", JSON.stringify(customer));
    window.location.reload();
}

function save() {
    localStorage.setItem('listCustomer', JSON.stringify(customer));
}

var customer = [{
        id: "KH1",
        name: "Nguyen Van A",
        email: "nguyenvana@gmail.com",
        phone: 0123456,
        address: "Sơn Trà, Đà Nẵng"
    },
    {
        id: "KH2",
        name: "Nguyen Van B",
        email: "nguyenvanb@gmail.com",
        phone: 0123457,
        address: "Sơn Trà, Đà Nẵng"
    },
    {
        id: "KH3",
        name: "Nguyen Van C",
        email: "nguyenvanc@gmail.com",
        phone: 0123455,
        address: "Sơn Trà, Đà Nẵng"
    },
    {
        id: "KH4",
        name: "Nguyen Van D",
        email: "nguyenvand@gmail.com",
        phone: 0123455,
        address: "Sơn Trà, Đà Nẵng"
    }
];

function load() {
    customer = JSON.parse(localStorage.getItem('listCustomer'));
    customerAdmin();
}

if (localStorage.getItem('listCustomer') != null) {
    load();
}