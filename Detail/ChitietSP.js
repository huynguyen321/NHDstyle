var product = [{
        id: "SP1",
        name: "Vay caro co U nut boc 15519",
        img: "https://fmstyle.com.vn/images/anhnho/787980_643932123__MG_1933ab.jpg",
        price: 205000
    },
    {
        id: "SP2",
        name: "Vay yem xoe phoi luoi than tre",
        img: "https://fmstyle.com.vn/images/anhnho/786970_29573192__MG_2009.jpg",
        price: 205000
    },
    {
        id: "SP3",
        name: "Vay co V nhun duoi ca VU1511A",
        img: "https://fmstyle.com.vn/images/anhnho/787290_1787551762__MG_1962.jpg",
        price: 205000
    },
    {
        id: "SP4",
        name: "Vay hoa TD bo nhum eo don gian",
        img: "https://fmstyle.com.vn/images/anhnho/771117_715395795__MG_1379.jpg",
        price: 205000
    },
];

function save() {
    localStorage.setItem('listProduct', JSON.stringify(product));
}

function load() {
    product = JSON.parse(localStorage.getItem('listProduct'));
}

if (localStorage.getItem('listProduct') != null) {
    load();
}

var listLocal = function() {
    var listproduct = "";
    for (var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]));
        listproduct = '<div class="col-lg-3 col-md-6 col-6 mt-3">';
        listproduct += '<div class="card product p-2" style="width:auto">';
        listproduct += '<img class="card-img-top" src="' + data.img + '">';
        listproduct += '<div class="card-title product-title text-center h5">' + data.name + '</div>';
        listproduct += '<div class="price text-center h6">' + data.price + 'VND</div>';
        listproduct += '<div class="star_box float-left pt-2">';

        listproduct += '<span class="text-center add-to-cart btn btn-outline-warning add-cart float-left col-5" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '" onclick="tks()">';
        listproduct += '<a>';
        listproduct += '<i class="fas fa-cart-plus"></i>';
        listproduct += '</a>';
        listproduct += '</span>';


        listproduct += '<button class="btn btn-primary float-right col-5" data-toggle="modal" data-target="#exampleModalLong" onclick="getProductById(' + i + ')">';
        listproduct += '<i class="fas fa-info"></i>Chi tiết';
        listproduct += '</button>';

        listproduct += `
        <div class="modal fade mt-5 text-center" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-center">
        <div class="modal-content">
        <div class="modal-body">
        <div id="prinf_product">
        </div>
        </div>
        </div>
        </div>
        </div>`;

        listproduct += '</div>';
        listproduct += '</div>';
        listproduct += '</div>';

        document.getElementById("banchay").innerHTML += listproduct;
    }
    save();
}
listLocal();

function getProductById(id) {
    console.log(id);
    let html = "";
    let allProduct = JSON.parse(localStorage.getItem('listProduct'));
    let a = allProduct[id];
    html = `
        <img src = "${a.img}">
        <br> ${a.name}
        <br> 
        <b>Giá:${a.price }đ </b>
        <br>
        <a class = "btn btn-outline-info btn-detail" onclick = "checkorder(` + a.id + `)" >Mua</a>
            `;
    document.getElementById("prinf_product").innerHTML = html;
}