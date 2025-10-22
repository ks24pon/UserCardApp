// // div,h2,p要素作成
// let parentDiv = document.createElement("div");
//-----------1つ目div-----------
let div1 = document.createElement("div");

// h2要素
let h2Sport = document.createElement("h2");
h2Sport.innerHTML = "sport";

// p要素(tennis, baseball)
let pTennis = document.createElement("p");
pTennis.innerHTML = "tennis";

let pBaseball = document.createElement("p");
pBaseball.innerHTML = "baseball";

// div1に追加
div1.append(h2Sport, pTennis, pBaseball);
//-----------1つ目div-----------

//-----------2つ目div-----------
// div2要素
let div2 = document.createElement("div");

// h2要素
let h2Animal = document.createElement("h2");
h2Animal.innerHTML = "animal";

// p要素(dog, cat)
let pDog = document.createElement("p");
pDog.innerHTML = "dog";

let pCat = document.createElement("p");
pCat.innerHTML = "cat";

// div2に追加
div2.append(h2Animal, pDog, pCat);
//-----------2つ目div-----------

// 画面画面追加
document.getElementById("target-container").append(div1,div2);