(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{24:function(e,t,a){e.exports=a(71)},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(21),c=a.n(o),l=a(7),s=a.n(l),i=a(11),u=a(8),m=a(3),h=a(4),p=a(6),d=a(5),g=a(10),f=a.n(g);f.a.defaults.baseURL="https://pixabay.com";var v="17616559-acc4465745e7b4973de900fa6",b={fetchImgWithQuery:function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,r,n=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",a=n.length>1&&void 0!==n[1]?n[1]:1,e.prev=2,e.next=5,f.a.get("/api/?q=".concat(t,"&page=").concat(a,"&key=").concat(v,"&image_type=photo&orientation=horizontal&per_page=12"));case 5:return r=e.sent,e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},y={inputValue:""},E=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={inputValue:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.resetState()},e.handleChange=function(t){var a=t.target;e.setState({inputValue:a.value})},e.resetState=function(){e.setState(y)},e}return Object(h.a)(a,[{key:"render",value:function(){return n.a.createElement("header",{className:"Searchbar"},n.a.createElement("form",{className:"SearchForm",onSubmit:this.handleSubmit},n.a.createElement("button",{type:"submit",className:"SearchForm-button"},n.a.createElement("span",{className:"SearchForm-button-label"},"Search")),n.a.createElement("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.inputValue,onChange:this.handleChange})))}}]),a}(r.Component),S=a(23),w=function(e){var t=e.onShowModal,a=e.otherProps,r=a.largeImageURL,o=a.webformatURL;return n.a.createElement("li",{className:"ImageGalleryItem"},n.a.createElement("img",{src:o,alt:"gallery-img",className:"ImageGalleryItem-image",onClick:function(){return t(r)}}))},k=function(e){var t=e.images,a=e.onShowModal;return n.a.createElement("ul",{className:"ImageGallery"},t.map((function(e){var t=e.id,r=Object(S.a)(e,["id"]);return n.a.createElement(w,{key:t,onShowModal:a,otherProps:r})})))},M=function(e){var t=e.onLoadMore;return n.a.createElement("div",{className:"BtnBox"},n.a.createElement("button",{type:"button",className:"Button",onClick:t},"Load more"))},O=a(22),j=a.n(O),C=(a(68),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"BtnBox"},n.a.createElement(j.a,{type:"Grid",color:"#3f51b5",height:50,width:50,timeout:0}))}}]),a}(r.Component)),N=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleMouseClick=function(t){"Overlay"===t.target.className&&e.props.onClose()},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return n.a.createElement("div",{className:"Overlay",onClick:this.handleMouseClick},n.a.createElement("div",{className:"Modal"},this.props.children))}}]),a}(r.Component),I=a(9),x=a.n(I),L=function(e){var t=e.error;return n.a.createElement("div",{className:x.a.errorBox},n.a.createElement("p",{className:x.a.errorTitle},"Load error:"),n.a.createElement("p",{className:x.a.errorMessage},t))};L.defaultProps={error:"Unknown error. Try later :("};var B=L,_=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={images:[],searchQuery:"popular",page:1,totalPage:0,loader:!1,isModalImg:null,error:null},e.handleSearchBar=function(t){e.setState({searchQuery:t,images:[],page:1})},e.handleLoadMore=function(){e.fetchImages()},e.fetchImages=Object(u.a)(s.a.mark((function t(){var a,r,n,o,c,l;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,r=a.searchQuery,n=a.page,e.setState({loader:!0}),t.prev=2,t.next=5,b.fetchImgWithQuery(r,n);case 5:o=t.sent,c=o.hits,l=o.totalHits,e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(c)),page:e.page+1,totalPage:l,error:null}})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),e.setState({error:t.t0.toString()});case 13:return t.prev=13,e.setState({loader:!1}),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[2,10,13,16]])}))),e.openModal=function(t){e.setState({isModalImg:t})},e.closeModal=function(){e.setState({isModalImg:null})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.setState({loader:!0}),this.fetchImages()}},{key:"componentDidUpdate",value:function(e,t){var a=t.searchQuery,r=this.state.searchQuery,n=t.page,o=this.state.page;a!==r&&this.fetchImages(),o>2&&n!==o&&this.scrollDown()}},{key:"scrollDown",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loader,r=e.page,o=e.totalPage,c=e.isModalImg,l=e.error,s=t.length>0,i=s&&!a&&r!==o;return n.a.createElement(n.a.Fragment,null,n.a.createElement(E,{onSubmit:this.handleSearchBar}),l&&n.a.createElement(B,{error:l}),s&&n.a.createElement(k,{images:t,onShowModal:this.openModal}),c&&n.a.createElement(N,{onClose:this.closeModal},n.a.createElement("img",{src:c,alt:"big-img"})),i&&n.a.createElement(M,{onLoadMore:this.handleLoadMore}),a&&n.a.createElement(C,null))}}]),a}(r.Component);a(69),a(70);c.a.render(n.a.createElement(_,null),document.querySelector("#root"))},9:function(e,t,a){e.exports={errorBox:"Error_errorBox__3ZuLB",errorTitle:"Error_errorTitle__3C2St",errorMessage:"Error_errorMessage__3XRPF"}}},[[24,1,2]]]);
//# sourceMappingURL=main.ee8a8809.chunk.js.map