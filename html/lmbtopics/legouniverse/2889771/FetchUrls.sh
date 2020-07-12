#!/bin/bash
url=https://community.lego.com/t5/LEGO-UNIVERSE/Knights-of-Old-Speech-Talk-Forum/td-p/2889771

wget $url

p=2

while [ $p -lt 636 ];
do
	wget $url/page/$p
	echo got page $p
	p=`expr $p + 1`
done
<script src="../../../../scripts/jammer.js"></script>
<script src="../../../../scripts/ttopiclinks.js"></script>
<script src="../../../../scripts/ttopicimg.js"></script>