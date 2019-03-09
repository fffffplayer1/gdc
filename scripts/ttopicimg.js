var elems = document.getElementsByClassName('emoticon');
var j;
for (j=0; j<elems.length; ++j){
	var elem = elems[j].outerHTML;
	var elemp = elem.split('https://lego.i.lithium.com/lego/i/emoticons/');
	elems[j].outerHTML = elemp[0]+'../../images/'+elemp[1];
}
elems = document.getElementsByTagName('IMG');
for (j=0; j<elems.length; ++j){
	var elem = elems[j].outerHTML;
	if (elem.indexOf('/emotion-') != -1){
		var elemp = elem.split('/html/images/emoticons/');
		elems[j].outerHTML = elemp[0]+'../../images/'+elemp[1];
	}
	if (elem.indexOf('icon-quote.gif')!= -1){
		var elemp = elem.split('http://cache.LEGO.com/images/forums/en-US/');
		elemp = elemp[0].split('http://cache.LEGO.com/images/forums/en-GB/');
		elems[j].outerHTML = elemp[0]+'../../images/icon-quote.gif" />';
	}
}
elems = document.getElementsByClassName('UserAvatar lia-link-navigation');
for (j=0; j<elems.length; ++j){
	var elem = elems[j].outerHTML;
	var elemp;
	var elemp2;
	if (elem.indexOf('services') != -1) {
		elemp = elem.split('https://services.avatarinventory.lego.com/api/v1/avatar/');
		elemp2 = elemp[1].split('/globalnavigation?fallback=https://mi-od-live-s.legocdn.com/r/account2/r/avatar/');
		elems[j].outerHTML = elemp[0]+'../../images/'+elemp2[1];
	}
	else if (elem.indexOf('account2') != -1) {
		elemp = elem.split('https://a248.e.akamai.net/cache.lego.com/r/account2/r/avatar/');
		elems[j].outerHTML = elemp[0]+'../../images/'+elemp[1];
	}
	else {
		elemp = elem.split('https://a248.e.akamai.net/cache.lego.com/avatar/');
		elems[j].outerHTML = elemp[0]+'../../images/'+elemp[1];
	}

}
elems = document.getElementsByClassName('lia-user-rank-icon lia-user-rank-icon-left');
for (j=0; j<elems.length; ++j){
	var elem = elems[j].outerHTML;
	var elemp;
	if (elem.indexOf('assets') == -1) elemp = elem.split('https://lego.i.lithium.com/html/rank_icons/');
	else elemp = elem.split('https://lego.i.lithium.com/html/assets/');
	elems[j].outerHTML = elemp[0]+'../../images/'+elemp[1];
}
elems = document.getElementsByClassName('lia-link-navigation hidden live-links');
for (j=0; j<elems.length; ++j){
	var elem = elems[j].outerHTML;
	elem = elem + '<link rel="icon" href="../../images/favicon.png" type="image/png"/>';
	elems[j].outerHTML = elem;
}