var katzDeliLine = []

function takeANumber(deliLine,deliPatron){
  deliLine.push(deliPatron)
  return `Welcome, ${deliPatron}. You are number ${deliLine.length} in line.`
}

function nowServing (deliLine){
  if (deliLine.length === 0){
    return "the line is empty!"
  }
  else {
    let currentPatron = deliLine.shift()
    return `Now serving ${currentPatron}.`
  }
}
