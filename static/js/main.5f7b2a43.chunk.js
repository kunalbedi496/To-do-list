(this.webpackJsonptodoappp=this.webpackJsonptodoappp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(3),l=n.n(o),r=(n(13),n(1)),c=n(4),s=n(5),u=n(7),m=n(6),d=(n(14),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={newItem:"",list:[]},a}return Object(s.a)(n,[{key:"addItem",value:function(e){if(""!==e){var t={id:Date.now(),value:e,isDone:!1},n=Object(r.a)(this.state.list);n.push(t),this.setState({list:n,newItem:""})}}},{key:"deleteItem",value:function(e){var t=Object(r.a)(this.state.list).filter((function(t){return t.id!==e}));this.setState({list:t})}},{key:"updateInput",value:function(e){this.setState({newItem:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h1",{className:"app-title"},"ToDo App"),i.a.createElement("div",{className:"container"},"Add an Item...",i.a.createElement("br",null),i.a.createElement("input",{type:"text",className:"input-text",placeholder:"Write a Todo",required:!0,value:this.state.newItem,onChange:function(t){return e.updateInput(t.target.value)}}),i.a.createElement("button",{className:"add-btn",onClick:function(){return e.addItem(e.state.newItem)},disabled:!this.state.newItem.length},"Add Todo"),i.a.createElement("div",{className:"list"},i.a.createElement("ul",null,this.state.list.map((function(t){return i.a.createElement("li",{key:t.id},i.a.createElement("input",{type:"checkbox",name:"idDone",onChange:function(){}}),t.value,i.a.createElement("button",{className:"btn",onClick:function(){return e.deleteItem(t.id)}},"Delete"))}))))))}}]),n}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.5f7b2a43.chunk.js.map