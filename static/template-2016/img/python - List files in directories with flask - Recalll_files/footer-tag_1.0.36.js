var console=(window.console)?window.console:{log:function(){},debug:function(){},error:function(){}};(function(){try{var b=document.createElement("meta");b.name="X-UA-Compatible";b.content="IE=edge";document.getElementsByTagName("head")[0].appendChild(b)}catch(a){}})();window.getComputedStyle=window.getComputedStyle||function(a,b){this.el=a;this.getPropertyValue=function(d){var c=/(\-([a-z]){1})/g;if(d=="float"){d="styleFloat"}if(c.test(d)){d=d.replace(c,function(){return arguments[2].toUpperCase()})}return a.currentStyle[d]?a.currentStyle[d]:null};return this};String.prototype.capitalize=function(){return this.toLowerCase().replace(/^.|\s\S/g,function(b){return b.toUpperCase()})};Object.keys=Object.keys||function(c){var a=[];for(var b in c){if(c.hasOwnProperty(b)){a.push(b)}}return a};Date.prototype.toISOString=Date.prototype.toISOString||function(){function a(b){if(b<10){return"0"+b}return b}return this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"."+(this.getUTCMilliseconds()/1000).toFixed(3).slice(2,5)+"Z"};window.alrt=window.alert;window.alert=function(a){};var ___rhpt_tmp___=Math.round(new Date().getTime()/(24*3600*1000));window["rhpt"+___rhpt_tmp___]={orig:function(){},isRH:false};try{if(_$("rh")==="rh"){window["rhpt"+___rhpt_tmp___].isRH=true}else{window["rhpt"+___rhpt_tmp___].orig=_$}}catch(er){}window.alert=window.alrt;try{delete window.alrt}catch(er){}var _$=(_$&&window["rhpt"+___rhpt_tmp___].isRH)?_$:function(w,d){if(w==="rh"){return"rh"}var l,n=[];if(w===window){l=window}else{if(w===document){l=document}else{if(typeof(w)=="object"){l=w}else{if(w.indexOf(".")!==-1||w.indexOf(" ")!==-1||w.indexOf(":")!==-1){l=document.querySelectorAll(w)}else{if(w.indexOf("#")!==-1){try{l=document.querySelector(w)}catch(c){l=document.getElementById(w.replace("#",""))}}else{l=document.getElementsByTagName(w)}}}}}try{if(l.length===d){n.push(l)}else{n=l}}catch(c){n=l}if(w!==window&&w!==document&&n&&typeof(n[0])!=="object"){try{return window["rhpt"+___rhpt_tmp___].orig(w)}catch(y){}}var i=(w===window)?1:((n===null)?0:n.length);function u(D){try{return D.replace(/^\s*/,"").replace(/\s*$/,"").replace(/\s{2,}/," ")}catch(E){}return D}var g=function(H,F,G){var E=[];for(var D=0;D<i;D++){w=n[D];if(F!==G){w.style[H]=u(F)}E.push(w.style[H])}return(F===G)?((E.length>1)?E:E[0]):this};var r=function(H,F,G){var E=[];for(var D=0;D<i;D++){w=n[D];if(F!==G){w.setAttribute(H,u(F))}E.push(w.getAttribute(H))}return(F===G)?((E.length>1)?E:E[0]):this};var h=function(F,G){var E=[];for(var D=0;D<i;D++){w=n[D];if(F!==G){w.innerHTML=u(F)}E.push(w.innerHTML)}return(F===G)?((E.length>1)?E:E[0]):this};var s=function(E){try{return n[0]}catch(D){}return E};var v=function(E,G){for(var D=0;D<i;D++){w=n[D];try{w.appendChild(E)}catch(F){}}return this};var z=function(E,G){for(var D=0;D<i;D++){w=n[D];try{w.insertBefore(E,w.childNodes[0])}catch(F){}}return this};var A=function(F){for(var D=0;D<i;D++){w=n[D];try{w.parentNode.removeChild(w)}catch(E){}}return this};var C=function(F,G){var E=[];for(var D=0;D<i;D++){w=n[D];if(F!==G){w.value=u(F)}E.push(w.value)}return(F===G)?((E.length>1)?E:E[0]):this};var o=function(){for(var D=0;D<i;D++){w=n[D];w.focus()}};var f=function(){for(var D=0;D<i;D++){w=n[D];w.style.display="none"}return this};var x=function(E){for(var D=0;D<i;D++){w=n[D];if(w.style.display==="none"||w.style.display===""){w.style.display=(E===d)?"inline-block":E}else{if(w.style.visibility==="hidden"){w.style.visibility="visible"}}}return this};var q=function(E,F){for(var D=0;D<i;D++){w=n[D];if(w.style.display==="none"){w.style.display=(E===F)?"inline-block":E}else{w.style.display="none"}}return this};var m=function(D){for(var E=0;E<i;E++){w=n[E];if(w.className!==""){if(w.className===D){w.className=""}else{w.className=w.className.replace(" "+D,"").replace(D+" ","");w.className=u(w.className)}}}return this};var j=function(D,F){for(var E=0;E<i;E++){w=n[E];if(w.className!==D&&w.className.indexOf(" "+D)===-1&&w.className.indexOf(D+" ")===-1){w.className=w.className+" "+D;w.className=u(w.className)}}return this};var t=(function(){var F="";function I(){return F}function G(K,J){K.style.opacity=J/100;K.style.filter="alpha(opacity="+J+")"}function E(){for(var J=0;J<i;J++){w=n[J];G(w,0);w.style.display="block";for(var J=1;J<=100;J++){setTimeout((function(K){return function(){G(w,K)}})(J),J*10)}F="in"}return this}function H(K){for(var J=0;J<i;J++){K=n[J];var L=-1;for(var J=100;J>=0;J--){L++;setTimeout((function(M){return function(){G(K,M)}})(J),L*5)}setTimeout(function(){K.style.display="none"},1000);F="out"}return this}function D(J){if(F=="in"){H(J)}else{E(J)}return this}return{show:E,hide:H,toggle:D}})();var b=function(O,E,H,R){var F=5;if(H=="slow"){F=10}else{if(H=="fast"){F=3}}function S(W){var V=0;var U=0;while(W&&!isNaN(W.offsetLeft)&&!isNaN(W.offsetTop)){V+=W.offsetLeft-W.scrollLeft;U+=W.offsetTop-W.scrollTop;W=W.offsetParent}return{top:U,left:V}}for(var K=0;K<i;K++){w=n[K];w.style.position=(w.style.position==="fixed")?"fixed":"absolute";var L=0,J=false;var N=S(w).top;var P=S(w).right;var D=S(w).bottom;var G=S(w).left;try{if(O==="up"){if(typeof(N)=="undefined"){N=window.innerHeight-D-w.offsetHeight}L=(D<0)?D:N}if(O==="right"){if(typeof(P)=="undefined"){P=window.innerWidth-G-w.offsetWidth}L=(G<0)?G:P}if(O==="down"){if(typeof(D)=="undefined"){D=window.innerHeight-N-w.offsetHeight}L=(N<0)?N:D}if(O==="left"){if(typeof(G)=="undefined"){G=window.innerWidth-P-w.offsetWidth}L=(P<0)?P:G}}catch(I){}var T=L,M=0;for(var K=0;K<E;K++){setTimeout(function(){M=(L-T);if(M<E){if(O==="up"){w.style.bottom="";w.style.top=N;if(D<0){L++;w.style.bottom=L+"px"}else{L--;w.style.top=L+"px"}}if(O==="right"){w.style.left="";w.style.right=P;if(G<0){console.log("+");L++;w.style.left=L+"px"}else{L--;w.style.right=L+"px"}}if(O==="down"){w.style.top="";w.style.bottom=D;if(N<0){L++;w.style.top=L+"px"}else{L--;w.style.bottom=L+"px"}}if(O==="left"){w.style.right="";w.style.left=G;if(P<0){L++;w.style.right=L+"px"}else{L--;w.style.left=L+"px"}}}},K*F)}w.style.position="fixed";try{setTimeout(R,(K+1)*F)}catch(Q){}}return this};var B=function(F,M,L){var D="__readycb_"+new Date().getTime()+"__";window[D]=window[D]||false;for(var J=0;J<i;J++){var G=(w===window)?window:n[J],E=G.addEventListener||G.attachEvent,I=G.removeEventListener||G.detachEvent,K;if(F==="ready"){K=document.addEventListener?"DOMContentLoaded":"onreadystatechange"}else{K=document.addEventListener?F:"on"+F}if(G===document&&F==="ready"){if(document.readyState==="complete"||document.readyState==="loaded"||document.readyState==="interactive"){if(!window[D]){M(G,F);window[D]=true}return}}L=L||false;try{E.call(G,K,function(O){if(G===document&&O==="ready"){try{I(K,arguments.callee,L)}catch(N){}if(!window[D]){M(G,O);window[D]=true}}else{M(G,O)}},L)}catch(H){G.attachEvent(K,function(O){if(G===document&&O==="ready"){try{I(K,arguments.callee,L)}catch(N){}if(!window[D]){M(G,O);window[D]=true}}else{M(G,O)}},L)}if(G===document&&F==="ready"){E.call(window,(document.addEventListener?"load":"onload"),function(O){if(!window[D]){M(G,O);window[D]=true}try{I(K,arguments.callee,L)}catch(N){}},false)}}return this};var p=function(E,D){B("click",E,(D||false));return this};var k=function(E,D){B("ready",E,(D||false));return this};var e=function(E,D){B("load",E,(D||false));return this};var a=function(E){for(var D=0;D<i;D++){w=n[D];E(w)}return this};return{hide:f,show:x,toggle:q,removeClass:m,addClass:j,css:g,val:C,focus:o,html:h,node:s,append:v,prepend:z,remove:A,bind:B,click:p,ready:k,load:e,each:a,fadeIn:t.show,fadeOut:t.hide,fadeToggle:t.toggle,animate:b,attr:r}};var _options=_$rh.BANNER_WRAPPER_FOOTER.pop();(function(){try{var b=document.createElement("meta");b.name="X-UA-Compatible";b.content="IE=edge";document.getElementsByTagName("head")[0].appendChild(b)}catch(a){}})();String.prototype.capitalize=function(){return this.toLowerCase().replace(/^.|\s\S/g,function(b){return b.toUpperCase()})};Object.keys=Object.keys||function(c){var a=[];for(var b in c){if(c.hasOwnProperty(b)){a.push(b)}}return a};Date.prototype.toISOString=Date.prototype.toISOString||function(){function a(b){if(b<10){return"0"+b}return b}return this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"."+(this.getUTCMilliseconds()/1000).toFixed(3).slice(2,5)+"Z"};(function(){var a=function(){var d=navigator.userAgent.toLowerCase();var c={webkit:/webkit/.test(d),mozilla:(/mozilla/.test(d))&&(!/(compatible|webkit)/.test(d)),chrome:/chrome/.test(d)&&!(/(opera|opr)/.test(d)),edge:/edge/.test(d),msie:((/msie/.test(d)||/trident/.test(d)||!!window.MSStream)&&!/opera/.test(d)),firefox:/firefox/.test(d),safari:(/safari/.test(d)&&!(/chrome/.test(d))),opera:/opera/.test(d),mobile:/mobile|ipod|iphone|ipad|ios|android|webos|blackberry/i.test(d),tablet:/tablet/i.test(d)};c.version=(c.safari)?(d.match(/.+(?:ri)[\/: ]([\d.]+)/)||[])[1]:(d.match(/.+(?:ox|me|ra|ie)[\/: ]([\d.]+)/)||[])[1];return c}();var b=_options.cid.toUpperCase();_rhw.addCSS("#rhfrm_footer_"+b+" { display: none; }");_rhw.docReady(function(e){var i=false;if(a.mobile&&!a.tablet){var l=function(){var m="box-shadow:0 0 5px #808080;border-top:1px solid #ccc;background:#fff;";m+="position:fixed;left:0;";m+="top:"+(window.innerHeight-(Math.ceil((90/728)*window.innerWidth))+_rhw.getScrollTop())+"px;";m+="z-index:2147483647;border:0;overflow:hidden;border-spacing:0;";m+="width:100%;height:"+Math.ceil((90/728)*window.innerWidth)+"px";return m},g=document.createElement("div");g.id="rh-bnr-wrp_"+b;g.style.cssText=l();try{document.body.appendChild(g)}catch(f){document.documentElement.appendChild(g)}_rhw.unitReady("#rhfrm_footer_"+b,function(){try{_$("#rh-bnr-wrp_"+b).append(_$("#rhfrm_footer_"+b).node());i=true}catch(m){}if(!i){return}_$("#rhfrm_footer_"+b).attr("width","100%");_$("#rhfrm_footer_"+b).attr("height","100%");_$("#rhfrm_footer_"+b).attr("style","width:100%;height:100%;border:0;margin:0;padding:0;display:block");_$("#rh-bnr-wrp_"+b).show();setTimeout(function(){g.style.top=(window.innerHeight-_rhw.getNumericHeight(g))+"px";_$("#rhfrm_footer_"+b).show()},1000);_$(window).bind("resize",function(){g.style.top=(window.innerHeight-_rhw.getNumericHeight(g))+"px"});window.addEventListener("scroll",function(n){g.style.top=(window.innerHeight-_rhw.getNumericHeight(g))+"px"})});return}try{_$("#rhw_footer_css").remove()}catch(j){}var h="https:"!==document.location.protocol;var c=_rhw.detectCDN(_options.cid,h)+"banners/footer/footer_03.css";_rhw.addCSS(c,"rhw_footer_css");try{_$("#rhw_footer").remove()}catch(j){}var g=document.createElement("div");g.id="rhw_footer";g.style.display="none";try{document.body.appendChild(g)}catch(f){document.documentElement.appendChild(g)}var d=(_options.size?"rhw_dispunit_"+_options.size:"rhw_dispunit_728x90");var k='<div id="rhw_closed"><a href="#"></a></div><div id="rhw_opened"><a href="#" id="rhw_minimize"></a><form id="rhw_search" action="http://www.google.com/search" method="get" target="search"><input name="cid" type="hidden" value="'+b+'"><input name="q" type="text" placeholder="web search"></form><div id="rhw_share"><a class="rhw_twitter" href="#"></a><a class="rhw_facebook" href="#"></a><a class="rhw_gplus" href="#"></a><div class="rhw_clear"></div></div><div id="rhw_dispunit" class="rhw_dispunit_common '+d+'"><div id="rh-bnr-wrp_'+b+'"></div></div></div><div class="rhw_clear"></div>';_$("#rhw_footer").html(k);i=false;_rhw.unitReady("#rhfrm_footer_"+b,function(){try{_$("#rh-bnr-wrp_"+b).append(_$("#rhfrm_footer_"+b).node());i=true}catch(n){}if(!i){return}var o=document.title||"";if(o!==""){o+=" - "}_$(".rhw_twitter").attr("href","https://twitter.com/home?status="+encodeURIComponent(o+document.URL));_$(".rhw_facebook").attr("href","https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(document.URL));_$(".rhw_gplus").attr("href","https://plus.google.com/share?url="+encodeURIComponent(document.URL));_$(".rhw_twitter").bind("click",function(){_rhw.popDialog(_$(".rhw_twitter").attr("href"),"Share on Twitter",560,420,true)});_$(".rhw_facebook").bind("click",function(){_rhw.popDialog(_$(".rhw_facebook").attr("href"),"Share on Facebook",560,420,true)});_$(".rhw_gplus").bind("click",function(){_rhw.popDialog(_$(".rhw_gplus").attr("href"),"Share on Google",500,400,true)});var m=(window.outerWidth||window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth);_$("#rhw_footer").show();if(m<1220||navigator.userAgent.indexOf("MSIE 8")!==-1){_$("#rhw_search").hide();_$("#rhw_share").hide()}_$(window).bind("resize",function(){var p=(window.outerWidth||window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth);_$("#rhw_footer").show();if(p<1220||navigator.userAgent.indexOf("MSIE 8")!==-1){_$("#rhw_search").hide();_$("#rhw_share").hide()}else{_$("#rhw_search").show();_$("#rhw_share").show()}});setTimeout(function(){_$("#rhfrm_footer_"+b).show();_$("#rhw_opened").show();_$("#rhw_opened").fadeIn("fast");if(navigator.userAgent.indexOf("MSIE 8")!==-1){document.getElementById("rhw_dispunit").style.bottom="5px";document.getElementById("rhw_dispunit").style.border="1px solid #666"}else{_$("#rhw_dispunit").animate("up",105,"medium",function(){_$("#rhw_dispunit").attr("style","").css("bottom","5px")})}},1000);_$("#rhw_minimize").bind("click",function(){if(navigator.userAgent.indexOf("MSIE 8")!==-1){_$("#rhw_footer").hide()}_$("#rhw_opened").animate("down",80,"fast");_$("#rhw_dispunit").animate("down",105,"fast");_$("#rhw_closed").fadeIn();setTimeout(function(){_$("#rhw_opened").attr("style","").hide();_$("#rhw_dispunit").attr("style","")},1000);_rhw.overrideAction()});_$("#rhw_closed a").bind("click",function(){_$("#rhw_closed").animate("down",80,"fast",function(){_$("#rhw_closed").attr("style","").hide()});_$("#rhw_opened").show();_$("#rhw_opened").fadeIn("fast");_$("#rhw_dispunit").animate("up",105,"medium",function(){_$("#rhw_dispunit").attr("style","").css("bottom","5px")});_rhw.overrideAction()})},60)})})();