var express = require('express')
const app = express()
app.use(express.static(__dirname))
var num1, num2, operation, result
app.get('/calculate', (req, res) => {
  num1 = req.query.num1
  num2 = req.query.num2
  operation = req.query.operation
  console.log(num1, num2, operation)
  result = operate(parseInt(num1), parseInt(num2), operation)
  res.json({ statusCode: 200, data: result, message: 'Success' })
})

const operate = (num1, num2, operator) => {
  switch (operator) {
    case 'sum':
      return num1 + num2
      break

    case 'divided':
      return num1 / num2
      break
    case 'minus':
      return num1 - num2
      break

    case 'multiply':
      return num1 * num2
      break

    default:
      console.log(`Sorry, not sure ${expr}.`)
  }
}

app.listen(3232, () => {
  console.log('Server is listening to on port 3232')
})
