let innerFlex = document.createElement("div");
innerFlex.classList.add("d-flex", "align-items-center", "col-md-7", "col-10", "m-1");

let cardDiv = document.createElement("div");
innerFlex.append(cardDiv);

cardDiv.classList.add("d-flex", "col-12", "profile-card");

let leftInfo = document.createElement("div");
leftInfo.classList.add("col-8", "py-3");

let div1 = document.createElement("div");
div1.classList.add("py-2");

// 完全コピー(cloneNode)
let div2 = div1.cloneNode(true);
let div3 =  div1.cloneNode(true);

let nameTitle = document.createElement("h4");
nameTitle.innerHTML = "Kaiden Herman";

// p要素作成
let employeeJob = document.createElement("p");
let employeeSkill = document.createElement("p");
let employeeCountry = document.createElement("p");

employeeJob.innerHTML = "Job: " + "<br>" + "Software Engineer";
div1.append(employeeJob);

employeeSkill.innerHTML = "Skill: " + "<br>" + "C++, C#, Java, PHP, JavaScript, Python";
div2.append(employeeSkill);

employeeCountry.innerHTML = "Country : " + "<br>" + "United States";
div3.append(employeeCountry);

leftInfo.append(nameTitle,div1,div2,div3);
// leftInfoの中に値確認
console.log(leftInfo)


