(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a6bd8ac"],{"086e":function(t,s,o){t.exports=o.p+"img/usdt.27fabadb.svg"},6313:function(t,s,o){t.exports=o.p+"img/ai.7aede94f.svg"},8065:function(t,s,o){"use strict";o.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("van-overlay",{staticClass:"board-redeem",attrs:{show:t.show},on:{click:function(s){t.show=!1}}},[e("div",{staticClass:"container",on:{click:function(t){t.stopPropagation()}}},[e("span",[t._v(t._s(t.$t("boardRedeem.text1"))+t._s(t.orderInfo.id))]),e("div",{staticClass:"lockout"},[e("div",{staticClass:"lp-info"},[e("span",[t._v(t._s(t.$t("boardRedeem.text2")))]),e("div",[e("span",[t._v(t._s(t.orderInfo.lpNum)+" LP")]),e("span",[t._v("≈$"+t._s(t.orderInfo.usd.toFixed(2)))])])]),e("div",{staticClass:"tokens"},[e("div",[e("img",{attrs:{src:o("086e")}}),e("span",[t._v(t._s(t.orderInfo.usd.toFixed(4))+" USDT")])]),e("div",[e("img",{attrs:{src:o("6313")}}),e("span",[t._v(t._s(t.orderInfo.pin.toFixed(4))+" AI")])])])]),e("div",{staticClass:"power"},[e("span",[t._v(t._s(t.$t("boardRedeem.text3")))]),e("span",[t._v(t._s(t.orderInfo.power))])]),e("van-button",{on:{click:t.doRedeem}},[t._v(t._s(t.$t("boardRedeem.text4")))])],1)])},n=[],a={props:{orderInfo:{type:Object,required:!0}},data:function(){return{show:!1}},methods:{display:function(){this.show=!0},doRedeem:function(){var t=this,s=this.$contracts.Shareholders.methods.doRedeem(this.orderInfo.id);s.call({from:this.$address},(function(o,e){!o&&e&&s.send({from:t.$address}).on("transactionHash",(function(s){vant.Toast.loading({message:t.$t("transaction.text7"),forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(s){vant.Toast.clear(),vant.Toast.success(t.$t("boardRedeem.text5")),t.$emit("reload"),t.show=!1})).on("error",(function(s){vant.Toast.clear(),vant.Toast.fail(t.$t("transaction.text13"))}))}))}}},i=a,r=i,d=(o("c31d"),o("2877")),c=Object(d["a"])(r,e,n,!1,null,"09d26b9a",null);s["default"]=c.exports},a893:function(t,s,o){},c31d:function(t,s,o){"use strict";o("a893")}}]);