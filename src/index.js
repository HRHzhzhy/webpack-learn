import _ from 'lodash'
import './style.css'
function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // lodash import from modules
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // style.css中定义的样式
  element.classList.add('hello')

  return element;
}

document.body.appendChild(component());
