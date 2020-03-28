

db.collection('newProducts').get().then(snapshot => {
    setupnewP(snapshot.docs);
  });


const setupnewP = (data) => {
    let html = '';
    data.forEach(doc => {
      const guide = doc.data();
      
      const price = guide.Price;
      console.log(price);
      
      const li = `
      <div class="col-xl-4 col-md-6">
      <div class="product">
          <div class="product_image"><a onclick="dynamicRequestN('${guide.Name}')"><img src="${guide.Picture}" alt=""></a></div>
          <div class="product_content">
              <div class="product_info d-flex flex-row align-items-start justify-content-start">
                  <div>
                      <div>
                          <div class="product_name"><a onclick="dynamicRequestN('${guide.Name}')">${guide.Name}</a></div>
                          <div class="product_category">In <a href="category.html">${guide.Category}</a></div>
                      </div>
                  </div>
                  <div class="ml-auto text-right">
                      <div class="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
                      <div class="product_price text-right">${price.substring(0,3)}<span>${price.substring(3)}</span></div>
                  </div>
              </div>
              <div class="product_buttons">
                  <div class="text-right d-flex flex-row align-items-start justify-content-start">
                      <div class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                          <div><div><img src="images/heart_2.svg" class="svg" alt=""><div>+</div></div></div>
                      </div>
                      <div class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                          <div><div><img src="images/cart.svg" class="svg" alt=""><div>+</div></div></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
      `;
      html += li;
    });
    document.getElementsByClassName('newproduct')[0].innerHTML = html;
  
  };