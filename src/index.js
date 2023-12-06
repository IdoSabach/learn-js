import joke from './javascriptJoke'
import myName, { functionOne, functionTwo } from './myName'

console.log(joke())

function component () {
  const element = document.createElement('div')

  element.textContent = myName('ido')
  return element
}

document.body.appendChild(component())

console.log(functionOne())
console.log(functionTwo())
