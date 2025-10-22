function animalImgUrl (animal) {
  animal = animal.toLowerCase();

  if (animal == "dog") {
      return "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg";
  } else if (animal == "cat") {
      return "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg";
  } else if (animal == "bird") {
      return "https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453__340.jpg";
  } else {
      return "https://cdn.pixabay.com/photo/2014/04/05/11/20/forest-315184__340.jpg";
  }
}

function renderAnimal(animal, ele){
  let div = document.createElement("div");
  let name = document.createElement("h2");
  let img = document.createElement("img");
  img.src = animalImgUrl(animal);

  name.innerHTML = "Our animal is " + animal;

  img.classList.add("animalImg");

  div.append(name);
  div.append(img);
  div.classList.add("animalDiv");

  animalBox.append(div);
}
let animalBox = document.getElementById("animal-box");

// 関数の呼び出し
renderAnimal("dog", animalBox);
renderAnimal("cat", animalBox);
renderAnimal("bird", animalBox);
renderAnimal("lion", animalBox);
renderAnimal("bear", animalBox);
renderAnimal("fox", animalBox);