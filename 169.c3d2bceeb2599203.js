"use strict";(self.webpackChunkawg_app=self.webpackChunkawg_app||[]).push([[169],{5169:(r,c,o)=>{o.r(c),o.d(c,{EditionIntroModule:()=>l});var a=o(655),i=o(5e3),v=o(8749),s=o(98),m=o(9577),p=o(4214),u=o(7545),I=o(7221),E=o(1737),h=o(6900);let n=class{constructor(t,e,f){this.editionDataService=t,this.editionService=e,this.router=f,this.errorObject=null,this.ref=this}ngOnInit(){this.getEditionIntroData()}getEditionIntroData(){this.editionIntroData$=this.editionService.getEditionWork().pipe((0,u.w)(t=>(this.editionWork=t,this.editionDataService.getEditionIntroData(this.editionWork))),(0,I.K)(t=>(this.errorObject=t,(0,E._)(t))))}navigateToReportFragment(t){t||(t="");const e={fragment:t};this.router.navigate([this.editionWork.baseRoute,this.editionWork.reportRoute.route],e)}openModal(t){this.modal.open(t)}selectSvgSheet(t){t||(t="");const e={queryParams:{sketch:t},queryParamsHandling:""};this.router.navigate([this.editionWork.baseRoute,this.editionWork.detailRoute.route],e)}};n.ctorParameters=()=>[{type:h.K},{type:h.O},{type:s.F0}],n.propDecorators={modal:[{type:i.i9L,args:["modal",{static:!0}]}]},n=(0,a.gn)([(0,i.wA2)({selector:"awg-intro",template:m,changeDetection:i.n4l.OnPush,styles:[p]})],n);const D=[{path:"",component:n,data:{title:"AWG Online Edition \u2013 Intro"}}],R=[n];let d=class{};d=(0,a.gn)([(0,i.LVF)({imports:[s.Bz.forChild(D)],exports:[s.Bz]})],d);let l=class{};l=(0,a.gn)([(0,i.LVF)({imports:[v.m,d],declarations:[R]})],l)},4214:r=>{r.exports=""},9577:r=>{r.exports='\x3c!-- content: intro --\x3e\n<div>\n    \x3c!-- modal --\x3e\n    <awg-modal #modal></awg-modal>\n\n    \x3c!-- intro --\x3e\n    <div *ngIf="editionIntroData$ | async as editionIntroData; else error">\n        <p *ngFor="let intro of editionIntroData.intro[0].content" [compile-html]="intro" [compile-html-ref]="this"></p>\n    </div>\n\n    <ng-template #error>\n        \x3c!-- error message --\x3e\n        <div class="errorMessage" *ngIf="errorObject">\n            <div class="col-12 text-center">\n                <div class="alert alert-danger">\n                    {{ errorObject }}\n                </div>\n            </div>\n        </div>\n    </ng-template>\n</div>\n'}}]);