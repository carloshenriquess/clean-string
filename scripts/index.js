
const input = document.getElementById('textarea-input')
const output = document.getElementById('textarea-output')
const button = document.getElementById('button')

document.getElementById('textarea-input').addEventListener('input', setOutputValue)
button.addEventListener('click', pasteFromClipboard)
pasteFromClipboard()


function setOutputValue() {
  output.value = this.value.replace(/[^0-9]+/g, '')
}

function pasteFromClipboard() {
  navigator.clipboard.readText().then(
    result => {
      input.value = result
      setOutputValue.call(input)
    },
    reject => console.log('Que pena!\n:)')
  )
}
