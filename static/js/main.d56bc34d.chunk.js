(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),o=a.n(s),c=a(1),i=a(2),l=a(4),p=a(3),u=a(5),m=(a(15),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).currentDate=function(){return(new Date).getDate()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"header"},r.a.createElement("nav",{className:"header-navbar"},r.a.createElement("button",{className:"create-button create-event",onClick:function(){return e.props.showPopup("00:00",e.currentDate())}},r.a.createElement("div",{className:"button-create-event"},r.a.createElement("svg",{className:"create-event",width:"36",height:"36",viewBox:"0 0 36 36"},r.a.createElement("path",{className:"create-event",fill:"#34A853",d:"M16 16v14h4V20z"}),r.a.createElement("path",{className:"create-event",fill:"#4285F4",d:"M30 16H20l-4 4h14z"}),r.a.createElement("path",{className:"create-event",fill:"#FBBC05",d:"M6 16v4h10l4-4z"}),r.a.createElement("path",{className:"create-event",fill:"#EA4335",d:"M20 16V6h-4v14z"}),r.a.createElement("path",{className:"create-event",fill:"none",d:"M0 0h36v36H0z"}))),r.a.createElement("span",{className:"create-button__text create-event"},"Create")),r.a.createElement("button",{className:"today-button",onClick:this.props.todayButton},"Today"),r.a.createElement("div",{className:"arrow-button"},r.a.createElement("button",{className:"arrow-button__prev button-style",onClick:this.props.getPrevWeek},r.a.createElement("i",{className:"material-icons arrow-button__size"},"keyboard_arrow_left")),r.a.createElement("button",{className:"arrow-button__next button-style",onClick:this.props.getNextWeek},r.a.createElement("i",{className:"material-icons arrow-button__size "},"keyboard_arrow_right"))),r.a.createElement("span",{className:"dates"},this.props.currentMonthAndYear)))}}]),t}(r.a.Component)),h=(a(16),function(e){var t=e.top;return r.a.createElement("div",{className:"redLine",style:{marginTop:"".concat(+t+100,"px")}},r.a.createElement("div",{className:"redLine-round"}),r.a.createElement("div",{className:"redLine-line"}))}),d=(a(17),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).getHeight=function(){return 60*(+a.props.endTime.split(":")[0]-+a.props.startTime.split(":")[0])+(+a.props.endTime.split(":")[1]-+a.props.startTime.split(":")[1])},a.getPosition=function(){return console.log(a.props),60*+a.props.startTime.split(":")[0]+100},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"active_event",style:{height:this.getHeight(),backgroundColor:this.props.color,marginTop:this.getPosition()},onClick:function(){return e.props.showPopup("00:00","2020-02-02",e.props.id)}},this.props.title,r.a.createElement("p",null,this.props.description))}}]),t}(r.a.Component)),v=(new Date+"").split(" ")[4],f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).findActiveEvents=function(){var e=a.props.array.filter((function(e){return new Date(e.startDate).getDate()===a.getCurrentDay().getDate()}));return(e=e.filter((function(e){return(new Date(e.startDate)+"").split(" ")[1]===(a.getCurrentDay()+"").split(" ")[1]}))).map((function(e){return r.a.createElement(d,{key:e.id,id:e.id,color:e.color,title:e.title,description:e.description,startDate:e.startDate,startTime:e.startTime,endTime:e.endTime,endDate:e.endDate,showPopup:a.props.showPopup})}))},a.getCurrentDay=function(){return new Date(a.props.getMonday().setDate(a.props.getMonday().getDate()+a.props.index))},a.marginTop=function(){return"".concat(60*v.split(":")[0]+ +v.split(":")[1])},a.getDayFunc=function(){return(new Date).getDate()===new Date(a.props.getMonday().setDate(a.props.getMonday().getDate()+a.props.index)).getDate()&&(new Date).getDay()===new Date(a.props.getMonday().setDate(a.props.getMonday().getDate()+a.props.index)).getDay()?r.a.createElement(h,{top:a.marginTop()}):""},a.currentDayStyle=function(){return(a.getCurrentDay()+"").split(" ")[2]===(new Date+"").split(" ")[2]&&(a.getCurrentDay()+"").split(" ")[0]===(new Date+"").split(" ")[0]?"current-day":""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"day"},r.a.createElement("div",{className:"day-name"},(this.getCurrentDay()+"").split(" ")[0]),r.a.createElement("div",{className:"day-number ".concat(this.currentDayStyle())},(this.getCurrentDay()+"").split(" ")[2]),this.findActiveEvents(),this.getDayFunc())}}]),t}(r.a.Component),y=(a(18),Array(7).fill("0")),g=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{getPrevWeek:this.props.getPrevWeek,getNextWeek:this.props.getNextWeek,todayButton:this.props.todayButton,showPopup:this.props.showPopup,currentMonthAndYear:this.props.currentMonthAndYear}),r.a.createElement("nav",{className:"days-navigation"},r.a.createElement("div",{className:"week"},y.map((function(t,a){return r.a.createElement(f,{key:Math.random(),array:e.props.array,index:a,getMonday:e.props.getMonday,showPopup:e.props.showPopup})})))))}}]),t}(r.a.Component),D=a(6),E=a.n(D),k=Array(7).fill("0"),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).getDate=function(e){var t=E()().startOf("week").toDate();t=new Date(t.setDate(t.getDate()+a.props.week+e)).getDate(),a.props.showPopup(a.props.time,t,"",e)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,k.map((function(t,a){return r.a.createElement("div",{key:a,className:"emptyCell",onClick:function(){return e.getDate(a)}})})))}}]),t}(r.a.Component),b=Array(24).fill("0"),N=function(e){var t=e.week,a=e.showPopup;return r.a.createElement("div",{className:"calendar-visualization"},b.map((function(e,n){return r.a.createElement("div",{className:"emptyRow",key:Math.random()},r.a.createElement(w,{week:t,showPopup:a,time:n<10?"0".concat(n+1,":00"):"".concat(n+1,":00")}))})))},C=function(){var e=Array(24).fill("0");return r.a.createElement("div",{className:"timing",key:Math.random()},e.map((function(e,t){return r.a.createElement("div",{className:"timing__blocks",key:t},r.a.createElement("span",{className:"clock"},t+1))})))},O=(a(20),function(e){var t=e.week,a=e.showPopup;return r.a.createElement("section",{className:"main"},r.a.createElement(C,null),r.a.createElement(N,{week:t,showPopup:a}))}),j=a(9),T=(a(21),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(j.a)({},n,r))},a.createDate=function(){alert(a.props.popupDate)},a.endTime=function(){var e=a.props.eventTime.split("");return 9===+e[1]?(e[0]=+e[0]+1,e[1]=0):e[1]=+e[1]+1,e.join("")},a.startDate=function(e){return"2020-02-".concat(e)},a.state={color:"#4183f1",title:"",description:"",startDate:a.props.date,startTime:a.props.eventTime,endTime:a.props.eventTime,endDate:a.props.date},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"popup ".concat(this.props.newClass)},r.a.createElement("div",{className:"popup__form"},r.a.createElement("button",{className:"close material-icons",onClick:this.props.closePopup},"close"),r.a.createElement("input",{name:"title",className:"input__name",type:"text",placeholder:"Add title",value:this.state.title,onChange:this.handleChange}),r.a.createElement("div",{className:"color-picker"},r.a.createElement("label",{className:"color-picker_label"},r.a.createElement("span",{className:"color-picker_label-text"},"Select a color"),r.a.createElement("input",{className:"event__color-picker",type:"color",name:"color",value:this.state.color,onChange:this.handleChange}))),r.a.createElement("div",{className:"date-block "},r.a.createElement("i",{className:"Tiny material-icons"},"access_time"),r.a.createElement("input",{className:"start-date input-style",type:"date",name:"startDate",value:this.state.startDate,onChange:this.handleChange}),r.a.createElement("input",{type:"time",className:"start-time time-list input-style ",name:"startTime",value:this.state.startTime,onChange:this.handleChange}),r.a.createElement("input",{type:"time",className:"end-time time-list input-style ",name:"endTime",value:this.state.endTime,onChange:this.handleChange}),r.a.createElement("input",{className:"end-date input-style",type:"date",name:"endDate",value:this.state.endDate,onChange:this.handleChange})),r.a.createElement("div",{className:"description "},r.a.createElement("i",{className:"Tiny material-icons "},"format_align_left"),r.a.createElement("textarea",{className:"description-input ",name:"description",cols:"42 ",rows:"4 ",placeholder:"Add description",onChange:this.handleChange,value:this.state.description})),r.a.createElement("div",{className:"control "},r.a.createElement("button",{className:"delete-event",onClick:function(){return e.props.delete(e.props.id)}},"delete"),r.a.createElement("button",{className:"submit-button ",onClick:function(){return e.props.createTask(e.state)}},"Save"))))}}]),t}(r.a.Component)),P="https://5e720541942d92001611a8f2.mockapi.io/api/v1/Calendar",_=function(){return fetch(P).then((function(e){return e.json()}))},M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).createTask=function(e){(function(e){return fetch(P,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)})})(e).then(_().then((function(e){a.setState({array:e,popup:!a.state.popup})})).catch((function(){return alert("Internal Server Error. Can't display events")})))},a.delete=function(e){var t;(t=e,fetch("".concat(P,"/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json; charset=utf-8"}})).then(_().then((function(e){a.setState({array:e,popup:!a.state.popup})})).catch((function(){return alert("Internal Server Error. Can't display events")})))},a.getMonday=function(){var e=E()().startOf("week").toDate();return new Date(e.setDate(e.getDate()+a.state.week))},a.getActualDate=function(e,t){var n=E()().startOf("week").toDate(),r=new Date(n.setDate(n.getDate()+a.state.week+t))+"",s=new Date(r).getMonth()+1;return"".concat(r.split(" ")[3],"-").concat(s<=9?"0"+s:s,"-").concat(e)},a.getPrevWeek=function(){a.setState({week:a.state.week-7,date:a.getActualDate(a.state.eventDate,0)})},a.getNextWeek=function(){a.setState({week:a.state.week+7,date:a.getActualDate(a.state.eventDate,0)})},a.todayButton=function(){a.setState({week:0})},a.currentMonthAndYear=function(){var e=E()().startOf("week").toDate();e=new Date(e.setDate(e.getDate()+a.state.week))+"";var t=E()().endOf("week").toDate();return t=new Date(t.setDate(t.getDate()+a.state.week))+"","".concat(e.split(" ")[1]," ").concat(e.split(" ")[3]," - ").concat(t.split(" ")[1]," ").concat(t.split(" ")[3])},a.showPopup=function(e,t,n,r){var s=t<=9?"0".concat(t):t,o="010:00"===e?"10:00":e;a.setState({date:a.getActualDate(s,r),eventDate:s,eventTime:o,id:n,popup:!a.state.popup})},a.closePopup=function(){a.setState({popup:!a.state.popup})},a.state={popup:!1,week:0,eventTime:"",eventDate:"",array:[],date:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;_().then((function(t){e.setState({array:t})})).catch((function(){return alert("Internal Server Error. Can't display events")}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.popup!==t.popup&&_().then((function(e){a.setState({array:e})})).catch((function(){return alert("Internal Server Error. Can't display events")}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{array:this.state.array,getMonday:this.getMonday,showPopup:this.showPopup,getPrevWeek:this.getPrevWeek,getNextWeek:this.getNextWeek,todayButton:this.todayButton,currentMonthAndYear:this.currentMonthAndYear()}),r.a.createElement(O,{week:this.state.week,showPopup:this.showPopup}),this.state.popup&&r.a.createElement(T,{createTask:this.createTask,eventTime:this.state.eventTime,id:this.state.id,delete:this.delete,date:this.state.date,closePopup:this.closePopup}))}}]),t}(r.a.Component);a(22);o.a.render(r.a.createElement(M,null),document.querySelector("#root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.d56bc34d.chunk.js.map