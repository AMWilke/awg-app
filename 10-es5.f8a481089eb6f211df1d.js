function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,i){return n&&_defineProperties(e.prototype,n),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{U3qA:function(e,n,i){"use strict";i.r(n),n.default='\x3c!-- content: home --\x3e\n\n\x3c!-- heading --\x3e\n<awg-heading [title]="\'Beispieledition ausgewa\u0308hlter Skizzen\'" [id]="\'awg-home-view\'"></awg-heading>\n\n\x3c!-- header --\x3e\n<div class="para">\n    <h5 class="awg-breadcrumb">AWG / Serie I (Werke mit Opuszahlen) / Abteilung 5 (Klavierlieder)</h5>\n\n    <h3 class="awg-edition-info-header">\n        <i class="awg-edition-info-header-title">{{ editionInfoHeaderOp12?.title }}</i\n        >&nbsp;<span class="awg-edition-info-header-catalogue"\n            >{{ editionInfoHeaderOp12?.catalogueType }}&nbsp;{{ editionInfoHeaderOp12?.catalogueNumber }}</span\n        >\n        (<a [routerLink]="[editionWorkOp12.baseRoute, editionWorkOp12.introRoute]">{{ editionInfoHeaderOp12?.part }}</a\n        >)\n    </h3>\n    <h3 class="awg-edition-info-header">\n        <i class="awg-edition-info-header-title">{{ editionInfoHeaderOp25?.title }}</i\n        >&nbsp;<span class="awg-edition-info-header-catalogue"\n            >{{ editionInfoHeaderOp25?.catalogueType }}&nbsp;{{ editionInfoHeaderOp25?.catalogueNumber }}</span\n        >\n        (<a [routerLink]="[editionWorkOp25.baseRoute, editionWorkOp25.graphRoute]">{{ editionInfoHeaderOp25?.part }}</a\n        >)\n    </h3>\n</div>\n\n\x3c!-- description --\x3e\n<div class="para text-danger">\n    <p>\n        Prototyp einer AWG-Online-Edition (Weiterentwicklung einer\n        <a href="https://www.anton-webern.ch/assets/editions/BeispieleditionAWG_3_Skizzen_op12_Online_klein.pdf"\n            >prospektiven Simulation [PDF]</a\n        >\n        vom 31. M\xe4rz 2015 sowie vom 29. Januar 2016):\n    </p>\n    <p>\n        Die Bestandteile der AWG-Online-Editionen werden mithilfe der\n        <a href="https://www.salsah.org" target="_blank" ref="noopener noreferrer"\n            >virtuellen Forschungsumgebung SALSAH</a\n        >\n        des\n        <a href="https://dhlab.philhist.unibas.ch" target="_blank" ref="noopener noreferrer">Digital Humanities Lab</a>\n        der Universit\xe4t Basel organisiert und aufbereitet. SALSAH erm\xf6glicht es, digitalisierte Quellenbest\xe4nde und\n        andere digitale \u201aObjekte\u2018 mit Informationen (Annotationen) zu versehen und untereinander zu verkn\xfcpfen. Dabei\n        kann auch r\xe4umlich voneinander getrennt zeitgleich mit der Datenbank gearbeitet bzw. deren Inhalte erweitert\n        werden.\n    </p>\n    <p>\n        Der Protoyp simuliert bereits in weiten Teilen eine Datenabfrage \xfcber die Programmierschnittstelle (API) von\n        SALSAH. Die f\xfcr reale Abfragen im Bereich Online-Edition notwendige\n        <a routerLink="/structure">Datenstruktur</a> wird zur Zeit in der Webern-SALSAH-Datenbank implementiert.\n    </p>\n    <p>\n        \xdcber den Men\xfcpunkt <em>Beispieledition</em> sind ausgew\xe4hlte Skizzen zu op. 12 sowie op. 25 zug\xe4nglich.\n        Bestandteile der Online-Edition umfassen Einleitungen, die edierten Notentexte, kritische Berichte sowie\n        Graphvisualisierungen.\n    </p>\n    <p>\n        Zus\xe4tzlich wird eine einfache Volltextsuche in der Datenbank angeboten, \xfcber die die dort hinterlegten\n        Kontextmaterialien (Werklisten [nach Opuszahl bzw. Moldenhauer-Nummer], Personeninformationen, Briefe &amp;\n        Supplements, Chronologie) abgefragt werden k\xf6nnen.\n    </p>\n    <p>\n        Der Prototyp und die Suche werden in ihrer Funktionalit\xe4t sukzessiv erweitert.\n    </p>\n</div>\n\n\x3c!-- declamation --\x3e\n<div class="declamation">\n    <p>\n        Ediert von\n        <span class="editors"\n            ><a href="{{ (editionMetaData?.editors)[0].contactUrl }}" target="_blank" rel="noopener noreferrer">{{\n                (editionMetaData?.editors)[0].name\n            }}</a></span\n        >\n    </p>\n    <p>\n        Versionsdatum: <span class="version">{{ editionMetaData?.lastModified }}</span>\n    </p>\n</div>\n'},VCYV:function(e,n,i){"use strict";i.r(n);var t=i("mrSG"),a=i("8Y7J"),r=i("PCNd"),o=i("iInd"),s=i("6Vl1"),d=i("dJ3e"),l=i("6aU4"),p=function(){function e(n,i){_classCallCheck(this,e),this.coreService=n,this.router=i,this.editionInfoHeaderOp12={section:"AWG I/5",title:"Vier Lieder",catalogueType:"op.",catalogueNumber:"12",part:"Skizzen"},this.editionInfoHeaderOp25={section:"AWG I/5",title:"Drei Lieder nach Gedichten von Hildegard Jone",catalogueType:"op.",catalogueNumber:"25",part:"Graph"},this.editionWorkOp12=l.d.op12,this.editionWorkOp25=l.d.op25}return _createClass(e,[{key:"ngOnInit",value:function(){this.routeToSidenav(),this.provideMetaData()}},{key:"provideMetaData",value:function(){this.editionMetaData=this.coreService.getMetaDataSection(s.b.edition)}},{key:"routeToSidenav",value:function(){this.router.navigate([{outlets:{side:"editionInfo"}}],{preserveFragment:!0,queryParamsHandling:"preserve"})}}]),e}();p.ctorParameters=function(){return[{type:d.c},{type:o.d}]};var u=[{path:"",component:p=Object(t.a)([Object(a.n)({selector:"awg-home-view",template:__importDefault(i("U3qA")).default,changeDetection:a.j.OnPush,styles:[__importDefault(i("vK2g")).default]})],p)}],c=[p],h=function e(){_classCallCheck(this,e)};h=Object(t.a)([Object(a.K)({imports:[o.e.forChild(u)],exports:[o.e]})],h),i.d(n,"HomeViewModule",(function(){return f}));var f=function e(){_classCallCheck(this,e)};f=Object(t.a)([Object(a.K)({imports:[r.a,h],declarations:[c]})],f)},vK2g:function(e,n,i){"use strict";i.r(n),n.default=""}}]);