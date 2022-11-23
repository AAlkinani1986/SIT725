async function submit(num1, num2, operation) {
  return await fetch(
    `/calculate?num1=${num1}&num2=${num2}&operation=${operation}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
  ).then((response) => response.json())
}
function displayRadioValue() {
  var operate = document.getElementsByName('radioC')

  for (i = 0; i < operate.length; i++) {
    if (operate[i].checked) return operate[i].value
  }
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', (event) => {
  let n1 = document.getElementById('num1').value
  let n2 = document.getElementById('num2').value
  let res = document.getElementById('result')
  let operation = displayRadioValue()

  let results = () => submit(n1, n2, operation)
  results().then((result) => {
    res.value = result.data
  })
  event.preventDefault()
})
