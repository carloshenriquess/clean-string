const output = document.getElementById('textarea-output')
document.getElementById('textarea-input').oninput = function() {
  output.innerText = this.value.replace(/[^0-9]+/g, '')
}
