var filename = location.href.split("/").slice(-1);
var pagenumber = parseInt(String(filename).split(".")[0], 10);
var pagenumber2 = pagenumber;
if (pagenumber > 10000) pagenumber = 1;
var pagenumber3 = parseInt(String(location.href.split("/").slice(-2)), 10);	
var linknumber;
var i=0;
if (document.getElementById('link_19').innerHTML.split(">")[1] == 'Next</span') linknumber=11;
else if (document.getElementById('link_17').innerHTML.split(">")[1] == 'Next</span') {linknumber=9; i=-2;}
else {linknumber=10; i=-1;}
var maxpage = document.getElementById('link_'+(18+i)).innerHTML
if (maxpage != String(pagenumber)){
	document.getElementById('link_'+(linknumber+8)).outerHTML = '<a class="lia-link-navigation lia-js-data-pageNum-'+(pagenumber+1)+' lia-custom-event" rel="next" id="link_'+(linknumber+8)+'" href='+(pagenumber+1)+'>\
			<span class="lia-paging-page-link">Next</span>\
			\
				<span class="lia-paging-page-arrow">&#187;</span>\
			\
		</a>';
	document.getElementById('link_'+(linknumber+77+i)).outerHTML = '<a class="lia-link-navigation lia-js-data-pageNum-'+(pagenumber+3+i)+' lia-custom-event" rel="next" id="link_'+(linknumber+77)+'" href='+(pagenumber+1)+'>\
			<span class="lia-paging-page-link">Next</span>\
			\
				<span class="lia-paging-page-arrow">&#187;</span>\
			\
		</a>';
	if (i!= -2 || pagenumber == maxpage-1 || pagenumber == 2){
		document.getElementById('link_'+(linknumber+72-i+(i==-1)+i*(pagenumber<4))).outerHTML = '<a class="lia-js-data-pageNum-'+(pagenumber+1)+' lia-link-navigation lia-custom-event" id="link_'+(linknumber+72-i+(i==-1)+i*(pagenumber<4))+'" href='+(pagenumber+1)+'>'+(pagenumber+1)+'</a>';
        document.getElementById('link_'+(linknumber+5-i+i*(pagenumber<4))).outerHTML = '<a class="lia-js-data-pageNum-'+(pagenumber+1)+' lia-link-navigation lia-custom-event" id="link_'+(linknumber+5-i+i*(pagenumber<4))+'" href='+(pagenumber+1)+'>'+(pagenumber+1)+'</a>';
	}
    document.getElementById('link_'+(87+2*i)).outerHTML = '<a class="lia-js-data-pageNum-'+maxpage+' lia-link-navigation lia-custom-event" id="link_'+(87+2*i)+'" href="'+maxpage+'">'+maxpage+'</a>';
    document.getElementById('link_'+(18+i)).outerHTML = '<a class="lia-js-data-pageNum-'+maxpage+' lia-link-navigation lia-custom-event" id="link_'+(18+i)+'" href="'+maxpage+'">'+maxpage+'</a>';
		
	if (pagenumber == 2) pagenumber2 = pagenumber3 + 1;
	if (pagenumber != 1){
		document.getElementById('link_'+(linknumber+69)).outerHTML = '<a class="lia-link-navigation lia-js-data-pageNum-'+(pagenumber-1)+' lia-custom-event" rel="prev" id="link_'+(linknumber+69)+'" href='+(pagenumber2-1)+'>\
			<span>\
					<span class="lia-paging-page-arrow">&#171;</span>\
				\
				<span class="lia-paging-page-link">Previous</span>\
			</span>\
		</a>';
		
				
		document.getElementById('link_11').outerHTML = '<a class="lia-link-navigation lia-js-data-pageNum-'+(pagenumber-1)+' lia-custom-event" rel="prev" id="link_11" href='+(pagenumber2-1)+'>\
			<span>\
					<span class="lia-paging-page-arrow">&#171;</span>\
				\
				<span class="lia-paging-page-link">Previous</span>\
			</span>\
		</a>';
		if (i != -1 || pagenumber == 3 || pagenumber == maxpage-2){
			document.getElementById('link_'+(linknumber+70-i+(i==-1)+i*(pagenumber<4)+2*(i==0))).outerHTML = '<a class="lia-js-data-pageNum-'+(pagenumber-1)+' lia-link-navigation lia-custom-event" id="link_'+(linknumber+70-i+(i==-1)+i*(pagenumber<4))+'" href='+(pagenumber-1)+'>'+(pagenumber-1)+'</a>';
			document.getElementById('link_'+(linknumber+3-i+i*(pagenumber<4))).outerHTML = '<a class="lia-js-data-pageNum-'+(pagenumber-1)+' lia-link-navigation lia-custom-event" id="link_'+(linknumber+3-i+i*(pagenumber<4))+'" href='+(pagenumber-1)+'>'+(pagenumber-1)+'</a>';
        document.getElementById('link_'+(81+i)).outerHTML = '<a class="lia-js-data-pageNum-1 lia-link-navigation lia-custom-event" id="link_'+(81+i)+'" href="'+pagenumber3+'">1</a>';
        document.getElementById('link_12').outerHTML = '<a class="lia-js-data-pageNum-1 lia-link-navigation lia-custom-event" id="link_12" href="'+pagenumber3+'">1</a>';
		}
	}
	else {
		document.getElementById('link_13').outerHTML = '<a class="lia-js-data-pageNum-2 lia-link-navigation lia-custom-event" id="link_13" href="2">2</a>';
        document.getElementById('link_14').outerHTML = '<a class="lia-js-data-pageNum-3 lia-link-navigation lia-custom-event" id="link_14" href="3">3</a>';
		document.getElementById('link_80').outerHTML = '<a class="lia-js-data-pageNum-2 lia-link-navigation lia-custom-event" id="link_80" href="2">2</a>';
        document.getElementById('link_81').outerHTML = '<a class="lia-js-data-pageNum-3 lia-link-navigation lia-custom-event" id="link_81" href="3">3</a>';
	}
	if (pagenumber == maxpage-3){
		document.getElementById('link_86').outerHTML = '<a class="lia-js-data-pageNum-'+(pagenumber+2)+' lia-link-navigation lia-custom-event" id="link_85" href='+(pagenumber+2)+'>'+(pagenumber+2)+'</a>';
		document.getElementById('link_17').outerHTML = '<a class="lia-js-data-pageNum-'+(pagenumber+2)+' lia-link-navigation lia-custom-event" id="link_85" href='+(pagenumber+2)+'>'+(pagenumber+2)+'</a>';
	}
	else if (pagenumber == 4){
		document.getElementById('link_13').outerHTML = '<a class="lia-js-data-pageNum-4 lia-link-navigation lia-custom-event" id="link_13" href="2">2</a>';
        document.getElementById('link_82').outerHTML = '<a class="lia-js-data-pageNum-4 lia-link-navigation lia-custom-event" id="link_82" href="2">2</a>';
	}
}
else {
	var elems = document.getElementsByClassName('lia-link-navigation lia-js-data-pageNum-'+(pagenumber-1)+' lia-custom-event');
	var j;
	for (j=0; j<elems.length; ++j){
		if(elems[j].innerHTML.indexOf('Previous') != -1){
			elems[j].outerHTML = '<a class="lia-link-navigation lia-js-data-pageNum-'+(pagenumber-1)+' lia-custom-event" rel="prev" id="link_11" href='+(pagenumber2-1)+'>\
			<span>\
					<span class="lia-paging-page-arrow">&#171;</span>\
				\
				<span class="lia-paging-page-link">Previous</span>\
			</span>\
		</a>';
		}
		else elems[j].outerHTML = '<a class="lia-js-data-pageNum-'+(pagenumber-1)+' lia-link-navigation lia-custom-event" id="link_15" href='+(pagenumber-1)+'>'+(pagenumber-1)+'</a>';
	}
	elems = document.getElementsByClassName('lia-link-navigation lia-js-data-pageNum-'+(pagenumber-2)+' lia-custom-event');
	for (j=0; j<elems.length; ++j){
		elems[j].outerHTML = '<a class="lia-js-data-pageNum-'+(pagenumber-2)+' lia-link-navigation lia-custom-event" id="link_16" href='+(pagenumber-2)+'>'+(pagenumber-2)+'</a>';
    }
    elems = document.getElementsByClassName('lia-js-data-pageNum-1 lia-link-navigation lia-custom-event');
    for (j=0; j<elems.length; ++j){
        elems[j].outerHTML = '<a class="lia-js-data-pageNum-1 lia-link-navigation lia-custom-event" id="link_12" href="'+pagenumber3+'">1</a>';
	}
}	
