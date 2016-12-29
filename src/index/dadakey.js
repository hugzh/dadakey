/**
 * @name dadakey
 * @author 橙乡果汁
 * @license MIT
 * @version 0.1
 */
;
(function() {
  var dadakey = function(options) {
    require('./dadakey.css');
    createDom(options);

    var $virBox = document.querySelector('.dadakey-virbox');
    var $realBox = document.querySelector('.dadakey-realbox');
    var passwordBlock = document.querySelectorAll('.dadakey-virbox span');

    $virBox.addEventListener('click', function() {
      $realBox.focus();
    });
    $realBox.addEventListener('input', function() {
      var realboxLength = $realBox.value.length;
      if (realboxLength < options.password) {
        for (var i = realboxLength; i < options.password; i++) {
          passwordBlock[i].innerHTML = '';
        }
      }
      for (var j = 0; j < realboxLength; j++) {
        var words = $realBox.value;
        passwordBlock[j].innerHTML = '·';
      }
    });
  };

  // 生成DOM
  var createDom = function(options) {
    var inputLength = options.password;
    var pswItem = '';
    for (var i = 0; i < inputLength; i++) {
      pswItem += '<span></span>';
    }
    var html = '<div class="dadakey-modal"><div class="dadakey-virbox">' + pswItem + '</div>' +
      '<input type="tel" class="dadakey-realbox" maxlength="' + inputLength +
      '" tabindex="0"></div>';
    document.querySelector('body').innerHTML = html;
  };

  // 支持AMD,CMD以及原生js的引用
  if (typeof module !== 'undefined' && typeof exports === 'object' && define.cmd) {
    module.exports = dadakey;
  } else if (typeof define === 'function' && define.amd) {
    define(function() {
      return dadakey;
    });
  } else {
    this.dadakey = dadakey;
  }
}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
})