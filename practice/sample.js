// 関数名: animalImgUrl
function animalUrl(animal){
  // 小文字
  animal = animal.toLowerCase();

  if(animal === "dog") return "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg";
  else if(animal === "cat") return "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg";
  else if(animal === "bird") return "https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453__340.jpg";
  else return "https://cdn.pixabay.com/photo/2014/04/05/11/20/forest-315184__340.jpg";
}

let animalP = document.createElement("p");
animalP.innerHTML = "Our animal is dog";

// imgタグを作成
let animalImg = document.createElement("img");
animalImg.src = animalUrl("dog");

// クラス追加
animalImg.classList.add("animalImg");

// divに入れる
let animalDiv = document.createElement("div");

// divにクラス追加
animalDiv.classList.add("animalDiv");
animalDiv.append(animalP, animalImg);

// 要素の中に追加
document.getElementById("animal-container").append(animalDiv);

