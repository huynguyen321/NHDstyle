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
    },
];

function save() {
    localStorage.setItem('listCustomer', JSON.stringify(customer));
}

function load() {
    customer = JSON.parse(localStorage.getItem('listCustomer'));
}

if (localStorage.getItem('listCustomer') != null) {
    load();
}

var listLocal = function() {
    var listcustomer = "";
    for (var i in customer) {
        var data = JSON.parse(JSON.stringify(customer[i]));
        listcustomer = '<div class="col-lg-3 col-md-6 col-6 mt-3">';
        listcustomer += '<div class="card customer p-2" style="width:auto">';
        // listcustomer += '<img class="card-img-top" src="' + data.img + '">';
        listcustomer += '<div class="card-title customer-title text-center h5">' + data.name + '</div>';
        listcustomer += '<div class="card-title customer-title text-center h5">' + data.email + '</div>';
        listcustomer += '<div class="card-title customer-title text-center h5">' + data.phone + '</div>';
        listcustomer += '<div class="card-title customer-title text-center h5">' + data.address + '</div>';

        listcustomer += '<div class="star_box float-left pt-2">';

        listcustomer += '<span class="text-center add-to-cart btn btn-outline-warning add-cart float-left col-5" data-id="' + data.id + '" data-name="' + data.name + '" data-email="' + data.email + '" data-phone="' + data.phone + ' "data-address="' + data.address + '" onclick="tks()">';
        listcustomer += '<a>';
        listcustomer += '<i class="fas fa-cart-plus"></i>';
        listcustomer += '</a>';
        listcustomer += '</span>';


        listcustomer += '<button class="btn btn-primary float-right col-5" data-toggle="modal" data-target="#exampleModalLong" onclick="getCustomerById(' + i + ')">';
        listcustomer += '<i class="fas fa-info"></i>Chi tiết';
        listcustomer += '</button>';

        listcustomer += `
    <div class="modal fade mt-5 text-center" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-center">
    <div class="modal-content">
    <div class="modal-body">
    <div id="prinf_customer">
    </div>
    </div>
    </div>
    </div>
    </div>`;

        listcustomer += '</div>';
        listcustomer += '</div>';
        listcustomer += '</div>';

        document.getElementById("banchay").innerHTML += listcustomer;
    }
    save();
}
listLocal();

function getCustomerById(id) {
    console.log(id);
    let html = "";
    let allCustomer = JSON.parse(localStorage.getItem('listCustomer'));
    let a = allCustomer[id];
    html = `
    <br>Name:${a.name}
    <br>
    <br>Email:${a.email}
    <br>
    <br>Phone: ${a.phone}
    <br> 
    <br>Address:${a.address}
    <br>
    <a class = "btn btn-outline-info btn-detail" onclick = "checkorder(` + a.id + `)" >OK</a>
        `;
    document.getElementById("prinf_customer").innerHTML = html;
}