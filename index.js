var katzDeliLine = []

function takeANumber(deliLine,deliPatron){
  deliLine.push(deliPatron)
  return `Welcome, ${deliPatron}. You are number ${deliLine.length} in line.`
}

function nowServing (deliLine){
  if (deliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    let currentPatron = deliLine.shift()
    return `Currently serving ${currentPatron}.`
  }
}
