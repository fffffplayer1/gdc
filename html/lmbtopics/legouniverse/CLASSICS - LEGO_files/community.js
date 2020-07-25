/* TrackMan */
var TrackingHelper = {
  getChannelName: function (path)
  {
    if(pageName != "" && pageName != "reply" && pageName != "post" && pageName != "category")
    {
      return pageName;
    }

    var split = path.split("/");
    var channel = "";
    if(split[2]){
      channel = split[2].replace("Category:","").replace(/[^a-zA-Z 0-9]+/g,'').toLowerCase().replace(/\s/g, "");      
    }
    if (channel != "")
      return channel;
    return "homepage";
  },
	getBoardName: function (path)
  {
    var split = path.split("/");
    var board = "";
    if(split[3]){
      board = split[3].replace("Board:","").replace(/[^a-zA-Z 0-9]+/g,'').toLowerCase().replace(/\s/g, "");      
    }

    if (board != "")
    {
      if (pageName != "")
        return board + ':' + pageName;
      return board;
    }
    return "overview";
  },
  /*categoryName: function (path)
	{	
		if(pageName != "" && pageName != "reply" && pageName != "post" && pageName != "category")				
      if (pageName.indexOf(":") == -1)
        return pageName + ":overview";
      else
        return pageName;
	
		var split = path.split("/");
	
		var category = "";
		if(split[2]){
			category = split[2].replace("Category:","").replace(/[^a-zA-Z 0-9]+/g,'');			
		}		
		
		var board = "";
		if(split[3]){
			board = ":" + split[3].replace("Board:","").replace(/[^a-zA-Z 0-9]+/g,'');			
		}
		
		var categoryboard = (category + board).toLowerCase().replace(/\s/g, "");
		
		if(categoryboard != ""){
			if(pageName != "")
			  return categoryboard + ":" + pageName;
			  
			return categoryboard;
		}
		else{
			return "homepage:overview";				
	    }
				
	},*/
	getPostName: function (path)
	{
		var split = path.split("/");
		
		var message = "";
		if(split[4]){
		   message = split[4].replace("Message:","").toLowerCase().replace(/\s/g, "");
		   message = message.replace(/[^a-zA-Z 0-9]+/g,'');
		}
    else if (split[3]){
		   message = split[3].replace("Blog:","").toLowerCase().replace(/\s/g, "");
		   message = message.replace(/[^a-zA-Z 0-9]+/g,'');
    }
		
		return message;
	}
}

TrackMan.useModule([TrackMan.Modules.BasicTracking, TrackMan.Modules.MessageBoardTracking], function success(basicTracking, messageBoardTracking) {
  var path = LITHIUM.CommunityJsonObject.WebTracking.path;
  //var categoryName = TrackingHelper.categoryName(path);
  var postName = TrackingHelper.getPostName(path);
  var boardName = TrackingHelper.getBoardName(path);
  var channelName = TrackingHelper.getChannelName(path);

  /*console.log('siteCulture: ' + siteCulture);
  console.log('path: ' + path);
  console.log('pageName: ' + pageName);
  console.log('categoryName: ' + categoryName);
  console.log('channelName: ' + channelName);
  console.log('boardName: ' + boardName);
  console.log('postName: ' + postName);*/

  basicTracking.setContentCulture(siteCulture);
  basicTracking.setChannel('messageboards', channelName);
  basicTracking.trackPage(boardName, postName);
  
  if (LITHIUM.CommunityJsonObject.WebTracking.Activities.UserMessageEvent == "tracking.message.new") {
    messageBoardTracking.addPost();
  }

  $('.lia-button-image-kudos-enabled .kudos-link, .lia-button-image-kudos-enabled .lia-button-image-kudos-simple').click(function () {
    messageBoardTracking.likePost();
    $(this).text(textKudoed);
  });
  $('.lia-button-image-kudos-enabled .lia-button-image-kudos-simple').click(function () {
    messageBoardTracking.likePost();
    $(this).text(textKudoed);
  });
  $('.lia-button-image-kudos .lia-button-image-kudos-horizontal .lia-button-image-kudos-enabled .lia-button-image-kudos-not-kudoed .lia-button .lia-button-image-kudos-give').click(function () {
    messageBoardTracking.likePost();
    $(this).text(textKudoed);
  });
  $('.polls .lia-button-Submit-action').click(function(){   
    messageBoardTracking.pollVote($('.polls .lia-poll-summary .lia-text').text().trim().toLowerCase().replace(/[^a-zA-Z 0-9]+/g,'').replace(/\s/g, ""));
  });

  $('.lia-quilt-blog-article-page .lia-button-wrapper-Submit-action').click(function () {
    messageBoardTracking.replyToPost();
  });
  
  $('.ReplyPage .lia-button-wrapper-Submit-action .lia-button-Submit-action').click(function () {
    messageBoardTracking.replyToPost();
  });

  $('.lia-message-quick-reply .lia-button-wrapper-Submit-action .lia-button-Submit-action').click(function () {
    messageBoardTracking.replyToPost();
  });
});
