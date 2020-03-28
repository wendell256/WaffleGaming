const insert = document.querySelector('.din_im');
var insert_name = document.querySelector('.product_name');
var insert_genre = document.querySelector('.product_category');
var insert_price = document.querySelector('.product_price');
db.collection('Products').get().then(snapshot => {
    setupPage(snapshot.docs);
    db.collection('newProducts').get().then(snapshot => {
        setupPage2(snapshot.docs);
    });
});

const setupPage = (data) => {
    var product_name = "";
    var product_genre = "";
    var product_price = "";
    var docRef = db.collection("Dynamic").doc("request");

    docRef.get().then(function (docu) {
        if (docu.exists) {
            let html = '';
            var result = docu.data().name;
            
            data.forEach(docu => {
                var product = docu.data();

                if (product.Name == result) {
                    product_name = product.Name;
                    product_genre = product.Category;
                    product_price = product.Price;
                    var li = `
        <div><img src="${product.Picture}" /></div> 
    `;
                    html += li;
                }

            });

            insert.innerHTML = html;
            setupName(product_name);
            setupGenre(product_genre);
            setupPrice(product_price);
        }
    });

};

const setupPage2 = (data) => {
    var product_name = "";
    var product_genre = "";
    var product_price = "";
    var docRef = db.collection("Dynamic").doc("requestn");

    docRef.get().then(function (docu) {
        if (docu.exists) {
            let html = '';
            var result = docu.data().name;
            
            data.forEach(docu => {
                var product = docu.data();

                if (product.Name == result) {
                    product_name = product.Name;
                    product_genre = product.Category;
                    product_price = product.Price;
                    var li = `
        <div><img src="${product.Picture}" /></div> 
    `;
                    html += li;
                }

            });

            insert.innerHTML = html;
            setupName(product_name);
            setupGenre(product_genre);
            setupPrice(product_price);
        }
    });
};

function setupName(product_name) {
    let html2 = '';
    const li2 = `
        ${product_name}
    `;
    html2 += li2;
    insert_name.innerHTML = html2;
}
function setupGenre(product_genre) {
    let html3 = '';
    const li3 = `
        In 
        ${product_genre}
    `;
    html3 += li3;
    insert_genre.innerHTML = html3;
}
function setupPrice(product_price) {
    let html4 = '';
    const li4 = `
        ${product_price.substring(0, 3)}
        <span>${product_price.substring(3)}</span>
    `;
    html4 += li4;
    insert_price.innerHTML = html4;
}

