import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // lodash import from modules
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // style.css中定义的样式
  element.classList.add('hello')
  // add file,给div中添加img
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
