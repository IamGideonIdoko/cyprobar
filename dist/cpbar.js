parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aRcH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.draw=void 0;var e=function(e,t){var a,o;return a=Number(parseFloat(e).toFixed(1)),o=Number(parseFloat(t).toFixed(1)),a>=0&&a<=o?817-a/o*817:a<0?817:0},t=function(e,t){return Number(parseFloat(e).toFixed(1))>=0&&Number(parseFloat(e).toFixed(1))<=Number(parseFloat(t).toFixed(1))?Number(parseFloat(e).toFixed(1)):Number(parseFloat(e).toFixed(1))<0?0:Number(parseFloat(t).toFixed(1))},a=function(e){var t=["background: red","border: 1px solid black","color: white","display: block","font-weight: bold","font-size: 14px","text-align: center"].join(";");console.log("%c Cpbar.js Error😭: ".concat(e),t)},o=function(e){var t="";return e.forEach(function(e){t+='<stop offset="'.concat(e[1],'%" stop-color="').concat(e[0],'" /> ')}),t},r=function(r){if(null==r)a("Pls, pass an object of preferences to draw().");else{var n=function(e){return null==r[e]?{elementClass:null,barSize:200,barBgColor:"grey",barBgOpacity:"0",setText:"CBP",useText:!1,value:0,valueUnit:"%",valueColor:"black",valueFont:"monospace",valueFontSize:"60",valueOpacity:"1",maxValue:100,indicatorSize:"15",indicatorColor:"black",indicatorCap:"acute-square",trackSize:15,trackColor:"#eee",setGradient:[["rgba(0, 0, 0, 1)",0],["rgba(0, 0, 0, 0.5)",50],["rgba(0, 0, 0, 0.2)",100]]}[e]:r[e]};try{var c=document.querySelector(".".concat(n("elementClass")));if(null==c)throw"Could not find any DOM element, pls check the given elementClass and argument passed to draw().";c.innerHTML='\n                <svg width="'.concat(n("barSize")<=1e3?n("barSize"):200,'" height="').concat(n("barSize")<=1e3?n("barSize"):200,'" viewBox="0 0 300 300">\n                    <defs>\n                        <linearGradient id="CPB-').concat(n("elementClass"),'-Gradient" x1="0%" y1="0%" x2="100%" y2="100%">\n                            ').concat(o(n("setGradient")),'\n                        </linearGradient>\n                    </defs>\n\n                    <circle class="').concat(n("elementClass"),'-track" cx="150" cy="150" r="130"  />\n                    <circle class="').concat(n("elementClass"),'-indicator" cx="150" cy="150" r="130" transform="rotate(-90 150 150)" stroke-dashoffset="1" stroke-dasharray="1" />\n                    <text class="').concat(n("elementClass"),'-text" stroke-width="0" x="150" y="58%" text-anchor="middle">').concat(!0===n("useText")?n("setText"):t(n("value"),n("maxValue"))+""+n("valueUnit"),"</text>\n                </svg>\n    ");var l=document.querySelector(".".concat(n("elementClass"),"-track")),i=document.querySelector(".".concat(n("elementClass"),"-indicator")),s=document.querySelector(".".concat(n("elementClass"),"-text"));i.style.strokeDasharray="817",i.style.strokeDashoffset="".concat(e(n("value"),n("maxValue"))),i.style.stroke="".concat("useGradient"===n("indicatorColor")?"url(#CPB-".concat(n("elementClass"),"-Gradient)"):n("indicatorColor")),i.style.strokeWidth="".concat(n("indicatorSize")>40||n("indicatorSize")<0?15:n("indicatorSize")),i.style.strokeLinecap="".concat("acute-square"===n("indicatorCap")?"butt":n("indicatorCap")),i.style.fillOpacity="0",l.style.stroke="".concat("useGradient"===n("trackColor")?"url(#CPB-".concat(n("elementClass"),"-Gradient)"):n("trackColor")),l.style.strokeWidth="".concat(n("trackSize")>40||n("trackSize")<0?15:n("trackSize")),l.style.fill="".concat("useGradient"===n("barBgColor")?"url(#CPB-".concat(n("elementClass"),"-Gradient)"):n("barBgColor")),l.style.fillOpacity="".concat(n("barBgColorOpacity")),s.style.fontSize="".concat(n("valueFontSize")<10?10:n("valueFontSize")>100?100:n("valueFontSize"),"px"),s.style.fill="".concat("useGradient"===n("valueColor")?"url(#CPB-".concat(n("elementClass"),"-Gradient)"):n("valueColor")),s.style.fontWeight="600",s.style.fillOpacity="".concat(n("valueOpacity")),s.style.fontFamily="".concat(n("valueFont"))}catch(u){a(u)}}};exports.draw=r;
},{}]},{},["aRcH"], "CPB")