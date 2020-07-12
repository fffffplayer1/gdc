var url = "https://cors-anywhere.herokuapp.com/https://kotos.fandom.com/wiki/Special:WikiActivity";
$.get(url, function(response) {
  console.log(response);
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