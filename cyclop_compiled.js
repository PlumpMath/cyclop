if(!lt.util.load.provided_QMARK_('lt.plugins.cyclop')) {
goog.provide('lt.plugins.cyclop');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.cyclop.hello_panel = (function hello_panel(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Cyclop",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",1323954190),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),"Raw"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),"Pretty boxes"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),"2D-graph"], null)], null)], null)], null)], null));var seq__8177_8183 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8178_8184 = null;var count__8179_8185 = 0;var i__8180_8186 = 0;while(true){
if((i__8180_8186 < count__8179_8185))
{var vec__8181_8187 = cljs.core._nth.call(null,chunk__8178_8184,i__8180_8186);var ev__7756__auto___8188 = cljs.core.nth.call(null,vec__8181_8187,0,null);var func__7757__auto___8189 = cljs.core.nth.call(null,vec__8181_8187,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8188,func__7757__auto___8189);
{
var G__8190 = seq__8177_8183;
var G__8191 = chunk__8178_8184;
var G__8192 = count__8179_8185;
var G__8193 = (i__8180_8186 + 1);
seq__8177_8183 = G__8190;
chunk__8178_8184 = G__8191;
count__8179_8185 = G__8192;
i__8180_8186 = G__8193;
continue;
}
} else
{var temp__4092__auto___8194 = cljs.core.seq.call(null,seq__8177_8183);if(temp__4092__auto___8194)
{var seq__8177_8195__$1 = temp__4092__auto___8194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8177_8195__$1))
{var c__7112__auto___8196 = cljs.core.chunk_first.call(null,seq__8177_8195__$1);{
var G__8197 = cljs.core.chunk_rest.call(null,seq__8177_8195__$1);
var G__8198 = c__7112__auto___8196;
var G__8199 = cljs.core.count.call(null,c__7112__auto___8196);
var G__8200 = 0;
seq__8177_8183 = G__8197;
chunk__8178_8184 = G__8198;
count__8179_8185 = G__8199;
i__8180_8186 = G__8200;
continue;
}
} else
{var vec__8182_8201 = cljs.core.first.call(null,seq__8177_8195__$1);var ev__7756__auto___8202 = cljs.core.nth.call(null,vec__8182_8201,0,null);var func__7757__auto___8203 = cljs.core.nth.call(null,vec__8182_8201,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8202,func__7757__auto___8203);
{
var G__8204 = cljs.core.next.call(null,seq__8177_8195__$1);
var G__8205 = null;
var G__8206 = 0;
var G__8207 = 0;
seq__8177_8183 = G__8204;
chunk__8178_8184 = G__8205;
count__8179_8185 = G__8206;
i__8180_8186 = G__8207;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cyclop","cyclop.hello","lt.plugins.cyclop/cyclop.hello",3224857911),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cyclop.hello","cyclop.hello",524574294)], null),new cljs.core.Keyword(null,"name","name",1017277949),"cyclop",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.cyclop.hello_panel.call(null,this$);
}));
lt.plugins.cyclop.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8208 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8208))
{var ts_8209 = temp__4092__auto___8208;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8209))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8209);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cyclop","on-close-destroy","lt.plugins.cyclop/on-close-destroy",3859548130),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cyclop.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.cyclop.hello = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.cyclop","cyclop.hello","lt.plugins.cyclop/cyclop.hello",3224857911));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cyclop","say-hello","lt.plugins.cyclop/say-hello",670486427),new cljs.core.Keyword(null,"desc","desc",1016984067),"cyclop: Say Hello",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.cyclop.hello);
})], null));
}

//# sourceMappingURL=cyclop_compiled.js.map