(self.webpackChunkangular_app2=self.webpackChunkangular_app2||[]).push([[602],{5602:(t,n,e)=>{"use strict";e.r(n),e.d(n,{LoginModule:()=>v});var i=e(8583),o=e(1694),r=e(3018);let c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-login"]],decls:1,vars:0,template:function(t,n){1&t&&r._UZ(0,"router-outlet")},directives:[o.lC],styles:[""]}),t})();var a=e(665);const s=/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/;var d=e(8002),p=e(1841);let l=(()=>{class t{constructor(t){this.http=t}generate$(t){const n={method:"POST",url:"https://d2apwo5qwe.execute-api.ap-northeast-1.amazonaws.com/prod/certification",headers:{headers:new p.WM({"x-api-key":"coR5yRlR3J55NrE8jLUN35ZPPk74C0UU84OLdEpY","Content-Type":"application/json"})},body:JSON.stringify(t)};return this.http.post(n.url,n.body,n.headers).pipe((0,d.U)(t=>t))}question$(t){const n={method:"POST",url:"https://6pwoxunl72.execute-api.ap-northeast-1.amazonaws.com/dev/chatgpt",headers:{headers:new p.WM({"Content-Type":"application/json"})},body:JSON.stringify(t)};return this.http.post(n.url,n.body,n.headers).pipe((0,d.U)(t=>t))}}return t.\u0275fac=function(n){return new(n||t)(r.LFG(p.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=e(8295),g=e(5460);let h=(()=>{class t{constructor(){this.required=!0}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-input-user-id"]],inputs:{control:"control",required:"required"},decls:2,vars:1,consts:[[1,"field"],["matInput","","type","text","maxlength","15",3,"formControl"]],template:function(t,n){1&t&&(r.TgZ(0,"mat-form-field",0),r._UZ(1,"input",1),r.qZA()),2&t&&(r.xp6(1),r.Q6J("formControl",n.control))},directives:[u.KE,g.Nt,a.Fj,a.nD,a.JJ,a.oH],styles:[".mat-form-field[_ngcontent-%COMP%]{max-width:300px;width:100%}.mat-input-element[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:8px}"]}),t})();var m=e(1013);function f(t,n){if(1&t){const t=r.EpF();r.TgZ(0,"div"),r.TgZ(1,"label",13),r._uU(2,"Certificate"),r.qZA(),r._UZ(3,"br"),r.TgZ(4,"textarea",14),r._uU(5),r.qZA(),r._UZ(6,"br"),r._UZ(7,"br"),r._UZ(8,"br"),r.TgZ(9,"label",13),r._uU(10,"Certificate key"),r.qZA(),r._UZ(11,"br"),r.TgZ(12,"textarea",14),r._uU(13),r.qZA(),r._UZ(14,"br"),r.TgZ(15,"button",15),r.NdJ("click",function(){return r.CHM(t),r.oxw().onDownload()}),r.TgZ(16,"span"),r._uU(17,"Download"),r.qZA(),r.qZA(),r.qZA()}if(2&t){const t=r.oxw();r.xp6(5),r.hij("",t.certification.crtContent,"\n                                "),r.xp6(8),r.hij("",t.certification.crtKey,"\n                                ")}}function x(t,n){if(1&t&&(r.TgZ(0,"div"),r.TgZ(1,"div",16),r._uU(2,"Q:"),r.qZA(),r.TgZ(3,"div",17),r._uU(4),r.qZA(),r._UZ(5,"br"),r.TgZ(6,"div",16),r._uU(7,"A:"),r.qZA(),r._UZ(8,"div",18),r._UZ(9,"br"),r.qZA()),2&t){const t=n.$implicit;r.xp6(4),r.hij("",t.question," "),r.xp6(4),r.Q6J("data",t.answer)}}let w=(()=>{class t{constructor(t,n,e){this.cdr=t,this._fb=n,this._genService=e,this.questionsAndAnswers=[],this.question=new a.NI("")}get formControls(){return this.myForm.controls}ngOnInit(){this.initForm()}initForm(){this.myForm=this._fb.group({id:this._fb.control("",[(new RegExp(s),t=>null),a.kI.required])})}onGenerate(){const t=this.myForm.getRawValue();void 0!==this.certification&&(this.certification.crtContent="",this.certification.crtKey=""),t.id.match(s)?this._genService.generate$(t).subscribe(t=>{this.certification=t,this.cdr.detectChanges()},t=>{0===t.status&&console.log("status===0")}):alert("Wrong IP")}onQuestion(){const t=this.question.value;void 0!==t&&""!==t.trim()&&this._genService.question$({msg:t,history:this.questionsAndAnswers}).subscribe(n=>{void 0!==n?(this.questionsAndAnswers.unshift({question:t.trim(),answer:n.answer}),this.cdr.detectChanges()):console.log("result: ",n)},t=>{0===t.status&&console.log("status===0")})}onDownload(){var t,n;const e=new Blob([(null===(t=this.certification)||void 0===t?void 0:t.crtContent)+""],{type:"text/plain"}),i=window.URL.createObjectURL(e),o=document.createElement("a");o.href=i,o.download="server.crt",document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(i);const r=new Blob([(null===(n=this.certification)||void 0===n?void 0:n.crtKey)+""],{type:"text/plain"}),c=window.URL.createObjectURL(r),a=document.createElement("a");a.href=c,a.download="server.key",document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(c)}}return t.\u0275fac=function(n){return new(n||t)(r.Y36(r.sBO),r.Y36(a.qu),r.Y36(l))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-form"]],decls:23,vars:5,consts:[[1,"base-div"],[1,"login-div"],[1,"input-form-div"],[1,"form",3,"formGroup"],[1,"server-ip"],["type","text","maxlength","15",1,"input-ip",3,"control"],["type","submit",1,"login-button",3,"click"],[4,"ngIf"],[1,"container"],[1,"textarea-container"],["placeholder","What's self-signed certificate?",3,"formControl"],[4,"ngFor","ngForOf"],[1,"placeholder"],[1,"cert-head"],["readonly","",1,"crt"],["type","submit",1,"download-button",3,"click"],[1,"question-title"],[1,"question"],["markdown","",1,"answer","custom-markdown",3,"data"]],template:function(t,n){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"form",3),r.TgZ(4,"h3"),r._uU(5," Generate Self-Signed Certificates for TLS "),r.qZA(),r.TgZ(6,"label",4),r._uU(7,"Server IP"),r.qZA(),r._UZ(8,"app-input-user-id",5),r._UZ(9,"br"),r.TgZ(10,"button",6),r.NdJ("click",function(){return n.onGenerate()}),r.TgZ(11,"span"),r._uU(12,"Generate"),r.qZA(),r.qZA(),r.qZA(),r._UZ(13,"br"),r.YNc(14,f,18,2,"div",7),r.TgZ(15,"div",8),r.TgZ(16,"div",9),r._UZ(17,"textarea",10),r.qZA(),r.TgZ(18,"div",9),r.TgZ(19,"button",6),r.NdJ("click",function(){return n.onQuestion()}),r._uU(20,"Ask AI"),r.qZA(),r.qZA(),r.qZA(),r.YNc(21,x,10,2,"div",11),r._UZ(22,"div",12),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(3),r.Q6J("formGroup",n.myForm),r.xp6(5),r.Q6J("control",n.formControls.id),r.xp6(6),r.Q6J("ngIf",n.certification),r.xp6(3),r.Q6J("formControl",n.question),r.xp6(4),r.Q6J("ngForOf",n.questionsAndAnswers))},directives:[a._Y,a.JL,a.sg,h,i.O5,a.Fj,a.JJ,a.oH,i.sg,m.lF],styles:[".base-div[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;width:100%;height:100%;box-sizing:border-box}@media only screen and (max-width: 390px){.login-div[_ngcontent-%COMP%]{width:370px;height:700px;top:0;right:0;bottom:0;left:0}.server-ip[_ngcontent-%COMP%]{padding:18%;font-size:18px;font-weight:600}}@media only screen and (max-width: 768px){.login-div[_ngcontent-%COMP%]{width:370px;height:700px;top:0;right:0;bottom:0;left:0}.crt[_ngcontent-%COMP%]{width:90%;height:600px}}@media only screen and (min-width: 769px) and (max-width: 1024px){.login-div[_ngcontent-%COMP%]{width:370px;height:700px;top:0;right:0;bottom:0;left:0}.crt[_ngcontent-%COMP%]{width:80%;height:600px}}@media only screen and (min-width: 1025px){.login-div[_ngcontent-%COMP%]{width:100%;height:700px;top:0;right:0;bottom:0;left:0}.server-ip[_ngcontent-%COMP%]{width:20%;margin-right:10px;font-size:18px;font-weight:600}.crt[_ngcontent-%COMP%]{width:60%;height:420px}}.title-div[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px;font-size:20px}.input-form-div[_ngcontent-%COMP%], .title-div[_ngcontent-%COMP%]{width:100%;text-align:center}.input-form-div[_ngcontent-%COMP%]{margin:10px}.submit-button-div[_ngcontent-%COMP%]{width:100%;text-align:center}.download-button[_ngcontent-%COMP%], .login-button[_ngcontent-%COMP%]{margin-top:16px;font-size:18px;font-weight:600}.download-button[_ngcontent-%COMP%]{margin-bottom:20px}.cert-head[_ngcontent-%COMP%]{font-size:18px;font-weight:600}.input-ip[_ngcontent-%COMP%]{width:300px}.question-title[_ngcontent-%COMP%]{font-size:1.2em;font-weight:700}.answer[_ngcontent-%COMP%], .question[_ngcontent-%COMP%]{white-space:pre-line;overflow:auto}.answer[_ngcontent-%COMP%], .question[_ngcontent-%COMP%], .question-title[_ngcontent-%COMP%]{text-align:left}@media screen and (max-width: 768px){.answer[_ngcontent-%COMP%], .question[_ngcontent-%COMP%]{text-align:left}}.textarea-container[_ngcontent-%COMP%]{display:flex;justify-content:center}@media screen and (max-width: 768px){.textarea-container[_ngcontent-%COMP%]{justify-content:flex-start}}@media screen and (min-width: 769px){.textarea-container[_ngcontent-%COMP%]{justify-content:center}}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:30px}@media screen and (max-width: 768px){.container[_ngcontent-%COMP%]{justify-content:flex-start}}@media screen and (min-width: 769px){.container[_ngcontent-%COMP%]{justify-content:center}}button[_ngcontent-%COMP%]{width:100px}@media screen and (max-width: 768px){button[_ngcontent-%COMP%]{width:120px}}@media screen and (min-width: 769px){button[_ngcontent-%COMP%]{width:120px}}textarea[_ngcontent-%COMP%]{overflow:hidden;width:100%;min-height:50px;max-height:400px;height:auto;box-sizing:border-box;border:1px solid #ccc;border-radius:4px;padding:8px}@media screen and (min-width: 768px){textarea[_ngcontent-%COMP%]{min-width:1200px}}@media screen and (max-width: 767px){textarea[_ngcontent-%COMP%]{min-width:350px;width:90%}}.placeholder[_ngcontent-%COMP%]{height:50px;width:100%}.custom-markdown[_ngcontent-%COMP%]{line-height:1.5}markdown[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.5em}"]}),t})();const _=[{path:"",component:c,children:[{path:"",pathMatch:"full",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-login-form"]],decls:1,vars:0,template:function(t,n){1&t&&r._UZ(0,"app-form")},directives:[w],styles:[""]}),t})()}]}];let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[o.Bz.forChild(_)],o.Bz]}),t})();var b=e(4551);let v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[i.ez,C,b.q,a.u5,a.UX,m.JP.forChild()]]}),t})()}}]);