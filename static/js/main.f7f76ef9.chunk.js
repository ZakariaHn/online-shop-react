(this.webpackJsonponline_shop_react=this.webpackJsonponline_shop_react||[]).push([[0],{10:function(t,e,n){t.exports=n(17)},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(15),n(6)),s=n(5),u=n(1),l=n(2),m=n(4),p=n(3),d=n(9),b=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props.item,n=e.id,a=e.price,o=e.ammount,c=e.inventory,i=e.icon,s=e.productName,u=e.totalPrice;return r.a.createElement("li",{key:n},s," ",r.a.createElement("i",null,i),r.a.createElement("h5",null,"Price for one item is ",a," Eu"),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"btn btn-danger btn-sm m-2",disabled:0===c,onClick:function(){return t.props.onIncrement(t.props.item)}},"+"),r.a.createElement("h5",null," ",o),r.a.createElement("button",{className:"btn btn-danger btn-sm m-2",disabled:0===o,onClick:function(){return t.props.onDecrement(t.props.item)}},"-")),r.a.createElement("h5",null,"Total price ".concat(u," Eu")),r.a.createElement("button",{onClick:function(){return t.props.onAddToCorp(t.props.item)},className:"btn btn-primary btn-sm m-2"},c>0?"Add to cart":"Sold out"))}}]),n}(r.a.Component),f=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(r.a.Fragment,null,this.props.data.map((function(e){return r.a.createElement(b,{item:e,key:e.id,onIncrement:t.props.onIncrement,onDecrement:t.props.onDecrement,onAddToCorp:t.props.onAddToCorp})})))}}]),n}(r.a.Component),h=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.onSubmit},r.a.createElement("input",{type:"text",onChange:this.props.onChange,value:this.props.userInput}),r.a.createElement("input",{type:"submit",value:"filter",className:"btn btn-warning btn-sm m-2 "}))}}]),n}(a.Component),v=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"counter"},r.a.createElement("button",{onClick:this.props.onReset,className:"btn btn-primary btn-sm m-2"},"Reset"),r.a.createElement("p",null,"Total Coasts:",this.props.totalCoasts))}}]),n}(a.Component),C=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).increment=function(t){var e=Object(s.a)(a.state.data),n=e.indexOf(t);e[n]=Object(i.a)({},t),e[n].ammount++,e[n].totalPrice=e[n].ammount*e[n].price,a.state.allItemsPrice.push(e[n].price),a.setState({data:e}),console.log(a.state.allItemsPrice)},a.decrement=function(t){var e=Object(s.a)(a.state.data),n=e.indexOf(t);e[n]=Object(i.a)({},t),e[n].ammount--,e[n].totalPrice=e[n].totalPrice-e[n].price,a.setState({data:e})},a.addToCorp=function(){var t=a.state.allItemsPrice.reduce((function(t,e){return t+e}));a.setState({totalCoasts:t})},a.changeHandler=function(t){a.setState({userInput:t.target.value.trim()});var e=a.state.userInput.toLowerCase(),n=a.state.data.filter((function(t){return t.productName===e}));""===a.state.userInput?a.setState({filteredData:[]}):a.setState({filteredData:n})},a.submitHandler=function(t){t.preventDefault();var e=a.state.userInput.toLowerCase(),n=e||"",r=a.state.data.filter((function(t){return t.productName===n}));a.setState({filteredData:r})},a.handleReset=function(){var t=a.state.data.map((function(t){return t.ammount=0,t.totalPrice=0,t}));a.setState({counters:t,totalCoasts:0})},a.state={userInput:"",data:d,filteredData:[],allItemsPrice:[],totalCoasts:0},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{onSubmit:this.submitHandler,onChange:this.changeHandler}),r.a.createElement(v,{onReset:this.handleReset,totalCoasts:this.state.totalCoasts}),r.a.createElement(f,{data:this.state.userInput?this.state.filteredData:this.state.data,onIncrement:this.increment,onDecrement:this.decrement,onAddToCorp:this.addToCorp}))}}]),n}(a.Component);n(16);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))},9:function(t){t.exports=JSON.parse('[{"id":0,"productName":"apple","icon":"\ud83c\udf4f","price":0.5,"inventory":10,"ammount":0,"totalPrice":0},{"id":1,"productName":"watermelon","icon":"\ud83c\udf49","price":1,"inventory":3,"ammount":0,"totalPrice":0},{"id":2,"productName":"pizza","icon":"\ud83c\udf55","price":7,"inventory":100,"ammount":0,"totalPrice":0},{"id":3,"productName":"salad","icon":"\ud83e\udd57","price":3.5,"inventory":0,"ammount":0,"totalPrice":0},{"id":4,"productName":"ice cream","icon":"\ud83c\udf66","price":2,"inventory":66,"ammount":0,"totalPrice":0}]')}},[[10,1,2]]]);
//# sourceMappingURL=main.f7f76ef9.chunk.js.map