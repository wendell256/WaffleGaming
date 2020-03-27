const insert = document.querySelector('.slides');

// setup guides
const setupPage = () => {
    var docRef = db.collection("Dynamic").doc("request");
    var id = docRef.name;
    docRef = db.collection("Products").doc(id);
    let html = '';
    const product = docRef.data();
    const li = `
        <li>
			<div><img src=${product.picture} /></div>
		</li>
		<li>
            <div><img src=${product.picture} /></div>										
        </li>
		<li>
            <div><img src=${product.picture} /></div>										
        </li>
	    <li>
            <div><img src=${product.picture} /></div>										
        </li>
		<li>
            <div><img src=${product.picture} /></div>										
        </li>
		<li>
            <div><img src=${product.picture} /></div>										
        </li>
		<li>
            <div><img src=${product.picture} /></div>										
        </li>
		<li>
            <div><img src=${product.picture} /></div>										
        </li>
        
    `;
        html += li;
    insert.innerHTML = html

};