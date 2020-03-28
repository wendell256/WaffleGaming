const newpForm = document.querySelector('#new_product');


newpForm.addEventListener('submit', (e) => {
  e.preventDefault();
    const category = newpForm['category'].value;
    const name = newpForm['name'].value;
    const picture = newpForm['picture'].value;
    const price = newpForm['price'].value;
    db.collection("newProducts").add({
        Category : category,
        Name : name,
        Picture : picture,
        Price : price

    })
    .then(function(docRef) {
        newpForm.reset();
        alert("Item Creado!")
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});