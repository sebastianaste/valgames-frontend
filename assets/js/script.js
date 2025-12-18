const products = [
  {
    id: 1,
    name: "N64 OEM Controller - Gray",
    type: ["n64-controllers", "all"],
    price: "$15.00",
    img: "oem1.jpg",
    description: "bla bla bla",
  },
  {
    id: 2,
    name: "N64 OEM Controller - Yellow",
    type: ["n64-controllers", "all"],
    price: "$15.00",
    img: "oem2.jpg",
    description: "bla bla bla",
  },
  {
    id: 3,
    name: "N64 HoriPAD Controller - Red",
    type: ["n64-controllers", "all"],
    price: "$45.00",
    img: "hori2.jpg",
    description: "bla bla bla",
  },
  {
    id: 4,
    name: "N64 HoriPAD Controller - Green",
    type: ["n64-controllers", "all"],
    price: "$35.00",
    img: "hori.jpg",
    description: "bla bla bla",
  },
  {
    id: 5,
    name: "Conker Bad Fur Day N64",
    type: ["n64-games", "all"],
    price: "$40",
    img: "cbd.png",
    description: "bla bla bla",
  },
  {
    id: 6,
    name: "Zelda Ocarina of Time N64",
    type: ["n64-games", "all"],
    price: "$40",
    img: "oot.png",
    description: "bla bla bla",
  },
  {
    id: 7,
    name: "Mischief Makers N64",
    type: ["n64-games", "all"],
    price: "$40",
    img: "mischief.png",
    description: "bla bla bla",
  },
  {
    id: 8,
    name: "Pokemon LeafGreen GBA",
    type: ["gba-games", "all"],
    price: "$40",
    img: "green.png",
    description: "bla bla bla",
  },
  {
    id: 9,
    name: "Harvest Moon 64 N64",
    type: ["n64-games", "all"],
    price: "$40",
    img: "harvestmoon.png",
    description: "bla bla bla",
  },
  {
    id: 10,
    name: "Diddy Kong Racing 64 N64",
    type: ["n64-games", "all"],
    price: "$40",
    img: "dkr.png",
    description: "bla bla bla",
  },
  {
    id: 11,
    name: "Pokemon Sapphire GBA",
    type: ["gba-games", "all"],
    price: "$40",
    img: "sapphire.png",
    description: "bla bla bla",
  },
  {
    id: 12,
    name: "Pokemon FireRed GBA",
    type: ["gba-games", "all"],
    price: "$40",
    img: "redbox.png",
    description: "bla bla bla",
  },
  {
    id: 13,
    name: "Banjo-Tooie N64",
    type: ["n64-games", "all"],
    price: "$40",
    img: "bk.png",
    description: "bla bla bla",
  },
];

const types = ["all", "n64-games", "gba-games", "n64-controllers"];
types.forEach((type) => {
  let htmlContent = "";
  products.forEach((product) => {
    if (product.type.includes(type)) {
      htmlContent += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 pt-3">
              <div class="card">
                <div class="img-card-product">
                  <p class="bg-warning bg-opacity-10 rounded-2">${product.price}</p>
                  <img
                    src="assets/img/${product.img}"
                    class="card-img-top"
                  />
                </div>
                <div class="card-body">
                
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">
                  
                  ${product.description}
                  </p>
                  
                  <!--cart buttons-->
                  
                  <div>
                  
                    <div class="d-inline-flex">
                    
                      <button
                        type="button"
                        class="btn btn-outline-dark rounded-4"
                      >
                        -
                      </button>
                      <h4 class="mx-3 pt-1">0</h4>
                      <button
                        type="button"
                        class="btn btn-outline-dark rounded-4"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-dark rounded-4 mx-2"
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
