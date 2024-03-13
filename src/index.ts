//1.Años//
const years = [];
for (let i = 2000; i <= 2024; i++) {
  years.push(i);
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

const sortedGrades = grades.sort((a, b) => a - b);

let totalGrades = 0;
for (let i = 0; i < grades.length; i++) {
  totalGrades += grades[i];
}
const averageGrades = totalGrades / grades.length;

console.log(`Los aprobados han sacado ${sortedGrades}`);
console.log(`La nota media es: ${averageGrades} `);
console.log(
  `La nota más alta ha sido: ${sortedGrades.at(-1)} y la más baja: ${
    sortedGrades[0]
  }`
);
