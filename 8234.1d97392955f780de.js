"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8234],{8234:(p,h,o)=>{o.r(h),o.d(h,{WithoutMobilePageModule:()=>g});var r=o(9808),c=o(4182),s=o(6359),a=o(501),t=o(2096),u=o(4126);const m=[{path:"",component:(()=>{class i{constructor(){this.list=JSON.parse(localStorage.getItem("formData")||"[]"),this.name=this.list.name,this.surname=this.list.surname,this.url=this.list.url,this.email=this.list.email,this.phone="",this.street=this.list.street,this.floor=this.list.floor,this.state=this.list.state,this.city=this.list.city,this.zipCode=this.list.zipCode,this.country=this.list.country,this.qrData=`BEGIN:VCARD\nVERSION:3.0\nN:${this.surname};${this.name}\nFN:${this.name+" "+this.surname}\nURL:${this.url}\nEMAIL;TYPE=INTERNET:${this.email}\nTEL;TYPE=voice,work,pref:${this.phone}\nADR:;;${this.street}, ${this.floor};${this.state};${this.city};${this.zipCode};${this.country}\nEND:VCARD`}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-without-mobile"]],decls:10,vars:4,consts:[["routerLink","/"],["id","qr",3,"value","size"]],template:function(e,l){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-button",0),t._uU(3,"Inicio"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.qZA()()(),t.TgZ(6,"ion-content")(7,"h3"),t._uU(8,"Scan me!"),t.qZA(),t._UZ(9,"qr-code",1),t.qZA()),2&e&&(t.xp6(5),t.AsE("",l.name," ",l.surname,""),t.xp6(4),t.Q6J("value",l.qrData)("size",250))},directives:[s.Gu,s.sr,s.YG,s.YI,a.rH,s.wd,s.W2,u.V],styles:[""]}),i})()}];let d=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[a.Bz.forChild(m)],a.Bz]}),i})(),g=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[r.ez,c.u5,s.Pc,d,u.N]]}),i})()}}]);