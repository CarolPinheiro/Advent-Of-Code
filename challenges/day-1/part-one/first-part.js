const caloriesByElfs= require("./calories-by-elfs")

const arrayOfCaloriesByElf = caloriesByElfs.split(/\s/)

const result = arrayOfCaloriesByElf.reduce((acc, att, index) => {
  if(index === 0 || att === '') {
    acc.push(0)
  } else {
    acc[acc.length - 1] += Number(att)
  }
  return acc
},[])

const biggestAmountOfCalories = Math.max(...result)

console.log( `O elfo carregando a maior quantidade de calorias leva ${biggestAmountOfCalories} calorias` )