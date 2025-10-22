class Employee {
  // コンストラクタ、初期値の設定
  constructor(firstName, lastName, job, skill, country, avatarUrl){
      // thisでオブジェクトを取得
      this.firstName = firstName;
      this.lastName = lastName;
      this.job = job;
      this.skill = skill;
      this.country = country;
      this.avatarUrl = avatarUrl;
  }
  getFullName() {
      return this.firstName + " " + this.lastName;
  }
}

let employee1 = new Employee("Kaiden" ,"Herman", "Software Engineer", "C++, C#, Java, PHP, JavaScript, Python","United States", "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg");
console.log(employee1);
console.log(employee1.getFullName());