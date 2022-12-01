const caloriesByElfs= require("../calories-by-elfs")

const arrayOfCaloriesByElf = caloriesByElfs.split(/\s/)

const result = arrayOfCaloriesByElf.reduce((acc, att, index) => {
  if(index === 0 || att === '') {
    acc.push(0)
  } else {
    acc[acc.length - 1] += Number(att)
  }
  return acc
},[])

const topTheeSumOfCalories = result.splice(0, 3).reduce((acc, att) => acc + Number(att),0)

console.log( `A soma das 3 maiores quantidades de calorias carregadas pelos elfos é ${topTheeSumOfCalories}` )