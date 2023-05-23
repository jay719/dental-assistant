const cardDetailsObject = {
  1: {
    title: "Affordable Tuition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  2: {
    title: "Physical & Online Learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  3: {
    title: "Student Resources",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
};
// const newCard =
const cardSection = document.getElementById("cardsContainer");

const createInnerText = (title, description) => {
  const divTitle = document.createElement("h3");
  const divDesc = document.createElement("p");
  const cardDiv = document.createElement("div");
  cardDiv.className = "cardDiv";
  divTitle.className = "cardTitle";
  divTitle.innerText = title;
  console.log("divTitle", divTitle);
  divDesc.className = "cardDescription";
  divDesc.innerText = description;
  return [divTitle, divDesc, cardDiv];
};
const createToothImage = () => {
  const newImg = document.createElement("img");
  newImg.className = "sm-tooth-img";
  newImg.src = "./resources/images/sm-tooth.png";
  return newImg;
};
const createNewDiv = (num, title, description) => {
  let [divTitle, divDesc, cardDiv] = createInnerText(title, description);
  // let newImg = createToothImage();
  // cardDiv.append(newImg);
  cardDiv.id = `card${num}`;
  cardDiv.className = "cards";
  console.log(cardDiv, "div");

  cardDiv.append(divTitle);
  cardDiv.append(divDesc);

  console.log(cardSection);
  cardSection.append(cardDiv);
  console.log(cardSection.children);
};
const returnCards = (object) => {
  const size = Object.keys(object).length;
  for (let i = 1; i < size + 1; i++) {
    const subObject = object[i];
    console.log(subObject, "subobjec");
    createNewDiv(i, subObject.title, subObject.description);
  }
};
returnCards(cardDetailsObject);
