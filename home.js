const load = () => {
	console.log('working');
  var innerDivs = document.getElementsByClassName("inner");

  for (var i = innerDivs.length - 1; i >= 0; i--) {
    console.log['test'];
    if (document.getElementsByClassName('inner')[i].getElementsByTagName('a')==[]) continue
    else {
    var link = document.getElementsByClassName('inner')[i].getElementsByTagName('a')[0].href;
    innerDivs[i].onclick = function() {location.href = link};
    }

  }

}

window.onload = load;