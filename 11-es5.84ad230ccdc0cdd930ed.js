function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6hVp":function(e,n,t){"use strict";t.r(n),n.default='<div class="col-12 col-xl-9 awg-page-not-found">\n    <h2 id="awg-page-not-found-title">{{ pageNotFoundTitle }}</h2>\n\n    <h5 id="awg-page-not-found-subtitle">{{ pageNotFoundSubTitle }}</h5>\n\n    <div class="my-4">\n        <img [src]="pageNotFoundImgPath" width="100%" />\n    </div>\n\n    <h5 id="awg-page-not-found-contact">\n        Kontaktieren sie uns gerne unter:\n        <a [href]="awgContactUrl" target="_blank" rel="noopener noreferrer">anton-webern.ch</a>\n    </h5>\n\n    <h5 id="awg-page-not-found-back" class="mt-4">\n        Zur\xfcck zur Startseite: <a [routerLink]="[\'/home\']" routerLinkActive="active">Home</a>\n    </h5>\n</div>\n'},Mn13:function(e,n,t){"use strict";t.r(n),n.default=""},bGOC:function(e,n,t){"use strict";t.r(n);var a=t("mrSG"),o=t("8Y7J"),i=t("PCNd"),r=t("iInd"),s=t("aR35"),c=function(){function e(){_classCallCheck(this,e),this.pageNotFoundTitle="Entschuldigung, diese Seite gibt es hier nicht\u2026",this.pageNotFoundSubTitle="\u2026 aber m\xf6glicherweise k\xf6nnen wir Ihnen anders weiterhelfen?",this._pageNotFoundImgPath="assets/img/page-not-found/Webern_Books.jpg",this._awgContactUrl=s.a.AWG_PROJECT_URL+"index.php?id=41"}return _createClass(e,[{key:"pageNotFoundImgPath",get:function(){return this._pageNotFoundImgPath}},{key:"awgContactUrl",get:function(){return this._awgContactUrl}}]),e}(),u=[{path:"",component:c=a.a([Object(o.n)({selector:"awg-page-not-found-view",template:a.b(t("6hVp")).default,changeDetection:o.j.OnPush,styles:[a.b(t("Mn13")).default]})],c)}],l=[c],d=function e(){_classCallCheck(this,e)};d=a.a([Object(o.K)({imports:[r.e.forChild(u)],exports:[r.e]})],d),t.d(n,"PageNotFoundViewModule",(function(){return h}));var h=function e(){_classCallCheck(this,e)};h=a.a([Object(o.K)({imports:[i.a,d],declarations:[l]})],h)}}]);