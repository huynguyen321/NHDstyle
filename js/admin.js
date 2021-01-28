const API_URL = "http://localhost:3000";

// axios.get("https://600e48f73bb1d100179ded83.mockapi.io/api/product")
//     .then(response => console.log("response", response.data))

function callAPI(endpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body,
    }).catch((err) => {
        console.log(err);
    });
}

var listProduct;

var productAdmin = function() {
    callAPI("product", "GET", null).then((res) => {
        // lay du lieu ve
        listProduct = res.data;
        console.log(listProduct);
        for (var i in listProduct) {
            var data = JSON.parse(JSON.stringify(listProduct[i]));

            var html = `
            <tr>
            <tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td> <img src="${data.img1}" style="width: 50px;"></td>
            <td> <img src="${data.img2}" style="width: 50px;"></td>
            <td> <img src="${data.img3}" style="width: 50px;"></td>
            <td> ${data.price}</td>
            <td> ${data.tag}</td>
            <td> <button onclick="updateProduct(${i})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">     <i class="fas fa-cogs"> </i></button>
                <button onclick="deleteProduct(${i})" class="btn btn-out-warning"> <i class="fas fa-trash"> </i></button>
            </td>    
            </tr>
            `;
            document.getElementById("product_admin").innerHTML += html;
        }
    });
};

var addProduct = function() {



    var pro = {
        id: "SP" + parseInt(product.length + 1),
        name: document.getElementById("name").value,
        img1: document.getElementById("img1").value,
        img2: document.getElementById("img2").value,
        img3: document.getElementById("img3").value,
        price: document.getElementById("price").value,
        tag: doc
    };
    product.push(pro);
    localStorage.setItem("listProduct", JSON.stringify(product));
    save();
    window.location.reload();
};

var updateProduct = function(i) {
    var k = product[i];
    document.getElementById("idd").value = k.id;
    document.getElementById("named").value = k.name;
    document.getElementById("imgd").value = k.img;
    document.getElementById("priced").value = k.price;
    document.getElementById("summitUpdate").innerHTML =
        '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate(' +
        i +
        ')">Update</button>';
};

var submitUpdate = function(i) {
    var k = product[i];
    k.id = document.getElementById("idd").value;
    k.name = document.getElementById("named").value;
    k.img = document.getElementById("imgd").value;
    k.price = document.getElementById("priced").value;

    localStorage.setItem("listProduct", JSON.stringify(product));
    window.location.reload();
};

var deleteProduct = function(i) {
    product.splice(i, 1);
    localStorage.setItem("listProduct", JSON.stringify(product));
    window.location.reload();
};

function save() {
    localStorage.setItem("listProduct", JSON.stringify(product));
}

var product = [{
        id: "SP1",
        name: "Vay caro co U nut boc 15519",
        img: "https://fmstyle.com.vn/images/anhnho/787980_643932123__MG_1933ab.jpg",
        price: 205000,
    },
    {
        id: "SP2",
        name: "Vay yem xoe phoi luoi than tre",
        img: "https://fmstyle.com.vn/images/anhnho/786970_29573192__MG_2009.jpg",
        price: 205000,
    },
    {
        id: "SP3",
        name: "Vay co V nhun duoi ca VU1511A",
        img: "https://fmstyle.com.vn/images/anhnho/787290_1787551762__MG_1962.jpg",
        price: 205000,
    },
    {
        id: "SP4",
        name: "Vay hoa TD bo nhum eo",
        img: "https://fmstyle.com.vn/images/anhnho/771117_715395795__MG_1379.jpg",
        price: 205000,
    },
];

function load() {
    product = JSON.parse(localStorage.getItem("listProduct"));
    productAdmin();
}

if (localStorage.getItem("listProduct") != null) {
    load();
}