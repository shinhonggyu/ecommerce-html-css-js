const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

// 배열 데이터를 만든다.
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentPRoductImg = document.querySelector(".productImg");
const colors = document.querySelectorAll(".color");
const sizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    // change the choosen product
    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = `$` + choosenProduct.price;
    currentPRoductImg.src = choosenProduct.colors[0].img;

    colors.forEach((item, index) => {
      item.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

colors.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentPRoductImg.src = choosenProduct.colors[index].img;
  });
});

// [<div>42</div>, <div>43</div>, <div>44</div>]
sizes.forEach((size) => {
  size.addEventListener("click", () => {
    sizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const buyButtons = document.querySelectorAll(".buyButton");
const product = document.querySelector(".product");

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener("click", () => {
    product.scrollIntoView({ behavior: "smooth" });
  });
});

// Payment
const payment = document.querySelector(".payment");
const closeButton = document.querySelector(".close");
const buyButton = document.querySelector(".productButton");
const modal = document.querySelector(".modal");

closeButton.addEventListener("click", () => {
  payment.style.visibility = "hidden";
  modal.style.visibility = "hidden";
});

buyButton.addEventListener("click", () => {
  payment.style.visibility = "visible";
  modal.style.visibility = "visible";
});
