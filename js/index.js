window.sr = ScrollReveal().reveal('.landing-hero, .contact, .features', {duration: 800});

function test_mail(str){
  if(str.indexOf('@') < 0)
    return false;
  if (str.indexOf(' ') > -1)
    return false;
  return true;
}

var send = document.getElementById('confirm-sub');

document.querySelector('input').addEventListener('input', function(){
  var button = document.getElementById('confirm-sub');
  button.style.backgroundColor = '#9883e5';
  button.innerHTML = 'Subscribe';
  button.style.border = '1px solid #917be3';
});

send.onclick = function(){
  var str = document.getElementById('email').value;
  send.style.border = '1px solid rgba(0,0,0,0.1)'
  if (!test_mail(str)){
    send.style.backgroundColor = '#d13a3a';
    send.innerHTML = 'invalid email';
  }
  else {
    send.innerHTML = 'Thank you!'
    send.style.backgroundColor = "#86a846";
  }
};
