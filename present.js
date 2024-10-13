var to = nameGirl;
var gift_image_url_1 = giftImage1;
var gift_image_url_2 = giftImage2;

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

function init() {
  var graphElem = document.querySelector('.present-box > .side.top .to');
  graphElem.setAttribute('data-before', eventName);
  document.querySelector('#card .title-card').innerHTML = `💘${titleCard}💘`;
  document.querySelector('#card .content-card').innerHTML = `${contentCard}`;
  document.querySelector('#card .honey').setAttribute('src', `${giftImage1}`);

  var _giftImg2;

  _giftImg2 = document.createElement("img");
  _giftImg2.src = gift_image_url_2;
  presentImage.appendChild(_giftImg2);


  present.addEventListener("click", function (e) {
    present.classList.toggle("open");
    present.classList.toggle("hide-sides");
    document.getElementById('card').classList.add('card-show');
  }, false);



  nametag.innerText = to;
}

init();

