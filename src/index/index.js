require('./style.less');
require('./index.html');

var $virBox = document.querySelector('.virbox');
var $realBox = document.querySelector('.realbox');
var passwordBlock = document.querySelectorAll('.virbox span');

$virBox.addEventListener('click', function() {
  $realBox.focus();
});
$realBox.addEventListener('input', function() {

  var realboxLength = $realBox.value.length;
  if (realboxLength < 6) {
    for (var i = realboxLength; i < 6; i++) {
      passwordBlock[i].innerHTML = '';
    }
  }
  for (var j = 0; j < realboxLength; j++) {
    var words = $realBox.value;
    passwordBlock[j].innerHTML = '·';
  }
});