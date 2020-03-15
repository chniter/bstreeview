/*
 @preserve
 bstreeview.js
 Version: 1.0.0
 Authors: Sami CHNITER <sami.chniter@gmail.com>
 Copyright 2020
 License: Apache License 2.0

 Project: https://github.com/chniter/bstreeview
*/
(function(a,m,n,p){function g(b,f){this.element=b;this.itemIdPrefix=b.id+"-item-";this.settings=a.extend({},l,f);this.init()}var l={expandIcon:"fa fa-angle-down",collapseIcon:"fa fa-angle-right",indent:1.25};a.extend(g.prototype,{init:function(){this.tree=[];this.nodes=[];this.settings.data&&(this.settings.data=a.parseJSON(this.settings.data),this.tree=a.extend(!0,[],this.settings.data),delete this.settings.data);a(this.element).addClass("bstreeview");this.initData({nodes:this.tree});var b=this;this.build(a(this.element),
this.tree,0);a(".bstreeview").on("click",".list-group-item",function(){a(".state-icon",this).toggleClass(b.settings.expandIcon).toggleClass(b.settings.collapseIcon)})},initData:function(b){if(b.nodes){var f=this;a.each(b.nodes,function(a,c){c.nodeId=f.nodes.length;c.parentId=b.nodeId;f.nodes.push(c);c.nodes&&f.initData(c)})}},build:function(b,f,h){var c=this,g="1.25rem;";0<h&&(g=(c.settings.indent+h*c.settings.indent).toString()+"rem;");h+=1;a.each(f,function(f,d){var e=a('<div href="#itemid" class="list-group-item" data-toggle="collapse"></div>').attr("href",
"#"+c.itemIdPrefix+d.nodeId).attr("style","padding-left:"+g);if(d.nodes){var k=a('<i class="state-icon"></i>').addClass(c.settings.collapseIcon);e.append(k)}d.icon&&(k=a('<i class="item-icon"></i>').addClass(d.icon),e.append(k));e.append(d.text);d.href&&e.attr("href",d.href);d["class"]&&e.addClass(d["class"]);b.append(e);d.nodes&&(e=a('<div class="list-group collapse" id="itemid"></div>').attr("id",c.itemIdPrefix+d.nodeId),b.append(e),c.build(e,d.nodes,h))})}});a.fn.bstreeview=function(b){return this.each(function(){a.data(this,
"plugin_bstreeview")||a.data(this,"plugin_bstreeview",new g(this,b))})}})(jQuery,window,document);