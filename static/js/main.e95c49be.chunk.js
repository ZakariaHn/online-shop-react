(this.webpackJsonponline_shop_react=this.webpackJsonponline_shop_react||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(13),n(1)),u=n(2),m=n(4),l=n(3),s=n(7),d=function(t){Object(m.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).increment=function(){a.setState({ammount:a.state.ammount+1})},a.decrement=function(){a.setState({ammount:a.state.ammount-1})},a.state={ammount:0,data:a.props.info},a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("li",{key:this.state.data.id},this.state.data.productName," ",r.a.createElement("i",null,this.state.data.icon),r.a.createElement("h5",null,this.state.data.price," Eu"),r.a.createElement("h2",null),r.a.createElement("button",{disabled:0===this.state.data.inventory,onClick:this.increment},this.state.data.inventory>0?"Add to cart":"Sold out"),r.a.createElement("button",{disabled:0===this.state.ammount,onClick:this.decrement},"Remove from cart"),r.a.createElement("h2",null,this.state.ammount))}}]),n}(r.a.Component),p=function(t){var e=t.data.map((function(t,e){return r.a.createElement(d,{info:t,key:e})}));return r.a.createElement("ul",null,e)},h=function(t){Object(m.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Welcome to our online store"),r.a.createElement(p,{data:s}))}}]),n}(a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))},7:function(t){t.exports=JSON.parse('[{"id":0,"productName":"Apple","icon":"\ud83c\udf4f","price":0.5,"inventory":10,"ammount":0},{"id":1,"productName":"Watermelon","icon":"\ud83c\udf49","price":1,"inventory":3,"ammount":0},{"id":2,"productName":"Pizza","icon":"\ud83c\udf55","price":7,"inventory":100,"ammount":0},{"id":3,"productName":"Salad","icon":"\ud83e\udd57","price":3.5,"inventory":0,"ammount":0},{"id":4,"productName":"Ice cream","icon":"\ud83c\udf66","price":2,"inventory":66,"ammount":0}]')},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.e95c49be.chunk.js.map