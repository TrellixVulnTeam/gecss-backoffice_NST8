(window.webpackJsonp=window.webpackJsonp||[]).push([[67,66,68,69,70],{584:function(t,e,r){var content=r(697);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("827cab06",content,!0,{sourceMap:!1})},622:function(t,e,r){"use strict";r.r(e);var n={name:"RecordTable",props:{records:{type:Array,default:[]}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("DcTable",{scopedSlots:t._u([{key:"theader",fn:function(){return[e("th",{staticStyle:{"padding-left":"10px !important"}},[t._v("#")]),t._v(" "),e("th",[t._v("Branch Code")]),t._v(" "),e("th",[t._v("Branch")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Status")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Action")])]},proxy:!0},{key:"tbody",fn:function(){return[t.records.length?t._e():e("tr",[e("td"),e("td"),t._v(" "),e("td",[e("span",{staticStyle:{color:"purple"}},[t._v(" No records available ")])]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),t._t("default")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports},623:function(t,e,r){"use strict";r.r(e);var n=r(29),o=(r(65),{name:"CreateRecord",data:function(){return{create_record:{code:"",status:"",title:""},status:["Active","Agent","Dormant","Ongoing","Construction"],record_err:""}},methods:{formSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={code:t.create_record.code,status:t.create_record.status,title:t.create_record.title},e.next=3,t.$axios.$post("v1/branch/create",r).then((function(e){if(0==e.error){t.$bvModal.hide("add-record");Swal.fire({icon:"success",title:"Company branch created successfully"}),t.getRecords(),t.create_record={}}1==e.error&&(t.record_err="Member number not found. please recheck")}));case 3:case"end":return e.stop()}}),e)})))()}},props:{getRecords:{type:Function,default:null}}}),c=r(12),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.formSubmit.apply(null,arguments)}}},[e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Branch Code")]),t._v(" "),e("b-form-input",{attrs:{required:""},model:{value:t.create_record.code,callback:function(e){t.$set(t.create_record,"code",e)},expression:"create_record.code"}}),t._v(" "),t.record_err.length>1?e("div",{staticStyle:{color:"red"}},[t._v("\n                  "+t._s(t.record_err)+"\n                ")]):t._e()],1),t._v(" "),e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Branch")]),t._v(" "),e("b-form-input",{attrs:{required:""},model:{value:t.create_record.title,callback:function(e){t.$set(t.create_record,"title",e)},expression:"create_record.title"}})],1)]),t._v(" "),e("br"),t._v(" "),e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Status")]),t._v(" "),e("b-form-select",{attrs:{options:t.status,required:""},model:{value:t.create_record.status,callback:function(e){t.$set(t.create_record,"status",e)},expression:"create_record.status"}})],1)]),t._v(" "),e("br"),t._v(" "),e("SbButton"),t._v(" "),e("br")],1)],1)}),[],!1,null,null,null);e.default=component.exports},624:function(t,e,r){"use strict";r.r(e);var n={name:"RecordView",props:{recordbyId:{type:Object,default:null}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Branch Code")]),t._v(" "),e("b-form-input",{model:{value:t.recordbyId.code,callback:function(e){t.$set(t.recordbyId,"code",e)},expression:"recordbyId.code"}})],1),t._v(" "),e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Branch")]),t._v(" "),e("b-form-input",{model:{value:t.recordbyId.title,callback:function(e){t.$set(t.recordbyId,"title",e)},expression:"recordbyId.title"}})],1)]),t._v(" "),e("br"),t._v(" "),e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Status")]),t._v(" "),e("b-form-input",{model:{value:t.recordbyId.status,callback:function(e){t.$set(t.recordbyId,"status",e)},expression:"recordbyId.status"}})],1)]),t._v(" "),e("br")])}),[],!1,null,null,null);e.default=component.exports},625:function(t,e,r){"use strict";r.r(e);var n=r(29),o=(r(65),{name:"RecordUpdate",methods:{updateRecord:function(data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=data.id,n={code:data.code,title:data.title,status:data.status},e.next=4,t.$axios.$post("v1/branch/update/".concat(r),n).then((function(e){if("false"==e.error){t.$bvModal.hide("dmk-update-record");Swal.fire({icon:"success",title:"Company branch updated successfully"}),t.getRecords()}}));case 4:case"end":return e.stop()}}),e)})))()}},props:{recordbyId:{type:Object,default:null},getRecords:{type:Function,default:null}}}),c=r(12),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("form",{on:{submit:function(e){return e.preventDefault(),t.updateRecord(t.recordbyId)}}},[e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Branch Code")]),t._v(" "),e("b-form-input",{attrs:{required:""},model:{value:t.recordbyId.code,callback:function(e){t.$set(t.recordbyId,"code",e)},expression:"recordbyId.code"}})],1),t._v(" "),e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Branch")]),t._v(" "),e("b-form-input",{attrs:{options:t.status_m},model:{value:t.recordbyId.title,callback:function(e){t.$set(t.recordbyId,"title",e)},expression:"recordbyId.title"}})],1)]),t._v(" "),e("br"),t._v(" "),e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Status")]),t._v(" "),e("b-form-input",{attrs:{options:t.status,required:""},model:{value:t.recordbyId.status,callback:function(e){t.$set(t.recordbyId,"status",e)},expression:"recordbyId.status"}})],1)]),t._v(" "),e("br"),t._v(" "),e("SbButton",{attrs:{title:"Update record"}}),t._v(" "),e("br")],1)])}),[],!1,null,null,null);e.default=component.exports},696:function(t,e,r){"use strict";r(584)},697:function(t,e,r){var n=r(38)(!1);n.push([t.i,"\n.status-btn[data-v-3f2d88dc]{\n\tborder-radius: 0px !important;\n\tpadding: 0px 2px 0px 2px !important;\n\tfont-size: 12px !important;\n\twidth: 80px !important;\n}\n",""]),t.exports=n},716:function(t,e,r){"use strict";r.r(e);r(16),r(2),r(1),r(10),r(152);var n=r(29),o=(r(45),r(65),r(196)),table=r(622),c=r(623),view=r(624),d=r(625),l={components:{RecordTable:table.default,Button:o.default,CreateRecord:c.default,RecordView:view.default,RecordUpdate:d.default},data:function(){return{records:[],recordbyId:{},status:"9",record_spinner:!1,search:{queary:"",pageSearch:null,pageError:!1},pagination:{rows:null,perPage:null,rowperPage:null,currentPage:null,countOnPage:null,totalPages:null,fromCount:null,toCount:null},paginationLinks:{self:"",last:"",first:"",prev:""},global_pagination:{},perms:{perms_add:"",perms_view:"",perms_update:"",perms_delete:"",perms_restore:"",perms_status:"",barcode:""}}},mounted:function(){this.getRecordOnMount(),this.getPerms()},methods:{setLoadingTrue:function(){this.$refs.blockLoadingRefresh.stateLoading()},setLoadingFalse:function(){this.$refs.blockLoadingRefresh.stateNormal()},getPerms:function(){this.perms.perms_add="1",this.perms.perms_view="1",this.perms.perms_update="1",this.perms.perms_delete="1",this.perms.perms_restore="1",this.perms.perms_status="1"},getRecordOnMount:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoadingTrue(),r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,e.next=5,t.$axios.$get("v1/branches").then((function(e){t.records=e}));case 5:t.setLoadingFalse();case 6:case"end":return e.stop()}}),e)})))()},getRecords:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoadingTrue(),r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,e.next=5,t.$axios.$get("v1/branches").then((function(e){t.records=e}));case 5:t.setLoadingFalse();case 6:case"end":return e.stop()}}),e)})))()},getRecordById:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.$bvModal.show("dmk-update-record"),e.record_spinner=!0,n=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+n,r.next=6,e.$axios.$get("v1/branch/".concat(t)).then((function(t){e.recordbyId=t}));case 6:e.record_spinner=!1;case 7:case"end":return r.stop()}}),r)})))()},viewRecord:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.$bvModal.show("dmk-view-record"),e.record_spinner=!0,n=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+n,r.next=6,e.$axios.$get("v1/branch/".concat(t)).then((function(t){e.recordbyId=t}));case 6:e.record_spinner=!1;case 7:case"end":return r.stop()}}),r)})))()},deleteRecord:function(t){var e=this,r=localStorage.getItem("token");this.$axios.defaults.headers.common.Authorization="Token "+r,Swal.fire({icon:"warning",title:"Do you want to delete selected record?",showCancelButton:!0,confirmButtonText:"Delete"}).then((function(r){r.isConfirmed?e.$axios.$delete("v1/branch/delete/".concat(t)).then((function(t){if("false"==t.error){Swal.fire("Company branch deleted successfully","","success"),e.getRecords()}})):r.isDenied&&Swal.fire("Changes are not saved","","info")}))},searchRecords:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoadingTrue(),""==t.search.queary&&t.getRecordOnMount(),r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,e.next=6,t.$axios.$get("v1/branch/search/".concat(t.search.queary)).then((function(e){t.records=e}));case 6:t.setLoadingFalse();case 7:case"end":return e.stop()}}),e)})))()},resetRecords:function(t){var e=this;this.$refs[t].stateLoading(),this.search={},this.getRecordOnMount(),setTimeout((function(){e.$refs[t].stateNormal()}),2e3)},addRecord:function(){this.$bvModal.show("add-record")}},head:function(){return{title:"Gecss | Branches"}}},v=(r(696),r(12)),component=Object(v.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"content"},[e("base-block",{ref:"blockLoadingRefresh",staticClass:"block-mode-loading-refresh",attrs:{rounded:"",title:"GECSS BRANCHES","header-bg":"","btn-option-fullscreen":""},scopedSlots:t._u([{key:"options",fn:function(){return[e("button",{staticClass:"btn-block-option",attrs:{type:"button","data-uk-tooltip":"Refresh"},on:{click:function(e){return t.resetRecords("blockLoadingRefresh")}}},[e("i",{staticClass:"si si-refresh"})]),t._v(" "),e("button",{staticClass:"btn-block-option",attrs:{type:"button","data-uk-tooltip":"Add new record"},on:{click:t.addRecord}},[e("i",{staticClass:"si si-plus"})]),t._v(" "),e("button",{staticClass:"btn-block-option",attrs:{type:"button","data-uk-tooltip":"Filter records"}},[e("i",{staticClass:"fa fa-filter"})])]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"dmk-search-td-con"},[e("RowsFilter",{attrs:{rowsPerPage:t.rowsPerPage}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.pagination.rowperPage,expression:"pagination.rowperPage"}],staticStyle:{"text-align":"center"},attrs:{id:"rowsperPage"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.pagination,"rowperPage",e.target.multiple?r:r[0])},function(e){return t.rowsPerPage()}]}},[e("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),e("option",{attrs:{value:"25"}},[t._v("25")]),t._v(" "),e("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),e("option",{attrs:{value:"100"}},[t._v("100")])])]),t._v(" "),e("div",{staticStyle:{display:"flex"}},[e("form",{attrs:{method:"get"},on:{submit:function(e){return e.preventDefault(),t.searchRecords()}}},[e("div",{staticClass:"dmk-search-con"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search.queary,expression:"search.queary"}],staticClass:"form-control dmk-search-input",attrs:{type:"text",placeholder:"search "},domProps:{value:t.search.queary},on:{input:function(e){e.target.composing||t.$set(t.search,"queary",e.target.value)}}}),t._v(" "),e("button",{staticClass:"dmk-search-btn",attrs:{type:"submit"}},[e("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])])])],1),t._v(" "),e("RecordTable",{attrs:{records:t.records}},t._l(t.records,(function(r,n){return e("tr",{key:r.id,attrs:{id:"dmk-td-items"}},[e("td",{staticClass:"td-1st-nth"},[t._v(" "+t._s(n+1)+" ")]),t._v(" "),e("td",[t._v(t._s(r.code))]),t._v(" "),e("td",{},[t._v(t._s(r.title))]),t._v(" "),e("td",{staticClass:"text-center"},["Active"==r.status?e("button",{staticClass:"btn status-btn btn-success",attrs:{type:"button","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t"+t._s(r.status)+"\n\t\t\t\t")]):"Agent"==r.status?e("button",{staticClass:"btn status-btn btn-primary",attrs:{type:"button","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t"+t._s(r.status)+"\n\t\t\t\t")]):"Ongoing"==r.status?e("button",{staticClass:"btn status-btn btn-info",attrs:{type:"button","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t"+t._s(r.status)+"\n\t\t\t\t")]):"Construction"==r.status?e("button",{staticClass:"btn status-btn btn-success",attrs:{type:"button","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t"+t._s(r.status)+"\n\t\t\t\t")]):e("button",{staticClass:"btn status-btn btn-secondary",attrs:{type:"button","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t"+t._s(r.status)+"\n\t\t\t\t")])]),t._v(" "),e("td",[e("EDropdown",{attrs:{statusCode:r.status,Id:r.id,deleteRecord:t.deleteRecord,restoreRecord:t.restoreRecord,getRecordById:t.viewRecord,qrgenerate:t.qrgenerate,getRecordUpdateById:t.getRecordById,perms_view:t.perms.perms_view,perms_update:t.perms.perms_update,perms_delete:t.perms.perms_delete,perms_restore:t.perms.perms_restore}})],1)])})),0),t._v(" "),e("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("div",{}),t._v(" "),e("DcPagination",{attrs:{countOnPage:this.pagination.countOnPage,rows:this.pagination.rows,fromCount:this.pagination.fromCount,toCount:this.pagination.toCount,rowperPage:this.pagination.rowperPage,currentPage:this.pagination.currentPage,totalPages:this.pagination.totalPages,previousPage:t.previousPage,nextPage:t.nextPage,searchPageNo:t.searchPageNo}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.pagination.currentPage,expression:"pagination.currentPage"}],staticClass:"dmk-searpage-input",staticStyle:{"text-align":"center"},attrs:{type:"number"},domProps:{value:t.pagination.currentPage},on:{input:function(e){e.target.composing||t.$set(t.pagination,"currentPage",e.target.value)}}})])],1)],1),t._v(" "),e("OuModal",{attrs:{mdId:"add-record",size:"md",title:"Add Branch"}},[e("CreateRecord",{attrs:{getRecords:t.getRecords}})],1),t._v(" "),e("OuModal",{attrs:{mdId:"dmk-view-record",size:"md",title:"Branch Details",modalSpinner:t.record_spinner}},[e("RecordView",{attrs:{recordbyId:t.recordbyId}})],1),t._v(" "),e("OuModal",{attrs:{mdId:"dmk-update-record",size:"md",title:"Update Branch Details",modalSpinner:t.record_spinner}},[e("RecordUpdate",{attrs:{recordbyId:t.recordbyId,getRecords:t.getRecords}})],1)],1)])}),[],!1,null,"3f2d88dc",null);e.default=component.exports;installComponents(component,{BaseBlock:r(291).default})}}]);