// Create crossbrowser DOM ready event
var domEvent = (function(window, document, undefined) {
	
    window.LEGO = {};
    window.pageName = '';
    window.siteCulture;
    
    window.textKudo = mbGlobals.textKudo;
    window.textKudoed = mbGlobals.textKudoed;
    
	var readyCallbacks = [];
    var currentURL = document.URL;
    
    
    var initTrackingVars = function() {
        if (mbGlobals.pageLang === 'de') {
            window.siteCulture = 'de-DE';
        }
        else {
            window.siteCulture = 'en-US';
            
            if (mbGlobals.cookieLang != 'none'){
                window.siteCulture = mbGlobals.cookieLang;
            }
        }
    };
    
    
    // Get the pagelang from the pages context
    var parsePageLang = function() {
        switch (mbGlobals.pageName) {
            case 'FaqPage':
                window.pageName = 'forumfaq';     
                break;
            
            case 'SearchPage':
                window.pageName = 'searchresults';
                
                if (mbGlobals.advancedSearch === 'true') {
                    window.pageName = 'advancedsearch';            
                }
                break;
            
            case 'ViewProfilePage':
                window.pageName = 'otherprofile';
        
                if (mbGlobals.myProfile === 'true') {
                    window.pageName = 'myprofile';            
                }
                break;
            
            case 'MyProfilePage':
                window.pageName = 'editmyprofile';                  

                if(currentURL.indexOf('/user/myprofilepage/tab/user-icons') != -1){
                    window.pageName = 'avatarmyprofile';
                }
                break
            
            case 'CategoryPage':
                window.pageName = 'category';    
                break;
            
            case 'PostPage':
                window.pageName = 'post';
                break;
            
            case 'ReplyPage':
                window.pageName = 'reply';
                break;
        
            case 'TagDetailPage':
                if (currentURL.indexOf('tag-cloud-grouping/tag') != -1) {
                    window.pageName = 'populartags';
                }
                break;
        
            case 'PrivateNotesPage':
                if (currentURL.indexOf('tab/outbox') != -1) {
                    window.pageName = 'privatesent';
                }
                else if (currentURL.indexOf('tab/contacts') != -1) {
                    window.pageName = 'privatefriends';
                }
                else if (currentURL.indexOf('tab/ignored') != -1) {
                    window.pageName = 'privateignoredusers';
                }
                else if (currentURL.indexOf('tab/compose') != -1) {
                    window.pageName = 'privatecompose';
                }
                else {
                    window.pageName = 'privateinbox';
                }
                break;
        
            case 'ReplyPage':
                window.pageName = 'leaderboards';
                break;
        }
    };
	
	var init = function() {
        
        initTrackingVars();
        parsePageLang();
        
		if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', function(e) {
				fireEvents(e);
			});
		}
		else if (document.attachEvent) {
			document.attachEvent('onreadystatechange', function (e) {
			    if (document.readyState === 'interactive') {
					fireEvents(e);
			    }
			});
		}
	};
    
    var initOnDocumentLoad = function() {
        parseBodyGlobals();      
    }
    
    window.addEventListener('load', function() {
        if (mbGlobals.userRegistered) {
            window.bindLinksModalOverlay();
        }
        
        $('.ghcboxElement').click(function(){
          $('#ghcolorbox').show();
        });
    });
	
	var cleanUp = function(e) {
		if (e.target) {
			if (e.target.removeEventListener) {
				e.target.removeEventListener('DOMContentLoaded', e.callee);
			}
		}
		
		readyCallbacks = undefined;
	};
	
	var fireEvents = function(e) {
		var c = readyCallbacks.shift(); 
		
		while (c) {
			if (typeof c === 'function') {
				c();
			}
			
			c = readyCallbacks.shift();
		}
		
		cleanUp(e);
	};
	
	var ready = function(callback) {
		if (callback && typeof callback === 'function') {
			readyCallbacks.push(callback);
		}
	};
	
	

    // Attach assets to header and body
    var createExternalAssets = function(asset, type, destination) {

        if (asset.env && asset.env !== 'global') {
            if (mbGlobals.devBlock === 'true') {
                return;
            }
            else if (mbGlobals.devMode !== 'true' && asset.env === 'local') {
                return;
            }
        }

        if (asset.lang && asset.lang !== mbGlobals.pageLang) {
            return;
        }

        if (asset.type === 'dynamic') {
            var a = asset.src.split('{{');
            if (a.length > 1) {
                var b = a[1].split('}}');
            }

            if (mbGlobals[b[0]] === '') {
                return;
            }

            asset.src = a[0] + mbGlobals[b[0]] + b[1];
        }

        if (type === 'js') {
            var fileref = document.createElement('script');
            fileref.setAttribute('type', 'text/javascript');

            if (asset.attr) {
                fileref.setAttribute(asset.attr.name, asset.attr.value);
            }
            fileref.async = false;
            fileref.src = asset.src;
        }
        else if (type === 'css') {
            var fileref = document.createElement("link");
            fileref.setAttribute('rel', 'stylesheet');
            fileref.setAttribute('type', 'text/css');
            fileref.setAttribute('href', asset.src);
        }

        if (typeof fileref !== 'undefined') {
            destination.appendChild(fileref);
        }
    }

    var parseBodyGlobals = function() {
        var i;
        var body = document.querySelector('body');

        for (i = 0; i < mbGlobals.bodyJs.length; ++i) {
            createExternalAssets(mbGlobals.bodyJs[i], 'js', body);
        }
    };

    var parseHeaderGlobals = function() {
        var i;
        var head = document.querySelector('head');

        for (i = 0; i < mbGlobals.css.length; ++i) {
            createExternalAssets(mbGlobals.css[i], 'css', head);
        }

        for (i = 0; i < mbGlobals.js.length; ++i) {
            createExternalAssets(mbGlobals.js[i], 'js', head);
        }
    };

    parseHeaderGlobals();
    
    init();
	
	return {
		ready: ready,
        initOnDocumentLoad: initOnDocumentLoad
	};		
})(window, document);

domEvent.ready(domEvent.initOnDocumentLoad);