(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{103:function(n,e,t){"use strict";t.r(e);var i=t(93),o={components:{"ribbon-js":t.n(i).a}},c=t(2),a=Object(c.a)(o,(function(){var n=this.$createElement;return(this._self._c||n)("div")}),[],!1,null,"7375a9b0",null);e.default=a.exports},93:function(n,e){!function(){function n(n,e,t){return Number(n.getAttribute(e))||t}var e=document.getElementsByTagName("script"),t=e[e.length-1];config={z:n(t,"zIndex",0),a:n(t,"alpha",.8),s:n(t,"size",90)};var i,o,c=document.createElement("canvas"),a=c.getContext("2d"),l=window.devicePixelRatio||1,r=window.innerWidth,s=window.innerHeight,d=config.s,u=Math,f=0,h=2*u.PI,g=u.cos,p=u.random;function m(){for(a.clearRect(0,0,r,s),i=[{x:0,y:.7*s+d},{x:0,y:.7*s-d}];i[1].x<r+d;)w(i[0],i[1])}function w(n,e){a.beginPath(),a.moveTo(n.x,n.y),a.lineTo(e.x,e.y);var t=e.x+(2*p()-.25)*d,c=function n(e){return(o=e+(2*p()-1.1)*d)>s||o<0?n(e):o}(e.y);a.lineTo(t,c),a.closePath(),f-=h/-50,a.fillStyle="#"+(127*g(f)+128<<16|127*g(f+h/3)+128<<8|127*g(f+h/3*2)+128).toString(16),a.fill(),i[0]=i[1],i[1]={x:t,y:c}}c.width=r*l,c.height=s*l,a.scale(l,l),a.globalAlpha=config.a,c.style.cssText="opacity: "+config.a+";position:fixed;top:0;left:0;z-index: "+config.z+";width:100%;height:100%;pointer-events:none;",document.getElementsByTagName("body")[0].appendChild(c),document.onclick=m,document.ontouchstart=m,m()}()}}]);