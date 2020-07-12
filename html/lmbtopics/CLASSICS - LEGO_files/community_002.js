;(function($) {
	$('.browse-forum').each(function() {
		var button = $(this); //the button to activate the dropdown
        var dropdown = $(this).find('.browse-forum-dropdown'); //the dropdown content itself

        var categories = $(this).find('ul ul').hide(); //the seperate categories
        dropdown.hide(); //hide them


        if(/(iphone|ipod|ipad)/.test(navigator.userAgent.toLowerCase())) {
            button = button.find('div.browse-forum-button');
            button.toggle(
                function() {dropdown.show();},
                function() {dropdown.hide()}
            ); //show the content on button click
        } else {

            button.hover(
                function() {

                    dropdown.show();
                },
                function() {dropdown.hide()}
            ); //show the content on button hover
        }


        var headings = $(this).find('div.category-title');

        headings.each(function(index) {
            var el = $(this);
            var text = $(this).text().replace(' Category', '').replace(' Kategorie', '');
            
            $(this).text(text);

            el.css({'cursor':'pointer'}).click(function() {
                el.siblings('ul').slideToggle('fast');

            });
        });
		
		
	});
})(jQuery);

;(function($) {
    $('.ForumTopicPage .kudos-link').text(textKudo);
    $('.ForumTopicPage .lia-button-image-kudos-not-kudoed .kudos-link.lia-link-disabled').text(textKudo);
    $('.ForumTopicPage .lia-button-image-kudos-kudoed .kudos-link.lia-link-disabled').text(textKudoed);
    $('.BlogPage .kudos-link').text(textKudo);
    $('.BlogPage .lia-button-image-kudos-not-kudoed .kudos-link.lia-link-disabled').text(textKudo);
    $('.BlogPage .lia-button-image-kudos-kudoed .kudos-link.lia-link-disabled').text(textKudoed);
    $('.BlogArticlePage .kudos-link').text(textKudo);
    $('.BlogArticlePage .lia-button-image-kudos-not-kudoed .kudos-link.lia-link-disabled').text(textKudo);
    $('.BlogArticlePage .lia-button-image-kudos-kudoed .kudos-link.lia-link-disabled').text(textKudoed);
})(jQuery);

;(function($) {
    $('.BreadCrumb ul li.lia-breadcrumb-seperator').each(function() {
        $(this).text(' > ');
    });
    
    $('#lia-body .lia-content .message-list>div').each(function(index) {
        if(index%2) {
            $(this).addClass('odd-row');
        } else {
            $(this).addClass('even-row');
        }
    })
})(jQuery);


;(function($) {
  $('.expand').expander({
    // the number of characters at which the contents will be sliced into two parts.
    slicePoint: 0,

    // whether to keep the last word of the summary whole (true) or let it slice in the middle of a word (false)
    preserveWords: true,

    // widow: a threshold of sorts for whether to initially hide/collapse part of the element's contents.
    // If after slicing the contents in two there are fewer words in the second part than
    // the value set by widow, we won't bother hiding/collapsing anything.
    widow: 0,

    // text displayed in a link instead of the hidden part of the element.
    // clicking this will expand/show the hidden/collapsed text
    expandText: '+',
    expandPrefix: '... ',


    // number of milliseconds after text has been expanded at which to collapse the text again.
    // when 0, no auto-collapsing
    collapseTimer: 0,

    // effects for expanding and collapsing
    expandEffect: 'slideDown',
    expandSpeed: 250,
    collapseEffect: 'slideUp',
    collapseSpeed: 200,

    // allow the user to re-collapse the expanded text.
    userCollapse: true,

    // text to use for the link to re-collapse the text
    userCollapseText: '-',
    userCollapsePrefix: ' ',


    // all callback functions have the this keyword mapped to the element in the jQuery set when .expander() is called

    onSlice: null, // function() {}
    beforeExpand: null, // function() {},
    afterExpand: null, // function() {},
    onCollapse: null // function(byUser) {}
  });
})(jQuery);

function bindLinksModalOverlay() {
    var linkUrl = $('a[href*="signin.aspx"]').attr('href');
    if (typeof linkUrl === "undefined")
        linkUrl = $('a[href*="/login"]').attr('href');
    if (typeof linkUrl === "undefined")
    {
        setTimeout(function(){ bindLinksModalOverlay(); }, 500);
        return;
    }

    var baseLinkUrl = linkUrl.replace(/%3freferrer=.*/gi, '%3freferrer=');
    var selectors = 'a.reply-action-link,a.report-abuse-link,a.kudos-link,span.message-reply a.lia-button-primary,span.message-post a.lia-button-primary';
    $(selectors).each(function () {
      var currentUrl = $(this).attr('href');
      if (currentUrl.match(/^\//))
        currentUrl = location.protocol + '//' + location.host + currentUrl;
      $(this).attr('href', baseLinkUrl + encodeURIComponent(currentUrl));
    });

    $(selectors).bind('mousedown',
    function () {
        hideFlash();
        window.allowIframe = true;
    }).ghcolorbox({
        iframe: true,
        width: 890,
        height: 595,
        speed: 300,
        transition: "elastic",
        overlayClose: false,
        initialWidth: 45,
        initialHeight: 30,
        opacity: 0.75,
        arrowKey: false,
        onClosed: (typeof showFlash !== 'undefined') ? showFlash : undefined,
        scrolling: false
    });
    $(selectors).click(function(){
        $(window).scrollTop(0);
        $('#ghcolorbox').show();
    });
}

$(document).ready(function() {
     $('.lia-panel-feedback-inline-note').append($('.lego-inline-feedback'));
});