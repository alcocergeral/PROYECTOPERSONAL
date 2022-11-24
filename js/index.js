document.querySelector('#send_message').addEventListener('click',function(){
  var message = document.querySelector('#mensaje').value;
  var number = 923444625;
  var url = "whatsapp://send?text="+encodeURIComponent(message)+"&phone="+encodeURIComponent(number)
  alert("Mensaje Enviado con exito")
  window.open(url);
});
