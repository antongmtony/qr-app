"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6995],{6995:(p,h,e)=>{e.r(h),e.d(h,{WithMobilePageModule:()=>g});var u=e(9808),c=e(4182),o=e(6359),l=e(501),t=e(2096),r=e(4126);const m=[{path:"",component:(()=>{class i{constructor(){this.list=JSON.parse(localStorage.getItem("formData")||"[]"),this.name=this.list.name,this.surname=this.list.surname,this.url=this.list.url,this.email=this.list.email,this.phone=this.list.phone,this.street=this.list.street,this.floor=this.list.floor,this.state=this.list.state,this.city=this.list.city,this.zipCode=this.list.zipCode,this.country=this.list.country,this.qrData=`BEGIN:VCARD\nVERSION:3.0\nN:${this.surname};${this.name}\nFN:${this.name+" "+this.surname}\nURL:${this.url}\nEMAIL;TYPE=INTERNET:${this.email}\nTEL;TYPE=voice,work,pref:${this.phone}\nADR:;;${this.street}, ${this.floor};${this.state};${this.city};${this.zipCode};${this.country}\nEND:VCARD`}ngOnInit(){}}return i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-with-mobile"]],decls:10,vars:4,consts:[["routerLink","/"],["id","qr",3,"value","size"]],template:function(s,a){1&s&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-button",0),t._uU(3,"Inicio"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.qZA()()(),t.TgZ(6,"ion-content")(7,"h3"),t._uU(8,"Scan me!"),t.qZA(),t._UZ(9,"qr-code",1),t.qZA()),2&s&&(t.xp6(5),t.AsE("",a.name," ",a.surname,""),t.xp6(4),t.Q6J("value",a.qrData)("size",250))},directives:[o.Gu,o.sr,o.YG,o.YI,l.rH,o.wd,o.W2,r.V],styles:[""]}),i})()}];let d=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[l.Bz.forChild(m)],l.Bz]}),i})(),g=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[u.ez,c.u5,o.Pc,d,r.N]]}),i})()}}]);