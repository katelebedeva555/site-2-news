const products = [
    {
        "id": "1",
        "title": "Брюки",
        "vendor_code": "111",
        "description": "Красивые и удобные брюки-клеш",
        "price": 3500,
        "img": "https://basket-07.wbbasket.ru/vol1093/part109356/109356192/images/big/1.webp"
    },
    {
        "id": "2",
        "title": "Кардиган",
        "vendor_code": "222",
        "description": "Теплый и уютный - прекрасный выбор на осень!",
        "price": 2000,
        "img": "https://cdn.aizel.ru/i/845x1079/1248934.jpg"
    },
    {
        "id": "3",
        "title": "Лонгслив",
        "vendor_code": "333",
        "description": "Можно использовать как базу под свитер или полноценный слой для образа",
        "price": 1500,
        "img": "https://cdn1.ozone.ru/multimedia/1016085581.jpgg"
    },
    {
        "id": "4",
        "title": "Свитер",
        "vendor_code": "444",
        "description": "Стильный принт и 100% кашемир в составе",
        "price": 4000,
        "img": "https://www.bebakids.ru/upload/iblock/40c/wlkfsbm8959c3f0hqj0m6qp742wen2zd/236198_337_9.jpeg"
    },
    {
        "id": "5",
        "title": "Джинсы",
        "vendor_code": "555",
        "description": "Удобно для ежедневной носки!",
        "price": 2500,
        "img": "https://usmall.ru/image/532/22/67/6abbd68dabff22638c03b3da082e65c5.jpeg"
    },
    {
        "id": "6",
        "title": "Юбка-миди",
        "vendor_code": "666",
        "description": "Идеально подходит для похода в ресторна",
        "price": 1500,
        "img": "https://basket-22.wbbasket.ru/vol3728/part372819/372819272/images/big/1.webp"
    },
    {
        "id": "7",
        "title": "Юбка-мини",
        "vendor_code": "777",
        "description": "Образ на тусовку или на учебу",
        "price": 1000,
        "img": "https://st-cdn.tsum.com/sig/4a8ada679238f045e163c6ba78355ce8/width/763/i/8f/91/50/80/39eddf6b-6670-4f0f-ae98-d87967eb8963.jpg"
    },
    {
        "id": "8",
        "title": "Рубашка",
        "vendor_code": "888",
        "description": "Прекрасно подойдет в дополнение образа на учебу",
        "price": 1500,
        "img": "https://www.bosco.ru/upload/iblock/a6d/a6d5e8fcd1afdd2b7c63b2cdbe0aa970_1221_1607.jpg"
    },
    {
        "id": "9",
        "title": "Платье",
        "vendor_code": "999",
        "description": "Подойдет для похода в театр",
        "price": 4000,
        "img": "https://static.lichi.com/product/50186/f08882a0c931e9e46d915b5ec97ee63a.jpg?v=537_499"
    },
    {
        "id": "10",
        "title": "Пижама",
        "vendor_code": "44410e",
        "description": "Для уютных вечеров дома",
        "price": 2000,
        "img": "https://avatars.mds.yandex.net/i?id=6c6f16f88bffc41cb951eac096c185db_l-10961631-images-thumbs&n=13"
    },
    {
        "id": "11",
        "title": "Футболка",
        "vendor_code": "44411e",
        "description": "База для любого образа",
        "price": 1100,
        "img": "https://avatars.mds.yandex.net/get-mpic/13882608/img_id3166280436963796541.jpeg/orig"
    }
];

function loadProducts() {
    let node_for_insert = document.getElementById("node_for_insert")
    node_for_insert.innerHTML = ''
    
    for (let product of products.slice(0, 11)) {
        node_for_insert.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card">
                <img class="card-image" src="${product.img}" alt="${product.title}">
                <h3 class="card-title">${product.title}</h3>
                <p class="card-text">${product.description}</p>
                <div>
                    <p class="card-price mb-2">Цена: ${product.price} ₽</p>
                    <input type="hidden" name="vendor_code" value="${product.vendor_code}">
                    <input type="hidden" name="product_${product.id}_price" value="${product.price}">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="text-muted small">Кол-во:</span>
                        <input class="form-control w-50" type="number" name="amount" value="0" min="0" style="height: 32px; font-size: 14px;">

                    </div>
                </div>
            </div>
        </div>
        `
    }
}

document.addEventListener('DOMContentLoaded', loadProducts)