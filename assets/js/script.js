if (localStorage && localStorage.getItem("cart")) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
  updateCartIcon(cart);
} else {
  var cart = {};
  cart.products = [];
  localStorage.setItem("cart", JSON.stringify(cart));
}

const products = [
  {
    id: 1,
    name: "N64 OEM Controller - Gray",
    type: ["n64-controllers", "all"],
    price: "$15.00",
    img: "oem1.jpg",
    description: "Original hardware. Minor cosmetic wear on shell.",
  },
  {
    id: 2,
    name: "N64 OEM Controller - Yellow",
    type: ["n64-controllers", "all"],
    price: "$15.00",
    img: "oem2.jpg",
    description: "Original hardware. Excellent condition.",
  },
  {
    id: 3,
    name: "N64 HoriPAD Controller - Red",
    type: ["n64-controllers", "all"],
    price: "$45.00",
    img: "hori2.jpg",
    description:
      "Enthusiast-grade hardware. Ergonomic grip. Near-mint condition, tight thumbstick.",
  },
  {
    id: 4,
    name: "N64 HoriPAD Controller - Green",
    type: ["n64-controllers", "all"],
    price: "$35.00",
    img: "hori.jpg",
    description:
      "Enthusiast-grade hardware. Ergonomic grip. Tight stick, light surface scratches.",
  },
  {
    id: 5,
    name: "Conker Bad Fur Day N64",
    type: ["n64-games", "all"],
    price: "$40",
    img: "cbd.png",
    description:
      "Rare-developed adventure. Mature themes. Authentic cartridge, clean label.",
  },
  {
    id: 6,
    name: "Zelda Ocarina of Time N64",
    type: ["n64-games", "all"],
    price: "$40",
    img: "oot.png",
    description:
      "Action-adventure RPG. 3D environment mechanics. Gold cartridge, minor label wear.",
  },
  {
    id: 7,
    name: "Mischief Makers N64",
    type: ["n64-games", "all"],
    price: "$40",
    img: "mischief.png",
    description:
      "2D side-scrolling platformer. Treasure-developed. Cartridge only, tested working.",
  },
  {
    id: 8,
    name: "Pokemon LeafGreen GBA",
    type: ["gba-games", "all"],
    price: "$40",
    img: "green.png",
    description:
      "GBA remake of Kanto region. Original internal battery tested. Label intact.",
  },
  {
    id: 9,
    name: "Harvest Moon 64 N64",
    type: ["n64-games", "all"],
    price: "$40",
    img: "harvestmoon.png",
    description:
      "Agricultural simulation RPG. High-collectible. Clean contacts, saves functional.",
  },
  {
    id: 10,
    name: "Diddy Kong Racing 64 N64",
    type: ["n64-games", "all"],
    price: "$40",
    img: "dkr.png",
    description:
      "Multi-vehicle racing title. Adventure Mode supported. Cartridge shows shelf wear.",
  },
  {
    id: 11,
    name: "Pokemon Sapphire GBA",
    type: ["gba-games", "all"],
    price: "$40",
    img: "sapphire.png",
    description:
      "Third-generation entry. Hoenn region. Original translucent shell, intact label.",
  },
  {
    id: 12,
    name: "Pokemon FireRed GBA",
    type: ["gba-games", "all"],
    price: "$40",
    img: "redbox.png",
    description:
      "Gen 1 remake on GBA. Updated visuals. Authentic Nintendo PCB, verified working.",
  },
  {
    id: 13,
    name: "Banjo-Tooie N64",
    type: ["n64-games", "all"],
    price: "$40",
    img: "bk.png",
    description:
      "Banjo-Kazooie sequel. Expanded world maps. Excellent cartridge and label condition.",
  },
];
if (document.body.classList.contains("cart")) {
  if (localStorage && localStorage.getItem("cart")) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let cartData = cart.products;
    let htmlContent = "";
    let sum = 0;
    $(`#cart`).append(`<h2 class="mb-3">Shopping Cart</h2>`);
    cartData.forEach((product) => {
      sum += product.price * product.quantity;

      htmlContent += `<div class="mt-3" id="cart">

          <div class="card mb-3 cart-item">
            <div class="row">
              <div class="col-md-2 col-sm-3">
                <img src="assets/img/${products[product.id - 1]["img"]}"
                class="img-fluid rounded-start img-cart" alt="Product" />
              </div>

              <div class="col-md-6 col-sm-5">
                <div class="card-body">
                  <h5 class="card-title">
                    ${product.name} ($${product.price})
                  </h5>
                  <p class="card-text text-muted description">
                    This is a sample product description. It provides details
                    about the product features and specifications.
                  </p>
                  <p class="text-success fw-bold">$${product.price}</p>
                </div>
              </div>
              <div class="col-md-4 col-sm-4">
                <div class="card-body d-flex flex-column justify-content-center h-100">
                  <div class="mb-3 d-inline-flex align-content-center justify-content-center "
                        id = "${product.id}"
                    >
                  <button type="button" class="btn btn-outline-secondary sub-cartpage"> − </button>
                  <h4 class="m-1 mx-2 qtty">${product.quantity}</h4>
                  <button type="button" class="btn btn-outline-secondary add-cartpage"> + </button>
                  <button class="btn btn-sm btn-danger mx-2 trash"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg></button>
                </div>

                <!-- Total Price -->
                <div class="text-center">
                  <p class="mb-1 text-muted">Total:</p>
                  <h5 class="text-success mb-2 sub-total">$${
                    product.quantity * product.price
                  }</h5>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
     `;
    });

    $(`#cart`).append(htmlContent);

    htmlContent = `<div class="card mt-4 mb-5">
                      <div class="card-body">
                          <div class="row align-items-center">
                              <div class="col-md-6">
                                  <h4 >Cart Total: <div class="text-success cart-total" >$${sum}</div></h4>
                              </div>
                              <div class="col-md-6 text-end">
                                  <button class="btn btn-dark px-5 mx-4 text-end">
                                      Checkout
                                  </button>
                              </div>
                          </div>
                      </div>
                    </div>`;
    $(`#cart`).append(htmlContent);
  }
}
if (document.body.classList.contains("products")) {
  const types = ["all", "n64-games", "gba-games", "n64-controllers"];
  types.forEach((type) => {
    let htmlContent = "";
    products.forEach((product) => {
      if (product.type.includes(type)) {
        htmlContent += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 pt-3">
			  <div class="card" >
				<div class="img-card-product">
				  <p class="bg-warning bg-opacity-10 rounded-2">${product.price}</p>
				  <img
					src="assets/img/${product.img}"
					class="card-img-top"
				  />
				</div>
				<div class="card-body">
				
				  <h5 class="card-title">${product.name}</h5>
				  <p class="card-text description">
				  
				  ${product.description}
				  </p>
				  
				  <!--cart buttons-->
				  
				  <div>
				  
					<div class="d-inline-flex">
					
					  <button
						type="button"
						class="btn btn-outline-dark rounded-4 sub"
					  >
						-
					  </button>
					  <h4 class="mx-3 pt-1 qtty">0</h4>
					  <button
						type="button"
						class="btn btn-outline-dark rounded-4 add"
					  >
						+
					  </button>
					  <button
						type="button"
						class="btn btn-outline-dark rounded-4 mx-2 add-to-cart"
						id="${product.id}"
					  >
						Add to Cart
					  </button>
					</div>
				  </div>
				</div>
			  </div>
			</div>`;
      }
    });
    $(`#${type}`).empty().append(htmlContent);
  });
}
$;

function addToCart(product) {
  if (localStorage && localStorage.getItem("cart")) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    const idProductLocalStorage = cart.products.findIndex(
      (item) => item.id == product.id
    );

    if (idProductLocalStorage !== -1) {
      cart.products[idProductLocalStorage].quantity = product.quantity;
    } else {
      cart.products.push(product);

      console.log("push");
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartIcon(cart);
  }
}
function updateCartTotal() {
  if (localStorage && localStorage.getItem("cart")) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let cartData = cart.products;
    let sum = 0;
    cartData.forEach((product) => {
      sum += product.price * product.quantity;
    });
    $(".cart-total")
      .first()
      .text("$" + sum);
  }
}

function updateCartIcon(cart) {
  let sum = 0;
  console.log(cart);
  cart.products.forEach((element) => {
    sum += Number(element.quantity);
  });

  $(document).find("#cartIcon").text(sum);
}

$(document).ready(function () {
  $("#cartLink").on("click", function () {
    console.log($(this).find("#cartIcon"));

    if ($(this).find("#cartIcon").html() == "0") {
      alert("Add at least one item to your cart.");
    } else {
      window.location.href = "cart.html";
    }
  });
  $(".sub-cartpage, .add-cartpage,.trash").click(function () {
    const productId = $(this).parent().attr("id");
    const selectedQuantity = $(this).parent().find(".qtty").html();
    const description = products[productId - 1]["description"];
    const name = products[productId - 1]["name"];
    const price = Number(products[productId - 1]["price"].slice(1));

    let next = 0;
    if ($(this).hasClass("sub-cartpage")) {
      next = Number($(this).parent("div").find("h4").html()) - 1;
    } else if ($(this).hasClass("add-cartpage")) {
      next = Number($(this).parent("div").find("h4").html()) + 1;
    } else if ($(this).hasClass("trash")) {
      next = 0;
    }

    if (next < 0) {
      next = 0;
    } else {
      $(this).parent("div").find(".qtty").text(next);

      var product = {};
      product.id = productId;
      product.name = name;
      product.price = price;
      product.description = description;
      product.quantity = next;

      addToCart(product);
      $(this)
        .parent()
        .parent()
        .find(".sub-total")
        .text("$" + product.price * next);
      updateCartTotal();

      if (next == 0) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (cart && cart.products) {
          cart.products = cart.products.filter(
            (product) => product.id !== productId
          );
          console.log(cart.products);
          localStorage.setItem("cart", JSON.stringify(cart));
          updateCartIcon(cart);
        }
      }
    }
  });
  $(document).on("click", ".add-to-cart", function () {
    const productId = $(this).attr("id");
    const selectedQuantity = $(this).parent().find("h4").html();
    const description = products[productId - 1]["description"];
    const name = products[productId - 1]["name"];
    const price = Number(products[productId - 1]["price"].slice(1));

    if (selectedQuantity <= 0) {
      alert("Please select at least 1 item.");
      return;
    } else {
      var product = {};
      product.id = productId;
      product.name = name;
      product.description = description;
      product.price = price;
      product.quantity = selectedQuantity;
      addToCart(product);
    }
  });
  $(".sub, .add").click(function () {
    let next = 0;
    if ($(this).hasClass("sub")) {
      next = Number($(this).parent("div").find("h4").html()) - 1;
    } else if ($(this).hasClass("add")) {
      next = Number($(this).parent("div").find("h4").html()) + 1;
    }
    if (next < 0) {
      next = 0;
    }
    $(this).parent("div").find(".qtty").text(next);
  });
});
