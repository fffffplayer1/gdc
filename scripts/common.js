var dots = '';
if (String(location.href.split("/").slice(-2, -1)) != 'html'){ dots = '../'; }
document.getElementById('head').innerHTML = document.getElementById('head').innerHTML +  "<link rel='icon' href='"+dots+"../images/SwordandQuill.ico' type='image/x-icon'/>\
<meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>\
<meta name='keywords' content='GDC, General Discussion Coalition, KOTOS, KotOS, Knights of the Olde Speech, LEGO, Wikis, stories, story, LU, LEGO Universe, LEGO Universe Story, books, LMB, LEGO Message Boards, LMB Archives, Talmid, fffffplayer1, Jonna, Samlooploop, Ninjago_Builders, Thingguy2, Thingguy, Haroldosaur, Lukey3449, Grongringro, Sharpie, EthanWS, theo-dog, Stirling'></meta><meta name='author' content='fffffplayer1 / Figroth Felanor'></meta>";
document.getElementById('navbar').innerHTML ='  <a href="'+dots+'index.html">Home</a>\
<div class="dropdown"><button class="dropbtn" onclick="visitLink1()" onmouseover="navbarLink(this)" onmouseout="navbarLinkOut(this)">Wikis</button>\
<div class="dropdown-content">  \
<a href="http://kotos.wikia.com/wiki/Knights_of_the_Olde_Speech_Wikia">Knights of the Olde Speech</a>   \
<a href="http://poaseries.wikia.com/wiki/Power_of_Ages_Wiki">Power of Ages</a>  \
<a href="http://shadow-book-stories.wikia.com/wiki/The_Shadow_Book_Wiki">Shadow Book</a> \
<a href="http://chanora-and-the-cod.wikia.com/wiki/Chanora_and_the_C.O.D_Wiki">Chanora and the C.O.D.</a>  \
<a href="http://talmidstories.wikia.com/wiki/Captain%27s_Blog,_Stardate_Whatever_Wiki">Leek Works</a> </div>  \
</div>\
<div class="dropdown">  <button class="dropbtn" onclick="visitLink2()" onmouseover="navbarLink(this)" onmouseout="navbarLinkOut(this)">LMB Archives</button>      \
<div class="dropdown-content">    \
<a href="'+dots+'lmbtopics/legouniverse/1">LEGO Universe</a>    \
<a href="'+dots+'lmbtopics/bionicle">Old Bionicle Roleplay</a>    \
<a href="'+dots+'lmbtopics/classics.html">Classics</a>    \
<a href="#">Coming Soon (Maybe)</a>  \
</div> </div> \
<a href="'+dots+'members.html">Members</a>\
<a href="'+dots+'FAQ.html">FAQ</a>\
<a href="'+dots+'about.html">About</a>	 </div>';
document.getElementById('header').innerHTML = '<center><a href="'+dots+'index.html"><img src="'+dots+'../images/GDC.png" alt="GDC" style="width:140px;height:117px;"></a></center>';

function visitLink1(){
	window.location.href = dots+'wikis.html';
}
function visitLink2(){
	window.location.href = dots+'lmbarchives.html';
}
function navbarLink(elem){
	elem.classList.toggle('hover-nav-link');
}
function navbarLinkOut(elem){
	elem.classList.remove('hover-nav-link');
}
