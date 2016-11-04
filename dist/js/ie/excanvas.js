document.createElement("canvas").getContext||!function(){function t(){return this.context_||(this.context_=new x(this))}function e(t,e,i){var r=Y.call(arguments,2);return function(){return t.apply(e,r.concat(Y.call(arguments)))}}function i(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function r(t,e,i){t.namespaces[e]||t.namespaces.add(e,i,"#default#VML")}function n(t){if(r(t,"g_vml_","urn:schemas-microsoft-com:vml"),r(t,"g_o_","urn:schemas-microsoft-com:office:office"),!t.styleSheets.ex_canvas_){var e=t.createStyleSheet();e.owningElement.id="ex_canvas_",e.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"}}function a(t){var e=t.srcElement;switch(t.propertyName){case"width":e.getContext().clearRect(),e.style.width=e.attributes.width.nodeValue+"px",e.firstChild.style.width=e.clientWidth+"px";break;case"height":e.getContext().clearRect(),e.style.height=e.attributes.height.nodeValue+"px",e.firstChild.style.height=e.clientHeight+"px"}}function s(t){var e=t.srcElement;e.firstChild&&(e.firstChild.style.width=e.clientWidth+"px",e.firstChild.style.height=e.clientHeight+"px")}function o(){return[[1,0,0],[0,1,0],[0,0,1]]}function l(t,e){for(var i=o(),r=0;r<3;r++)for(var n=0;n<3;n++){for(var a=0,s=0;s<3;s++)a+=t[r][s]*e[s][n];i[r][n]=a}return i}function h(t,e){e.fillStyle=t.fillStyle,e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.lineWidth=t.lineWidth,e.miterLimit=t.miterLimit,e.shadowBlur=t.shadowBlur,e.shadowColor=t.shadowColor,e.shadowOffsetX=t.shadowOffsetX,e.shadowOffsetY=t.shadowOffsetY,e.strokeStyle=t.strokeStyle,e.globalAlpha=t.globalAlpha,e.font=t.font,e.textAlign=t.textAlign,e.textBaseline=t.textBaseline,e.arcScaleX_=t.arcScaleX_,e.arcScaleY_=t.arcScaleY_,e.lineScale_=t.lineScale_}function c(t){var e=t.indexOf("(",3),i=t.indexOf(")",e+1),r=t.substring(e+1,i).split(",");return 4==r.length&&"a"==t.charAt(3)||(r[3]=1),r}function u(t){return parseFloat(t)/100}function d(t,e,i){return Math.min(i,Math.max(e,t))}function f(t){var e,i,r,n,a,s;if(n=parseFloat(t[0])/360%360,n<0&&n++,a=d(u(t[1]),0,1),s=d(u(t[2]),0,1),0==a)e=i=r=s;else{var o=s<.5?s*(1+a):s+a-s*a,l=2*s-o;e=_(l,o,n+1/3),i=_(l,o,n),r=_(l,o,n-1/3)}return"#"+H[Math.floor(255*e)]+H[Math.floor(255*i)]+H[Math.floor(255*r)]}function _(t,e,i){return i<0&&i++,i>1&&i--,6*i<1?t+6*(e-t)*i:2*i<1?e:3*i<2?t+(e-t)*(2/3-i)*6:t}function p(t){if(t in j)return j[t];var e,i=1;if(t=String(t),"#"==t.charAt(0))e=t;else if(/^rgb/.test(t)){for(var r,n=c(t),e="#",a=0;a<3;a++)r=n[a].indexOf("%")!=-1?Math.floor(255*u(n[a])):+n[a],e+=H[d(r,0,255)];i=+n[3]}else if(/^hsl/.test(t)){var n=c(t);e=f(n),i=n[3]}else e=V[t]||t;return j[t]={color:e,alpha:i}}function y(t){if(U[t])return U[t];var e=document.createElement("div"),i=e.style;try{i.font=t}catch(r){}return U[t]={style:i.fontStyle||G.style,variant:i.fontVariant||G.variant,weight:i.fontWeight||G.weight,size:i.fontSize||G.size,family:i.fontFamily||G.family}}function g(t,e){var i={};for(var r in t)i[r]=t[r];var n=parseFloat(e.currentStyle.fontSize),a=parseFloat(t.size);return"number"==typeof t.size?i.size=t.size:t.size.indexOf("px")!=-1?i.size=a:t.size.indexOf("em")!=-1?i.size=n*a:t.size.indexOf("%")!=-1?i.size=n/100*a:t.size.indexOf("pt")!=-1?i.size=a/.75:i.size=n,i.size*=.981,i}function m(t){return t.style+" "+t.variant+" "+t.weight+" "+t.size+"px "+t.family}function F(t){return J[t]||"square"}function x(t){this.m_=o(),this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.strokeStyle="#000",this.fillStyle="#000",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this.miterLimit=1*N,this.globalAlpha=1,this.font="10px sans-serif",this.textAlign="left",this.textBaseline="alphabetic",this.canvas=t;var e="width:"+t.clientWidth+"px;height:"+t.clientHeight+"px;overflow:hidden;position:absolute",i=t.ownerDocument.createElement("div");i.style.cssText=e,t.appendChild(i);var r=i.cloneNode(!1);r.style.backgroundColor="red",r.style.filter="alpha(opacity=0)",t.appendChild(r),this.element_=i,this.arcScaleX_=1,this.arcScaleY_=1,this.lineScale_=1}function v(t,e,i,r){t.currentPath_.push({type:"bezierCurveTo",cp1x:e.x,cp1y:e.y,cp2x:i.x,cp2y:i.y,x:r.x,y:r.y}),t.currentX_=r.x,t.currentY_=r.y}function E(t,e){var i=p(t.strokeStyle),r=i.color,n=i.alpha*t.globalAlpha,a=t.lineScale_*t.lineWidth;a<1&&(n*=a),e.push("<g_vml_:stroke",' opacity="',n,'"',' joinstyle="',t.lineJoin,'"',' miterlimit="',t.miterLimit,'"',' endcap="',F(t.lineCap),'"',' weight="',a,'px"',' color="',r,'" />')}function A(t,e,i,r){var n=t.fillStyle,a=t.arcScaleX_,s=t.arcScaleY_,o=r.x-i.x,l=r.y-i.y;if(n instanceof D){var h=0,c={x:0,y:0},u=0,d=1;if("gradient"==n.type_){var f=n.x0_/a,_=n.y0_/s,y=n.x1_/a,g=n.y1_/s,m=w(t,f,_),F=w(t,y,g),x=F.x-m.x,v=F.y-m.y;h=180*Math.atan2(x,v)/Math.PI,h<0&&(h+=360),h<1e-6&&(h=0)}else{var m=w(t,n.x0_,n.y0_);c={x:(m.x-i.x)/o,y:(m.y-i.y)/l},o/=a*N,l/=s*N;var E=B.max(o,l);u=2*n.r0_/E,d=2*n.r1_/E-u}var A=n.colors_;A.sort(function(t,e){return t.offset-e.offset});for(var b=A.length,C=A[0].color,k=A[b-1].color,T=A[0].alpha*t.globalAlpha,R=A[b-1].alpha*t.globalAlpha,M=[],I=0;I<b;I++){var z=A[I];M.push(z.offset*d+u+" "+z.color)}e.push('<g_vml_:fill type="',n.type_,'"',' method="none" focus="100%"',' color="',C,'"',' color2="',k,'"',' colors="',M.join(","),'"',' opacity="',R,'"',' g_o_:opacity2="',T,'"',' angle="',h,'"',' focusposition="',c.x,",",c.y,'" />')}else if(n instanceof S){if(o&&l){var P=-i.x,O=-i.y;e.push("<g_vml_:fill",' position="',P/o*a*a,",",O/l*s*s,'"',' type="tile"',' src="',n.src_,'" />')}}else{var L=p(t.fillStyle),Y=L.color,X=L.alpha*t.globalAlpha;e.push('<g_vml_:fill color="',Y,'" opacity="',X,'" />')}}function w(t,e,i){var r=t.m_;return{x:N*(e*r[0][0]+i*r[1][0]+r[2][0])-L,y:N*(e*r[0][1]+i*r[1][1]+r[2][1])-L}}function b(t){return isFinite(t[0][0])&&isFinite(t[0][1])&&isFinite(t[1][0])&&isFinite(t[1][1])&&isFinite(t[2][0])&&isFinite(t[2][1])}function C(t,e,i){if(b(e)&&(t.m_=e,i)){var r=e[0][0]*e[1][1]-e[0][1]*e[1][0];t.lineScale_=O(P(r))}}function D(t){this.type_=t,this.x0_=0,this.y0_=0,this.r0_=0,this.x1_=0,this.y1_=0,this.r1_=0,this.colors_=[]}function S(t,e){switch(T(t),e){case"repeat":case null:case"":this.repetition_="repeat";break;case"repeat-x":case"repeat-y":case"no-repeat":this.repetition_=e;break;default:k("SYNTAX_ERR")}this.src_=t.src,this.width_=t.width,this.height_=t.height}function k(t){throw new R(t)}function T(t){t&&1==t.nodeType&&"IMG"==t.tagName||k("TYPE_MISMATCH_ERR"),"complete"!=t.readyState&&k("INVALID_STATE_ERR")}function R(t){this.code=this[t],this.message=t+": DOM Exception "+this.code}var B=Math,M=B.round,I=B.sin,z=B.cos,P=B.abs,O=B.sqrt,N=10,L=N/2,Y=(+navigator.userAgent.match(/MSIE ([\d.]+)?/)[1],Array.prototype.slice);n(document);var X={init:function(t){var i=t||document;i.createElement("canvas"),i.attachEvent("onreadystatechange",e(this.init_,this,i))},init_:function(t){for(var e=t.getElementsByTagName("canvas"),i=0;i<e.length;i++)this.initElement(e[i])},initElement:function(e){if(!e.getContext){e.getContext=t,n(e.ownerDocument),e.innerHTML="",e.attachEvent("onpropertychange",a),e.attachEvent("onresize",s);var i=e.attributes;i.width&&i.width.specified?e.style.width=i.width.nodeValue+"px":e.width=e.clientWidth,i.height&&i.height.specified?e.style.height=i.height.nodeValue+"px":e.height=e.clientHeight}return e}};X.init();for(var H=[],W=0;W<16;W++)for(var q=0;q<16;q++)H[16*W+q]=W.toString(16)+q.toString(16);var V={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},j={},G={style:"normal",variant:"normal",weight:"normal",size:10,family:"sans-serif"},U={},J={butt:"flat",round:"round"},Z=x.prototype;Z.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null),this.element_.innerHTML=""},Z.beginPath=function(){this.currentPath_=[]},Z.moveTo=function(t,e){var i=w(this,t,e);this.currentPath_.push({type:"moveTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},Z.lineTo=function(t,e){var i=w(this,t,e);this.currentPath_.push({type:"lineTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},Z.bezierCurveTo=function(t,e,i,r,n,a){var s=w(this,n,a),o=w(this,t,e),l=w(this,i,r);v(this,o,l,s)},Z.quadraticCurveTo=function(t,e,i,r){var n=w(this,t,e),a=w(this,i,r),s={x:this.currentX_+2/3*(n.x-this.currentX_),y:this.currentY_+2/3*(n.y-this.currentY_)},o={x:s.x+(a.x-this.currentX_)/3,y:s.y+(a.y-this.currentY_)/3};v(this,s,o,a)},Z.arc=function(t,e,i,r,n,a){i*=N;var s=a?"at":"wa",o=t+z(r)*i-L,l=e+I(r)*i-L,h=t+z(n)*i-L,c=e+I(n)*i-L;o!=h||a||(o+=.125);var u=w(this,t,e),d=w(this,o,l),f=w(this,h,c);this.currentPath_.push({type:s,x:u.x,y:u.y,radius:i,xStart:d.x,yStart:d.y,xEnd:f.x,yEnd:f.y})},Z.rect=function(t,e,i,r){this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath()},Z.strokeRect=function(t,e,i,r){var n=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath(),this.stroke(),this.currentPath_=n},Z.fillRect=function(t,e,i,r){var n=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath(),this.fill(),this.currentPath_=n},Z.createLinearGradient=function(t,e,i,r){var n=new D("gradient");return n.x0_=t,n.y0_=e,n.x1_=i,n.y1_=r,n},Z.createRadialGradient=function(t,e,i,r,n,a){var s=new D("gradientradial");return s.x0_=t,s.y0_=e,s.r0_=i,s.x1_=r,s.y1_=n,s.r1_=a,s},Z.drawImage=function(t,e){var i,r,n,a,s,o,l,h,c=t.runtimeStyle.width,u=t.runtimeStyle.height;t.runtimeStyle.width="auto",t.runtimeStyle.height="auto";var d=t.width,f=t.height;if(t.runtimeStyle.width=c,t.runtimeStyle.height=u,3==arguments.length)i=arguments[1],r=arguments[2],s=o=0,l=n=d,h=a=f;else if(5==arguments.length)i=arguments[1],r=arguments[2],n=arguments[3],a=arguments[4],s=o=0,l=d,h=f;else{if(9!=arguments.length)throw Error("Invalid number of arguments");s=arguments[1],o=arguments[2],l=arguments[3],h=arguments[4],i=arguments[5],r=arguments[6],n=arguments[7],a=arguments[8]}var _=w(this,i,r),p=[],y=10,g=10;if(p.push(" <g_vml_:group",' coordsize="',N*y,",",N*g,'"',' coordorigin="0,0"',' style="width:',y,"px;height:",g,"px;position:absolute;"),1!=this.m_[0][0]||this.m_[0][1]||1!=this.m_[1][1]||this.m_[1][0]){var m=[];m.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",M(_.x/N),",","Dy=",M(_.y/N),"");var F=_,x=w(this,i+n,r),v=w(this,i,r+a),E=w(this,i+n,r+a);F.x=B.max(F.x,x.x,v.x,E.x),F.y=B.max(F.y,x.y,v.y,E.y),p.push("padding:0 ",M(F.x/N),"px ",M(F.y/N),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",m.join(""),", sizingmethod='clip');")}else p.push("top:",M(_.y/N),"px;left:",M(_.x/N),"px;");p.push(' ">','<g_vml_:image src="',t.src,'"',' style="width:',N*n,"px;"," height:",N*a,'px"',' cropleft="',s/d,'"',' croptop="',o/f,'"',' cropright="',(d-s-l)/d,'"',' cropbottom="',(f-o-h)/f,'"'," />","</g_vml_:group>"),this.element_.insertAdjacentHTML("BeforeEnd",p.join(""))},Z.stroke=function(t){for(var e=10,i=10,r=5e3,n={x:null,y:null},a={x:null,y:null},s=0;s<this.currentPath_.length;s+=r){var o=[];o.push("<g_vml_:shape",' filled="',!!t,'"',' style="position:absolute;width:',e,"px;height:",i,'px;"',' coordorigin="0,0"',' coordsize="',N*e,",",N*i,'"',' stroked="',!t,'"',' path="');for(var l=s;l<Math.min(s+r,this.currentPath_.length);l++){l%r==0&&l>0&&o.push(" m ",M(this.currentPath_[l-1].x),",",M(this.currentPath_[l-1].y));var h,c=this.currentPath_[l];switch(c.type){case"moveTo":h=c,o.push(" m ",M(c.x),",",M(c.y));break;case"lineTo":o.push(" l ",M(c.x),",",M(c.y));break;case"close":o.push(" x "),c=null;break;case"bezierCurveTo":o.push(" c ",M(c.cp1x),",",M(c.cp1y),",",M(c.cp2x),",",M(c.cp2y),",",M(c.x),",",M(c.y));break;case"at":case"wa":o.push(" ",c.type," ",M(c.x-this.arcScaleX_*c.radius),",",M(c.y-this.arcScaleY_*c.radius)," ",M(c.x+this.arcScaleX_*c.radius),",",M(c.y+this.arcScaleY_*c.radius)," ",M(c.xStart),",",M(c.yStart)," ",M(c.xEnd),",",M(c.yEnd))}c&&((null==n.x||c.x<n.x)&&(n.x=c.x),(null==a.x||c.x>a.x)&&(a.x=c.x),(null==n.y||c.y<n.y)&&(n.y=c.y),(null==a.y||c.y>a.y)&&(a.y=c.y))}o.push(' ">'),t?A(this,o,n,a):E(this,o),o.push("</g_vml_:shape>"),this.element_.insertAdjacentHTML("beforeEnd",o.join(""))}},Z.fill=function(){this.stroke(!0)},Z.closePath=function(){this.currentPath_.push({type:"close"})},Z.save=function(){var t={};h(this,t),this.aStack_.push(t),this.mStack_.push(this.m_),this.m_=l(o(),this.m_)},Z.restore=function(){this.aStack_.length&&(h(this.aStack_.pop(),this),this.m_=this.mStack_.pop())},Z.translate=function(t,e){var i=[[1,0,0],[0,1,0],[t,e,1]];C(this,l(i,this.m_),!1)},Z.rotate=function(t){var e=z(t),i=I(t),r=[[e,i,0],[-i,e,0],[0,0,1]];C(this,l(r,this.m_),!1)},Z.scale=function(t,e){this.arcScaleX_*=t,this.arcScaleY_*=e;var i=[[t,0,0],[0,e,0],[0,0,1]];C(this,l(i,this.m_),!0)},Z.transform=function(t,e,i,r,n,a){var s=[[t,e,0],[i,r,0],[n,a,1]];C(this,l(s,this.m_),!0)},Z.setTransform=function(t,e,i,r,n,a){var s=[[t,e,0],[i,r,0],[n,a,1]];C(this,s,!0)},Z.drawText_=function(t,e,r,n,a){var s=this.m_,o=1e3,l=0,h=o,c={x:0,y:0},u=[],d=g(y(this.font),this.element_),f=m(d),_=this.element_.currentStyle,p=this.textAlign.toLowerCase();switch(p){case"left":case"center":case"right":break;case"end":p="ltr"==_.direction?"right":"left";break;case"start":p="rtl"==_.direction?"right":"left";break;default:p="left"}switch(this.textBaseline){case"hanging":case"top":c.y=d.size/1.75;break;case"middle":break;default:case null:case"alphabetic":case"ideographic":case"bottom":c.y=-d.size/2.25}switch(p){case"right":l=o,h=.05;break;case"center":l=h=o/2}var F=w(this,e+c.x,r+c.y);u.push('<g_vml_:line from="',-l,' 0" to="',h,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!a,'" stroked="',!!a,'" style="position:absolute;width:1px;height:1px;">'),a?E(this,u):A(this,u,{x:-l,y:0},{x:h,y:d.size});var x=s[0][0].toFixed(3)+","+s[1][0].toFixed(3)+","+s[0][1].toFixed(3)+","+s[1][1].toFixed(3)+",0,0",v=M(F.x/N)+","+M(F.y/N);u.push('<g_vml_:skew on="t" matrix="',x,'" ',' offset="',v,'" origin="',l,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',i(t),'" style="v-text-align:',p,";font:",i(f),'" /></g_vml_:line>'),this.element_.insertAdjacentHTML("beforeEnd",u.join(""))},Z.fillText=function(t,e,i,r){this.drawText_(t,e,i,r,!1)},Z.strokeText=function(t,e,i,r){this.drawText_(t,e,i,r,!0)},Z.measureText=function(t){if(!this.textMeasureEl_){var e='<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';this.element_.insertAdjacentHTML("beforeEnd",e),this.textMeasureEl_=this.element_.lastChild}var i=this.element_.ownerDocument;return this.textMeasureEl_.innerHTML="",this.textMeasureEl_.style.font=this.font,this.textMeasureEl_.appendChild(i.createTextNode(t)),{width:this.textMeasureEl_.offsetWidth}},Z.clip=function(){},Z.arcTo=function(){},Z.createPattern=function(t,e){return new S(t,e)},D.prototype.addColorStop=function(t,e){e=p(e),this.colors_.push({offset:t,color:e.color,alpha:e.alpha})};var Q=R.prototype=new Error;Q.INDEX_SIZE_ERR=1,Q.DOMSTRING_SIZE_ERR=2,Q.HIERARCHY_REQUEST_ERR=3,Q.WRONG_DOCUMENT_ERR=4,Q.INVALID_CHARACTER_ERR=5,Q.NO_DATA_ALLOWED_ERR=6,Q.NO_MODIFICATION_ALLOWED_ERR=7,Q.NOT_FOUND_ERR=8,Q.NOT_SUPPORTED_ERR=9,Q.INUSE_ATTRIBUTE_ERR=10,Q.INVALID_STATE_ERR=11,Q.SYNTAX_ERR=12,Q.INVALID_MODIFICATION_ERR=13,Q.NAMESPACE_ERR=14,Q.INVALID_ACCESS_ERR=15,Q.VALIDATION_ERR=16,Q.TYPE_MISMATCH_ERR=17,G_vmlCanvasManager=X,CanvasRenderingContext2D=x,CanvasGradient=D,CanvasPattern=S,DOMException=R}();