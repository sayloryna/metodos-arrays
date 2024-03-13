//1.Años//
const years: number[] = [];
for (let year = 2000; year <= 2024; year++) {
  years.push(year);
}
//2.Words//
const words = [
  "confín.",
  "otro",
  "al",
  "uno",
  "del",
  "conocido",
  "mar",
  "todo",
  "en",
  "Temido,",
  "el",
  "bravura,",
  "su",
  "por",
  "llaman,",
  "que",
  "pirata",
  "Bajel",
  "bergantín.",
  "velero",
  "un",
  "vuela",
  "sino",
  "mar,",
  "el",
  "corta",
  "no",
  "vela,",
  "toda",
  "a",
  "popa,",
  "en",
  "viento",
  "banda,",
  "por",
  "cañones",
  "diez",
  "Con",
];
console.log(words.reverse().join(" "));

//3.Notas//
let grades: number[] = [];
grades = [5, 8, 9, 6, 7];

const sortedGrades = grades.sort((gradeA, gradeB) => gradeA - gradeB);

let totalGrades = 0;
for (let grade = 0; grade < grades.length; grade++) {
  totalGrades += grades[grade];
}

const averageGrades = totalGrades / grades.length;

const passGrades: number[] = [];
for (let grade = 0; grade < grades.length; grade++) {
  if (grades[grade] >= 5) {
    passGrades.push(grades[grade]);
  }
}
console.log(`Los aprobados han sacado ${passGrades}`);
console.log(`La nota media es: ${averageGrades.toFixed(1)} `);
console.log(
  `La nota más alta ha sido: ${sortedGrades.at(-1)} y la más baja: ${
    sortedGrades[0]
  }`
);

