// import logo from "../images/sprite.svg"; //doesn't work svg type
import "../styles.css";

import menuTemplate from "../template/menu.hbs";
import menuInfo from "../assets/menu.json";
import refs from "./refs.js";

const theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

checkerConditionCheckBox();
changeToggleCheckboxCondition();

//change the condition of theme
function changeToggleCheckboxCondition() {
  refs.checkboxTheme.addEventListener("change", (event) => {
    localStorage.setItem("defaultTheme", event.target.checked);

    checkerConditionCheckBox();
  });
}

//check the condition of checkbox toggle menu theme
function checkerConditionCheckBox() {
  let parsedCondition = JSON.parse(localStorage.getItem("defaultTheme"));
  let { LIGHT: light, DARK: dark } = theme;

  if (parsedCondition === false || parsedCondition === null) {
    refs.mainBodyTag.classList.add(light);
    refs.mainBodyTag.classList.remove(dark);
    refs.checkboxTheme.checked = parsedCondition;
  } else {
    refs.mainBodyTag.classList.remove(light);
    refs.mainBodyTag.classList.add(dark);
    refs.checkboxTheme.checked = parsedCondition;
  }
}

// loop the values of .json object
menuInfo.forEach((item) => {
  let markup = menuTemplate(item);
  refs.mainList.innerHTML += markup;
});

//pure js Catalog
class Catalog {
  constructor(name, description, img, price, ingredients) {
    this.name = name;
    this.description = description;
    this.img = img;
    this.price = price;
    this.ingredients = ingredients;
  }

  createProductCard(cardContent) {
    let liItemCart = document.createElement("li");
    liItemCart.classList.add("menu__item");
    let articteCard = document.createElement("article");
    articteCard.classList.add("card");
    liItemCart.append(articteCard);
    let imgCard = document.createElement("img");
    imgCard.classList.add("card__image");
    imgCard.alt = this.name;
    imgCard.src = this.img;
    articteCard.append(imgCard);
    articteCard.append(cardContent);
    return liItemCart;
  }

  createCardContent(listIndrigients, btnBuy) {
    let divCardContent = document.createElement("div");
    divCardContent.classList.add("card__content");
    let h2TitleProduct = document.createElement("h2");
    h2TitleProduct.classList.add("card__name");
    h2TitleProduct.innerText = this.name;
    let paragraphInfoProduct = document.createElement("p");
    paragraphInfoProduct.classList.add("card__price");
    paragraphInfoProduct.innerText = `${this.price} кредитов`;
    let iconMonetization = document.createElement("i");
    iconMonetization.classList.add("material-icons");
    iconMonetization.innerText = `monetization_on`;
    paragraphInfoProduct.prepend(iconMonetization);

    let paragraphDescriptionProduct = document.createElement("p");
    paragraphDescriptionProduct.classList.add("card__descr");
    paragraphDescriptionProduct.innerText = this.description;

    divCardContent.append(h2TitleProduct);
    divCardContent.append(paragraphInfoProduct);
    divCardContent.append(paragraphDescriptionProduct);
    divCardContent.append(listIndrigients);
    divCardContent.append(btnBuy);

    return divCardContent;
  }

  crateListItem() {
    let ulListIngridient = document.createElement("ul");
    ulListIngridient.classList.add("tag-list");
    this.ingredients.forEach((item) => {
      let liItem = document.createElement("li");
      liItem.classList.add("tag-list__item");
      liItem.innerText = item;
      ulListIngridient.append(liItem);
    });
    return ulListIngridient;
  }

  createBtnProduct() {
    let btnBuyProduct = document.createElement("button");
    btnBuyProduct.classList.add("card__button");
    btnBuyProduct.classList.add("button");

    let iconShoopingCard = document.createElement("i");
    iconShoopingCard.classList.add("material-icons");
    iconShoopingCard.classList.add("button__icon");
    iconShoopingCard.innerText = `shopping_cart`;
    btnBuyProduct.innerText = ` В корзину`;

    btnBuyProduct.prepend(iconShoopingCard);

    return btnBuyProduct;
  }
}

// menuInfo.forEach(({ name, description, image, price, ingredients }) => {
//   const catalog = new Catalog(name, description, image, price, ingredients);
//   let listIngridientsItem = catalog.crateListItem();
//   let btnBuyProduct = catalog.createBtnProduct();
//   let cardContent = catalog.createCardContent(
//     listIngridientsItem,
//     btnBuyProduct
//   );
//   refs.mainList.append(catalog.createProductCard(cardContent));
// });

// refs.mainList.append(result);
