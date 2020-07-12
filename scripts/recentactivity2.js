var url = "https://kotos.fandom.com/api.php?action=query&list=recentchanges&format=json&rcprop=user|comment|title|timestamp|loginfo|ids";
$.get(url, function(response1) {
    console.log(response1);
    var json1 = response1.json();
    url = "https://poa.fandom.com/api.php?action=query&list=recentchanges&format=json&rcprop=user|comment|title|timestamp"
    $.get(url, function(response2)) {
      console.log(response2);
      var json2 = response2.json();
      for (i=9; i>-1; --i) {
          edit = json1.query.recentchanges[i];
          var baseurl = "https://kotos.fandom.com/wiki/"
          var sprite;
          var image;
          var title;
          var isTalk = false;
          var isBoard = false;
          var isCategory = false;
          switch(edit.type){
              case "new":
              if (edit.title.indexOf("Talk:") != -1) {
                  sprite = "talk";
                  image = "discussion";
                  title = "discussion page";
                  isTalk = true;
              }
              else if (edit.title.indexOf("Board Thread:") != -1) { //not working right
                  sprite = "talk";
                  image = "discussion";
                  title = "discussion page";
                  isBoard = true;
              }
              else {
                  sprite = "new";
                  image = "newpage";
                  title = "new page";
              }
              break;
              case "edit":
              if (edit.comment == "Adding categories") { //not working right
                  sprite = "categorization";
                  image = "categorization";
                  title = "categorization page";
                  isCategory = true;
              }
              else {
                  sprite = image = title = "edit";
              }
              break;
              case "log": break;
              default: break;
          }
      }
  }

}
'<li class="activity-type-talk activity-ns-' + edit.ns + '">\n' +
'\t<img class="'+ sprite +' sprite" src="../images/'+ image +'.png" alt="'+ title'" title="'+ title +'">\n' +
'<strong><a class="title" href="'+ baseurl + edit.title +'">'+ edit.title.split('/@comment')[0] +'</a></strong>' +
'<br/>' +




/*<li class="activity-type-talk activity-ns-1">
    <img class="talk sprite" src="../images/discussion.png" alt="discussion page" title="discussion page">
    <strong><a class="title" href="https://kotos.fandom.com/wiki/Talk:Teaser_Shorts/@comment-27324808-20200604201001/@comment-28549248-20200604202920">Talk:Teaser Shorts</a></strong>
	<br>
	<cite><span class="subtle">new comment by <a href="https://kotos.fandom.com/wiki/User:Wiz_Ardon,_the_Peculiar_Enchanter" rel="nofollow">Wiz Ardon, the Peculiar Enchanter</a> 18 hours ago</span></cite>
	<table>
	   <tbody><tr data-type="new-article-comment"><td class="activityfeed-details-label"><em class="dark_text_2">Comment</em>: </td><td>It's after the 10 heroes and after the 3rd short. There are some identifying elements that make it apparent it is after those, but you need knowlege...</td></tr></tbody></table>
</li>*/


  var activity0 = response.split('<div id="wikiactivity-main" data-type="activity">');
  var activity = activity0[1].split('<div class="activity-feed-more"><a href="#" data-since="2019-05-07T19:36:13Z">see more recent activity</a></div>');
  entries = activity[0].split('</table>\n											</li>');
  var toadd = "";
  for (i=0; i<10; ++i){
      if(entries[i].indexOf('href="/wiki') != -1){
          var temp = entries[i].split('href="/wiki');
		  var str = "";
		  for (j=0; j<temp.length-1; ++j) {
			  str += temp[j] + 'href="https://kotos.fandom.com/wiki';
		  }
          entries[i] = str +temp[temp.length-1];
      }
	  if(entries[i].indexOf('talk sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="discussion page" title="discussion page" width="16" height="16"');
		  entries[i] = temp[0] + '../images/discussion.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  if(entries[i].indexOf('edit sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="edit" title="edit" width="16" height="16"');
		  entries[i] = temp[0] + '../images/edit.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  if(entries[i].indexOf('new sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="new page" title="new page" width="16" height="16"');
		  entries[i] = temp[0] + '../images/newpage.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  if(entries[i].indexOf('categorization sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="categorization" title="categorization" width="16" height="16"');
		  entries[i] = temp[0] + '../images/categorization.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  /* Need to implement new image and video sprite addition*/
	  if(entries[i].indexOf('Added photo') != -1){
		  var patt = new RegExp(/width="[0-9]{3}" height="[0-9]{3}"/);
		  var res = patt.exec(entries[i]);
		  var temp = entries[i].split('"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" '+ res +' data-image-name=');
		  var temp2 = temp[1].split('data-src=');
		  var temp3 = temp2[1].split(' class=');
		  entries[i] = temp[0] + temp3[0] + ' ' + res + ' data-image-name=' + temp2[0] + 'data-src=' + temp3[0] + ' class=' + temp3[1];
	  }
      toadd += (entries[i]+"</table>\n											</li><hr/><br/>\n");
  }
  toadd += "</ul>\n";
  document.getElementById('kotos-activity').innerHTML = toadd;
  /*var links = document.getElementsByTagName('a').outerHTML;
  for (i = 0; i<links.length; ++i){
      if(links.indexOf('href="wiki') != -1){
          var elem = links[i].split('href="wiki');
          links[i] = elem[0]+'href="https://kotos.fandom.com/wiki'+elem[1];
      }
  }*/
});

var url = "https://cors-anywhere.herokuapp.com/https://poaseries.fandom.com/wiki/Special:WikiActivity";
$.get(url, function(response) {
  console.log(response);
  var activity0 = response.split('<div id="wikiactivity-main" data-type="activity">');
  var activity = activity0[1].split('<div class="activity-feed-more"><a href="#" data-since="2019-05-07T19:36:13Z">see more recent activity</a></div>');
  entries = activity[0].split('</table>\n											</li>');
  var toadd = "";
  for (i=0; i<7; ++i){
      if(entries[i].indexOf('href="/wiki') != -1){
          var temp = entries[i].split('href="/wiki');
		  var str = "";
		  for (j=0; j<temp.length-1; ++j) {
			  str += temp[j] + 'href="https://poaseries.fandom.com/wiki';
		  }
          entries[i] = str +temp[temp.length-1];
      }
	  if(entries[i].indexOf('talk sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="discussion page" title="discussion page" width="16" height="16"');
		  entries[i] = temp[0] + '../images/discussion.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  if(entries[i].indexOf('edit sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="edit" title="edit" width="16" height="16"');
		  entries[i] = temp[0] + '../images/edit.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  if(entries[i].indexOf('new sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="new page" title="new page" width="16" height="16"');
		  entries[i] = temp[0] + '../images/newpage.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  if(entries[i].indexOf('categorization sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="categorization" title="categorization" width="16" height="16"');
		  entries[i] = temp[0] + '../images/categorization.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  /* Need to implement new image and video sprite addition*/
	  if(entries[i].indexOf('Added photo') != -1){
		  var temp = entries[i].split('"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="150" height="150" data-image-name=');
		  var temp2 = temp[1].split('data-src=');
		  var temp3 = temp2[1].split(' class=');
		  entries[i] = temp[0] + temp3[0] + ' width="150" height="150" data-image-name=' + temp2[0] + 'data-src=' + temp3[0] + ' class=' + temp3[1];
	  }
      toadd += (entries[i]+"</table>\n											</li><hr/><br/>\n");
  }
  toadd += "</ul>\n";
  document.getElementById('poa-activity').innerHTML = toadd;
  /*var links = document.getElementsByTagName('a').outerHTML;
  for (i = 0; i<links.length; ++i){
      if(links.indexOf('href="wiki') != -1){
          var elem = links[i].split('href="wiki');
          links[i] = elem[0]+'href="https://poaseries.fandom.com/wiki'+elem[1];
      }
  }*/
});

var url = "https://cors-anywhere.herokuapp.com/https://talmidstories.fandom.com/wiki/Special:WikiActivity";
$.get(url, function(response) {
  console.log(response);
  var activity0 = response.split('<div id="wikiactivity-main" data-type="activity">');
  var activity = activity0[1].split('<div class="activity-feed-more"><a href="#" data-since="2019-05-07T19:36:13Z">see more recent activity</a></div>');
  entries = activity[0].split('</table>\n											</li>');
  var toadd = "";
  for (i=0; i<5; ++i){
      if(entries[i].indexOf('href="/wiki') != -1){
          var temp = entries[i].split('href="/wiki');
		  var str = "";
		  for (j=0; j<temp.length-1; ++j) {
			  str += temp[j] + 'href="https://talmidstories.fandom.com/wiki';
		  }
          entries[i] = str +temp[temp.length-1];
      }
	  if(entries[i].indexOf('talk sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="discussion page" title="discussion page" width="16" height="16"');
		  entries[i] = temp[0] + '../images/discussion.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  if(entries[i].indexOf('edit sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="edit" title="edit" width="16" height="16"');
		  entries[i] = temp[0] + '../images/edit.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  if(entries[i].indexOf('new sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="new page" title="new page" width="16" height="16"');
		  entries[i] = temp[0] + '../images/newpage.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  if(entries[i].indexOf('categorization sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="categorization" title="categorization" width="16" height="16"');
		  entries[i] = temp[0] + '../images/categorization.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  /* Need to implement new image and video sprite addition*/
	  if(entries[i].indexOf('Added photo') != -1){
		  var temp = entries[i].split('"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="150" height="150" data-image-name=');
		  var temp2 = temp[1].split('data-src=');
		  var temp3 = temp2[1].split(' class=');
		  entries[i] = temp[0] + temp3[0] + ' width="150" height="150" data-image-name=' + temp2[0] + 'data-src=' + temp3[0] + ' class=' + temp3[1];
	  }
      toadd += (entries[i]+"</table>\n											</li><hr/><br/>\n");
  }
  toadd += "</ul>\n";
  document.getElementById('talmid-activity').innerHTML = toadd;
  /*var links = document.getElementsByTagName('a').outerHTML;
  for (i = 0; i<links.length; ++i){
      if(links.indexOf('href="wiki') != -1){
          var elem = links[i].split('href="wiki');
          links[i] = elem[0]+'href="https://poaseries.fandom.com/wiki'+elem[1];
      }
  }*/
});

var url = "https://cors-anywhere.herokuapp.com/https://shadow-book-stories.fandom.com/wiki/Special:WikiActivity";
$.get(url, function(response) {
  console.log(response);
  var activity0 = response.split('<div id="wikiactivity-main" data-type="activity">');
  var activity = activity0[1].split('<div class="activity-feed-more"><a href="#" data-since="2019-05-07T19:36:13Z">see more recent activity</a></div>');
  entries = activity[0].split('</table>\n											</li>');
  var toadd = "";
  for (i=0; i<3; ++i){
      if(entries[i].indexOf('href="/wiki') != -1){
          var temp = entries[i].split('href="/wiki');
		  var str = "";
		  for (j=0; j<temp.length-1; ++j) {
			  str += temp[j] + 'href="https://shadow-book-stories.fandom.com/wiki';
		  }
          entries[i] = str +temp[temp.length-1];
      }
	  if(entries[i].indexOf('talk sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="discussion page" title="discussion page" width="16" height="16"');
		  entries[i] = temp[0] + '../images/discussion.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  if(entries[i].indexOf('edit sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="edit" title="edit" width="16" height="16"');
		  entries[i] = temp[0] + '../images/edit.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  if(entries[i].indexOf('new sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="new page" title="new page" width="16" height="16"');
		  entries[i] = temp[0] + '../images/newpage.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  if(entries[i].indexOf('categorization sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="categorization" title="categorization" width="16" height="16"');
		  entries[i] = temp[0] + '../images/categorization.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  /* Need to implement new image and video sprite addition*/
	  if(entries[i].indexOf('Added photo') != -1){
		  var temp = entries[i].split('"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="150" height="150" data-image-name=');
		  var temp2 = temp[1].split('data-src=');
		  var temp3 = temp2[1].split(' class=');
		  entries[i] = temp[0] + temp3[0] + ' width="150" height="150" data-image-name=' + temp2[0] + 'data-src=' + temp3[0] + ' class=' + temp3[1];
	  }
      toadd += (entries[i]+"</table>\n											</li><hr/><br/>\n");
  }
  toadd += "</ul>\n";
  document.getElementById('sb-activity').innerHTML = toadd;
  /*var links = document.getElementsByTagName('a').outerHTML;
  for (i = 0; i<links.length; ++i){
      if(links.indexOf('href="wiki') != -1){
          var elem = links[i].split('href="wiki');
          links[i] = elem[0]+'href="https://poaseries.fandom.com/wiki'+elem[1];
      }
  }*/
});

var url = "https://cors-anywhere.herokuapp.com/https://chanora-and-the-cod.fandom.com/wiki/Special:WikiActivity";
$.get(url, function(response) {
  console.log(response);
  var activity0 = response.split('<div id="wikiactivity-main" data-type="activity">');
  var activity = activity0[1].split('<div class="activity-feed-more"><a href="#" data-since="2019-05-07T19:36:13Z">see more recent activity</a></div>');
  entries = activity[0].split('</table>\n											</li>');
  var toadd = "";
  for (i=0; i<3; ++i){
      if(entries[i].indexOf('href="/wiki') != -1){
          var temp = entries[i].split('href="/wiki');
		  var str = "";
		  for (j=0; j<temp.length-1; ++j) {
			  str += temp[j] + 'href="https://chanora-and-the-cod.fandom.com/wiki';
		  }
          entries[i] = str +temp[temp.length-1];
      }
	  if(entries[i].indexOf('talk sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="discussion page" title="discussion page" width="16" height="16"');
		  entries[i] = temp[0] + '../images/discussion.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  if(entries[i].indexOf('edit sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="edit" title="edit" width="16" height="16"');
		  entries[i] = temp[0] + '../images/edit.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  if(entries[i].indexOf('new sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="new page" title="new page" width="16" height="16"');
		  entries[i] = temp[0] + '../images/newpage.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  if(entries[i].indexOf('categorization sprite') != -1){
		  var temp = entries[i].split('data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"  alt="categorization" title="categorization" width="16" height="16"');
		  entries[i] = temp[0] + '../images/categorization.png" alt="discussion page" title="discussion page"' + temp[1];
	  }
	  /* Need to implement new image and video sprite addition*/
	  if(entries[i].indexOf('Added photo') != -1){
		  var temp = entries[i].split('"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="150" height="150" data-image-name=');
		  var temp2 = temp[1].split('data-src=');
		  var temp3 = temp2[1].split(' class=');
		  entries[i] = temp[0] + temp3[0] + ' width="150" height="150" data-image-name=' + temp2[0] + 'data-src=' + temp3[0] + ' class=' + temp3[1];
	  }
      toadd += (entries[i]+"</table>\n											</li><hr/><br/>\n");
  }
  toadd += "</ul>\n";
  document.getElementById('chanora-activity').innerHTML = toadd;
  /*var links = document.getElementsByTagName('a').outerHTML;
  for (i = 0; i<links.length; ++i){
      if(links.indexOf('href="wiki') != -1){
          var elem = links[i].split('href="wiki');
          links[i] = elem[0]+'href="https://poaseries.fandom.com/wiki'+elem[1];
      }
  }*/
});
