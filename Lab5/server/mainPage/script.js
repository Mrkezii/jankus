let cart = [];

function getProd() {
  console.log("cart", cart);

  const section = document.getElementById("view");
  fetch("products/test")
    .then(function(resp) {
      // console.log("response", resp);
      return resp.json();
    })
    .then(function(products) {
      console.log("response", products);
      const list = document.getElementById("form-id");
      const id_header = document.createElement("input");
      const title_header = document.createElement("input");
      const qty_header = document.createElement("input");
      const price_header = document.createElement("input");
      const tax_header = document.createElement("input");

      title_header.style.fontWeight = "bold";
      qty_header.style.fontWeight = "bold";
      price_header.style.fontWeight = "bold";
      id_header.style.fontWeight = "bold";
      tax_header.style.fontWeight = "bold"


      id_header.value = "ID";
      title_header.value = "ITEM";
      qty_header.value = "QUANTITY";
      price_header.value = "PRICE";
      tax_header.value = "TAX"

      list.append(id_header, title_header, qty_header, price_header,tax_header);

      products.map(function(product) {
        // console.log(product._id);
        const container = document.createElement("div");
        const titleInput = document.createElement("input");
        const idInput = document.createElement("input");
        const priceInput = document.createElement("input");
        const quantityInput = document.createElement("input");
        const TaxInput =    document.createElement("input");
        const updateButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        idInput.type = "text";
        idInput.value = product._id;
        idInput.disabled = true;

        titleInput.type = "text";
        titleInput.value = product.Item;

        priceInput.type = "number";
        priceInput.labels = "Price";
        priceInput.value = product.price;

        quantityInput.type = "number";
        quantityInput.value = product.Quantity;

        TaxInput.type = "number" ;
        TaxInput.value = product.Tax ;


        updateButton.innerText = "Update";
        deleteButton.innerText = "Delete";
        let values = [];
        deleteButton.addEventListener("click", e => {
          e.preventDefault();
          const parentDiv = event.target.parentNode;
          const childElement = parentDiv.firstChild;
          return deleteButtonClicked(childElement.value, parentDiv);
        });
        updateButton.addEventListener("click", e => {
          e.preventDefault();
          const parentDiv = event.target.parentNode;
          const childElements = parentDiv.children;
          console.log(parentDiv);
          for (let i = 0; i < childElements.length; i++) {
            console.log(childElements[i].value);
            if (childElements[i].value !== "") {
              values.push(childElements[i].value);
            }
          }
          return updateButtonClicked(values);
        });
        container.append(
          idInput,
          titleInput,
          priceInput,
          quantityInput,
          TaxInput,
          updateButton,
          deleteButton
        );
        list.appendChild(container);
      });
      section.append(list);
    })
    .catch(function(error) {
      console.log(error);
    });
}
function deleteButtonClicked(idToDelete, parentDiv) {
  fetch(`products/${idToDelete}/delete`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
    // load the new list
  })
    .then(() => {
      // alert(`item updated successfully`);
      parentDiv.style.display = "none";
    })
    .then(() => {
      alert(`item deleted successfully`);
    })
    .catch(err => console.log(err));
}

function updateButtonClicked(values) {
  const itemDetails = {
    _id: values[0],
    Item: values[1],
    Quantity: Number(values[2]),
    price: Number(values[3]),
    Tax :Number(values[4]),
  };
  console.log(itemDetails);
  fetch(`products/${itemDetails._id}/update`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Item: itemDetails.Item,
      price: itemDetails.price,
      Quantity: itemDetails.Quantity,
      Tax : itemDetails.Tax,
    }) // load the new list
  })
    .then(() => {
      alert(`item updated successfully`);
    })
    .catch(err => console.log(err));
}
// window.onload = getProducts;

const save = () => {
  //function for first button
  var time = new Date();
  var val = document.getElementById("product2").value;
  val = encodeHTML(val); // sanitizing user input
  var pri = document.getElementById("price1").value;
  // pri =encodeHTML(pri);
  var qty = document.getElementById("Quantity1").value;
  var taxrate = document.getElementById("Tax1").value;
  // qty = encodeHTML(qty);
  console.log(val, pri, qty,taxrate);
  fetch("products/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Item: val, price: pri, Quantity: qty,Tax:taxrate,})
  })
    .then(() => {
      alert(`product added successfully`);
      document.getElementById("product2").value = "";
      document.getElementById("price1").value = "";
      document.getElementById("Quantity1").value = "" ;
      document.getElementById("Tax1").value ="";
    }) // load the new list
    .catch(err => console.log(err));
};

function getById(){ 
fetch('products/:id', {
  method: "GET",
  headers: { "Content-Type": "application/json" }
  // load the new list
})
//.then(() => { PR


.then(() => {
  const newdiv = document.getElementById("newform")
 const idsection  = document.createElement("input")
 const itemsection = document.createElement("input")
 const quantitysection = document.createElement("input")
 const pricesection = document.createElement("input")
const taxsection = document.createElement("input")

idsection.value = "ID";
      itemsection.value = "ITEM";
      quantitysection.value = "QUANTITY";
      pricesection.value = "PRICE";
      taxsection.value = "TAX"

      newdiv.append(idsection,itemsection,quantitysection,pricesection,taxsection)
}) 
}
