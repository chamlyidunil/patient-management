(this.webpackJsonpcustomer=this.webpackJsonpcustomer||[]).push([[0],{163:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(34),s=a.n(l),o=(a(81),a(82),a(23)),c=a(6),m=a(14),i=a(15),u=a(20),d=a(19),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(o.b,{to:"/",className:"navbar-brand"},"Pation Manager"),r.a.createElement("div",{className:"collpase navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(o.b,{to:"/",className:"nav-link"},"Day Manage")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(o.b,{to:"/userAdd",className:"nav-link"},"User Manage")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(o.b,{to:"/report",className:"nav-link"},"Report Manager")))))}}]),a}(n.Component),N=a(29),p=a.n(N),E="http://localhost:8080/patients",f=new(function(){function e(){Object(m.a)(this,e)}return Object(i.a)(e,[{key:"searchPatients",value:function(e){var t=e.phoneNo?e.phoneNo:"*",a=e.firstName?e.firstName:"*",n=e.lastName?e.lastName:"*",r="".concat(E,"/").concat(t,"/").concat(a,"/").concat(n);return console.log("Search URL ".concat(r)),p.a.get(r)}},{key:"addPatientAndRegisterForToday",value:function(e){var t="".concat(E,"/daily");return p.a.post(t,e)}},{key:"registerForToday",value:function(e){var t="".concat(E,"/daily/").concat(e);return p.a.get(t)}},{key:"addPatient",value:function(e){var t="".concat(E);return p.a.post(t,e)}},{key:"reports",value:function(e){var t="".concat(E,"/reports");return p.a.post(t,e)}}]),e}()),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).ADDED_AND_REGISTERD="Sucessfully added and registerd for today",n.REGISTERD="Sucessfully registerd for today",n.onChangeFirstName=function(e){n.setState({firstName:e.target.value},(function(){return n.validateState(n.state.firstName.length>3)}))},n.onChangeLasttName=function(e){n.setState({lastName:e.target.value},(function(){return n.validateState(n.state.lastName.length>=3)}))},n.onChangePhoneNo=function(e){n.setState({phoneNo:e.target.value},(function(){return n.validateState(n.state.phoneNo.length>=5)}))},n.onChangeAddress=function(e){n.setState({address:e.target.value})},n.markForToday=function(e){f.registerForToday(e).then((function(e){n.setState({message:n.REGISTERD}),n.clearFields()}))},n.search=function(){var e={firstName:n.state.firstName,lastName:n.state.lastName,phoneNo:n.state.phoneNo};console.log(e),f.searchPatients(e).then((function(e){e.data.length>0?n.setState({recordsFound:!1,patients:e.data}):n.setState({recordsFound:!0,patients:[]})}))},n.onSubmit=function(e){console.log("submiting..."),e.preventDefault();var t={firstName:n.state.firstName,lastName:n.state.lastName,phoneNo:n.state.phoneNo,address:n.state.address};f.addPatientAndRegisterForToday(t).then((function(e){n.setState({recordsFound:!1,message:n.ADDED_AND_REGISTERD}),n.clearFields()}))},n.clearFields=function(){n.setState({firstName:"",lastName:"",address:"",phoneNo:""})},n.state={firstName:"",lastName:"",phoneNo:"",address:"",recordsFound:!1,patients:[],message:""},n}return Object(i.a)(a,[{key:"validateState",value:function(e){this.setState({message:""}),e?this.search():this.setState({patients:[]})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h3",null,"Find Pation"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",null,"Phone Number"),r.a.createElement("input",{type:"text",pattern:"\\d*",maxLength:"10",minLength:"10",required:!0,className:"form-control",placeholder:"Phone Number",value:this.state.phoneNo,onChange:this.onChangePhoneNo})),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"First Name",minLength:"4",value:this.state.firstName,onChange:this.onChangeFirstName})),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"Last Name",minLength:"4",value:this.state.lastName,onChange:this.onChangeLasttName}))),this.state.recordsFound&&r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Address"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"Address",minLength:"4",value:this.state.address,onChange:this.onChangeAddress})),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-2"},r.a.createElement("input",{type:"submit",value:"Register And Mark",className:"btn  btn-secondary"})))),this.state.message&&r.a.createElement("div",{className:"alert alert-success"}," ",this.state.message)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table table-striped table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Phone No"),r.a.createElement("th",{scope:"col"},"First Name"),r.a.createElement("th",{scope:"col"},"Last Name"),r.a.createElement("th",{scope:"col"},"Address"),r.a.createElement("th",{scope:"col"}))),r.a.createElement("tbody",null,this.state.patients.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("th",{scope:"col"}," ",t.phoneNo," "),r.a.createElement("th",{scope:"col"}," ",t.firstName," "),r.a.createElement("th",{scope:"col"}," ",t.lastName," "),r.a.createElement("th",{scope:"col"}," ",t.address," "),r.a.createElement("th",{scope:"col"}," ",r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.markForToday(t.id)}}," Mark ")," "))}))))))}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onChangeFirstName=function(e){n.setState({firstName:e.target.value},(function(){return n.validateState()}))},n.onChangeLasttName=function(e){n.setState({lastName:e.target.value},(function(){return n.validateState()}))},n.onChangePhoneNo=function(e){n.setState({phoneNo:e.target.value},(function(){return n.validateState()}))},n.onChangeAddress=function(e){n.setState({address:e.target.value},(function(){return n.validateState()}))},n.onSubmit=function(e){e.preventDefault();var t={firstName:n.state.firstName,lastName:n.state.lastName,phoneNo:n.state.phoneNo,address:n.state.address};f.addPatient(t).then((function(e){n.setState({addedStatus:!0})}))},n.state={firstName:"",lastName:"",phoneNo:"",address:"",addedStatus:!1},n}return Object(i.a)(a,[{key:"validateState",value:function(){this.setState({addedStatus:!1})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h3",null,"Register New Pation"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"First Name",minLength:"4",value:this.state.firstName,onChange:this.onChangeFirstName})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"Last Name",minLength:"4",value:this.state.lastName,onChange:this.onChangeLasttName}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",null,"Phone Number"),r.a.createElement("input",{type:"text",pattern:"\\d*",maxLength:"10",minLength:"10",required:!0,className:"form-control",placeholder:"Phone Number",value:this.state.phoneNo,onChange:this.onChangePhoneNo}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Address"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"Address",minLength:"4",value:this.state.address,onChange:this.onChangeAddress})),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-2"},r.a.createElement("input",{type:"submit",value:"Register",className:"btn  btn-secondary"})))),this.state.addedStatus&&r.a.createElement("div",{className:"alert alert-success"}," Patient Register Sucesfully "))}}]),a}(n.Component),b=a(53),S=a.n(b),y=(a(104),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onChangeFromDate=function(e){n.setState({startDate:e})},n.onChangeToDate=function(e){n.setState({toDate:e})},n.searchReports=function(e){var t={startDate:n.state.startDate,endDate:n.state.toDate};console.log(t),f.reports(t).then((function(e){console.log(e),n.setState({datePatients:e.data})}))},n.state={startDate:new Date,toDate:new Date,datePatients:[]},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h3",null,"Find Pation"),r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",null,"From  Date "),r.a.createElement(S.a,{className:"form-control",selected:this.state.startDate,onChange:this.onChangeFromDate})),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",null,"To Date"),r.a.createElement(S.a,{className:"form-control",selected:this.state.toDate,onChange:this.onChangeToDate})))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-2"},r.a.createElement("button",{className:"btn btn-secondary",onClick:this.searchReports}," Search "))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table table-striped table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Date"),r.a.createElement("th",{scope:"col"},"Phone No"),r.a.createElement("th",{scope:"col"},"First Name"),r.a.createElement("th",{scope:"col"},"Last Name"),r.a.createElement("th",{scope:"col"},"Address"),r.a.createElement("th",{scope:"col"}))),r.a.createElement("tbody",null,this.state.datePatients.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("th",{scope:"col"}," ",e.date," "),r.a.createElement("th",{scope:"col"}," ",e.patient.phoneNo," "),r.a.createElement("th",{scope:"col"}," ",e.patient.firstName," "),r.a.createElement("th",{scope:"col"}," ",e.patient.lastName," "),r.a.createElement("th",{scope:"col"}," ",e.patient.address," "))}))))))}}]),a}(n.Component));var C=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(h,null),r.a.createElement(c.a,{path:"/",exact:!0,component:v}),r.a.createElement(c.a,{path:"/userAdd",component:g}),r.a.createElement(c.a,{path:"/report",component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){e.exports=a(163)},81:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.08e37081.chunk.js.map