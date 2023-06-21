let nombreCliente = prompt ("¡Bienvenido! Por favor ingrese su nombre")

alert("Que disfrutes nuestros productos"+ " "+ nombreCliente)

let cartItems = [];
let total = 0;

function addToCart(productName, price) {
  let existingProduct = cartItems.find(function(item) {
    return item.name === productName;
  });

  if (existingProduct) {
    existingProduct.quantity++;
    existingProduct.totalPrice += price;
  } else {
    cartItems.push({ name: productName, price: price, quantity: 1, totalPrice: price });
  }

  total += price;
  updateCart();
}

function updateCart() {
  let cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';

  for (let i = 0; i < cartItems.length; i++) {
    let item = cartItems[i];
    let listItem = document.createElement('li');
    listItem.textContent = item.name + ' - Cantidad: ' + item.quantity + ' - $' + item.totalPrice;
    cartList.appendChild(listItem);
  }

  let totalElement = document.getElementById('total');
  totalElement.textContent = '$' + total;
}

function checkout() {
  if (cartItems.length > 0) {
    alert('Gracias por su compra. Total: $' + total);
    cartItems = [];
    total = 0;
    updateCart();
  } else {
    alert('El carrito está vacío. No se puede procesar el pago.');
  }
}

