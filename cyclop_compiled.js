if(!lt.util.load.provided_QMARK_('lt.plugins.cyclop')) {
goog.provide('lt.plugins.cyclop');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.console');
goog.require('lt.objs.command');
lt.plugins.cyclop.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"raw","raw",1014016922)], null));
lt.plugins.cyclop.modes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"raw","raw",1014016922),"Raw",new cljs.core.Keyword(null,"boxes","boxes",1107834667),"Pretty boxes",new cljs.core.Keyword(null,"graph","graph",1112519872),"2D-graph"], null);
lt.plugins.cyclop.mode_button = (function mode_button(this$,mode_keyword){var e__7755__auto__ = crate.core.html.call(null,(function (){var title = cljs.core.get.call(null,lt.plugins.cyclop.modes,mode_keyword,"MISSING");return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.mode-button","button.mode-button",1190551890),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.name.call(null,mode_keyword)], null),title], null);
})());var seq__16340_16390 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"select-mode","select-mode",1182979910),mode_keyword);
});})(e__7755__auto__))
], null)));var chunk__16341_16391 = null;var count__16342_16392 = 0;var i__16343_16393 = 0;while(true){
if((i__16343_16393 < count__16342_16392))
{var vec__16344_16394 = cljs.core._nth.call(null,chunk__16341_16391,i__16343_16393);var ev__7756__auto___16395 = cljs.core.nth.call(null,vec__16344_16394,0,null);var func__7757__auto___16396 = cljs.core.nth.call(null,vec__16344_16394,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___16395,func__7757__auto___16396);
{
var G__16397 = seq__16340_16390;
var G__16398 = chunk__16341_16391;
var G__16399 = count__16342_16392;
var G__16400 = (i__16343_16393 + 1);
seq__16340_16390 = G__16397;
chunk__16341_16391 = G__16398;
count__16342_16392 = G__16399;
i__16343_16393 = G__16400;
continue;
}
} else
{var temp__4092__auto___16401 = cljs.core.seq.call(null,seq__16340_16390);if(temp__4092__auto___16401)
{var seq__16340_16402__$1 = temp__4092__auto___16401;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16340_16402__$1))
{var c__7112__auto___16403 = cljs.core.chunk_first.call(null,seq__16340_16402__$1);{
var G__16404 = cljs.core.chunk_rest.call(null,seq__16340_16402__$1);
var G__16405 = c__7112__auto___16403;
var G__16406 = cljs.core.count.call(null,c__7112__auto___16403);
var G__16407 = 0;
seq__16340_16390 = G__16404;
chunk__16341_16391 = G__16405;
count__16342_16392 = G__16406;
i__16343_16393 = G__16407;
continue;
}
} else
{var vec__16345_16408 = cljs.core.first.call(null,seq__16340_16402__$1);var ev__7756__auto___16409 = cljs.core.nth.call(null,vec__16345_16408,0,null);var func__7757__auto___16410 = cljs.core.nth.call(null,vec__16345_16408,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___16409,func__7757__auto___16410);
{
var G__16411 = cljs.core.next.call(null,seq__16340_16402__$1);
var G__16412 = null;
var G__16413 = 0;
var G__16414 = 0;
seq__16340_16390 = G__16411;
chunk__16341_16391 = G__16412;
count__16342_16392 = G__16413;
i__16343_16393 = G__16414;
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
lt.plugins.cyclop.mode_selection_bar = (function mode_selection_bar(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",1323954190),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.plugins.cyclop.mode_button.call(null,this$,new cljs.core.Keyword(null,"raw","raw",1014016922))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.plugins.cyclop.mode_button.call(null,this$,new cljs.core.Keyword(null,"boxes","boxes",1107834667))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.plugins.cyclop.mode_button.call(null,this$,new cljs.core.Keyword(null,"graph","graph",1112519872))], null)], null)], null));var seq__16352_16415 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__16353_16416 = null;var count__16354_16417 = 0;var i__16355_16418 = 0;while(true){
if((i__16355_16418 < count__16354_16417))
{var vec__16356_16419 = cljs.core._nth.call(null,chunk__16353_16416,i__16355_16418);var ev__7756__auto___16420 = cljs.core.nth.call(null,vec__16356_16419,0,null);var func__7757__auto___16421 = cljs.core.nth.call(null,vec__16356_16419,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___16420,func__7757__auto___16421);
{
var G__16422 = seq__16352_16415;
var G__16423 = chunk__16353_16416;
var G__16424 = count__16354_16417;
var G__16425 = (i__16355_16418 + 1);
seq__16352_16415 = G__16422;
chunk__16353_16416 = G__16423;
count__16354_16417 = G__16424;
i__16355_16418 = G__16425;
continue;
}
} else
{var temp__4092__auto___16426 = cljs.core.seq.call(null,seq__16352_16415);if(temp__4092__auto___16426)
{var seq__16352_16427__$1 = temp__4092__auto___16426;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16352_16427__$1))
{var c__7112__auto___16428 = cljs.core.chunk_first.call(null,seq__16352_16427__$1);{
var G__16429 = cljs.core.chunk_rest.call(null,seq__16352_16427__$1);
var G__16430 = c__7112__auto___16428;
var G__16431 = cljs.core.count.call(null,c__7112__auto___16428);
var G__16432 = 0;
seq__16352_16415 = G__16429;
chunk__16353_16416 = G__16430;
count__16354_16417 = G__16431;
i__16355_16418 = G__16432;
continue;
}
} else
{var vec__16357_16433 = cljs.core.first.call(null,seq__16352_16427__$1);var ev__7756__auto___16434 = cljs.core.nth.call(null,vec__16357_16433,0,null);var func__7757__auto___16435 = cljs.core.nth.call(null,vec__16357_16433,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___16434,func__7757__auto___16435);
{
var G__16436 = cljs.core.next.call(null,seq__16352_16427__$1);
var G__16437 = null;
var G__16438 = 0;
var G__16439 = 0;
seq__16352_16415 = G__16436;
chunk__16353_16416 = G__16437;
count__16354_16417 = G__16438;
i__16355_16418 = G__16439;
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
lt.plugins.cyclop.inspector = (function inspector(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inspector","div.inspector",4583540044)], null));var seq__16364_16440 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__16365_16441 = null;var count__16366_16442 = 0;var i__16367_16443 = 0;while(true){
if((i__16367_16443 < count__16366_16442))
{var vec__16368_16444 = cljs.core._nth.call(null,chunk__16365_16441,i__16367_16443);var ev__7756__auto___16445 = cljs.core.nth.call(null,vec__16368_16444,0,null);var func__7757__auto___16446 = cljs.core.nth.call(null,vec__16368_16444,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___16445,func__7757__auto___16446);
{
var G__16447 = seq__16364_16440;
var G__16448 = chunk__16365_16441;
var G__16449 = count__16366_16442;
var G__16450 = (i__16367_16443 + 1);
seq__16364_16440 = G__16447;
chunk__16365_16441 = G__16448;
count__16366_16442 = G__16449;
i__16367_16443 = G__16450;
continue;
}
} else
{var temp__4092__auto___16451 = cljs.core.seq.call(null,seq__16364_16440);if(temp__4092__auto___16451)
{var seq__16364_16452__$1 = temp__4092__auto___16451;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16364_16452__$1))
{var c__7112__auto___16453 = cljs.core.chunk_first.call(null,seq__16364_16452__$1);{
var G__16454 = cljs.core.chunk_rest.call(null,seq__16364_16452__$1);
var G__16455 = c__7112__auto___16453;
var G__16456 = cljs.core.count.call(null,c__7112__auto___16453);
var G__16457 = 0;
seq__16364_16440 = G__16454;
chunk__16365_16441 = G__16455;
count__16366_16442 = G__16456;
i__16367_16443 = G__16457;
continue;
}
} else
{var vec__16369_16458 = cljs.core.first.call(null,seq__16364_16452__$1);var ev__7756__auto___16459 = cljs.core.nth.call(null,vec__16369_16458,0,null);var func__7757__auto___16460 = cljs.core.nth.call(null,vec__16369_16458,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___16459,func__7757__auto___16460);
{
var G__16461 = cljs.core.next.call(null,seq__16364_16452__$1);
var G__16462 = null;
var G__16463 = 0;
var G__16464 = 0;
seq__16364_16440 = G__16461;
chunk__16365_16441 = G__16462;
count__16366_16442 = G__16463;
i__16367_16443 = G__16464;
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
lt.plugins.cyclop.full_panel = (function full_panel(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.full","div.full",1323760958),lt.plugins.cyclop.mode_selection_bar.call(null,this$),lt.plugins.cyclop.inspector.call(null,this$)], null));var seq__16376_16465 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__16377_16466 = null;var count__16378_16467 = 0;var i__16379_16468 = 0;while(true){
if((i__16379_16468 < count__16378_16467))
{var vec__16380_16469 = cljs.core._nth.call(null,chunk__16377_16466,i__16379_16468);var ev__7756__auto___16470 = cljs.core.nth.call(null,vec__16380_16469,0,null);var func__7757__auto___16471 = cljs.core.nth.call(null,vec__16380_16469,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___16470,func__7757__auto___16471);
{
var G__16472 = seq__16376_16465;
var G__16473 = chunk__16377_16466;
var G__16474 = count__16378_16467;
var G__16475 = (i__16379_16468 + 1);
seq__16376_16465 = G__16472;
chunk__16377_16466 = G__16473;
count__16378_16467 = G__16474;
i__16379_16468 = G__16475;
continue;
}
} else
{var temp__4092__auto___16476 = cljs.core.seq.call(null,seq__16376_16465);if(temp__4092__auto___16476)
{var seq__16376_16477__$1 = temp__4092__auto___16476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16376_16477__$1))
{var c__7112__auto___16478 = cljs.core.chunk_first.call(null,seq__16376_16477__$1);{
var G__16479 = cljs.core.chunk_rest.call(null,seq__16376_16477__$1);
var G__16480 = c__7112__auto___16478;
var G__16481 = cljs.core.count.call(null,c__7112__auto___16478);
var G__16482 = 0;
seq__16376_16465 = G__16479;
chunk__16377_16466 = G__16480;
count__16378_16467 = G__16481;
i__16379_16468 = G__16482;
continue;
}
} else
{var vec__16381_16483 = cljs.core.first.call(null,seq__16376_16477__$1);var ev__7756__auto___16484 = cljs.core.nth.call(null,vec__16381_16483,0,null);var func__7757__auto___16485 = cljs.core.nth.call(null,vec__16381_16483,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___16484,func__7757__auto___16485);
{
var G__16486 = cljs.core.next.call(null,seq__16376_16477__$1);
var G__16487 = null;
var G__16488 = 0;
var G__16489 = 0;
seq__16376_16465 = G__16486;
chunk__16377_16466 = G__16487;
count__16378_16467 = G__16488;
i__16379_16468 = G__16489;
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
lt.plugins.cyclop.get_selected_mode_button = (function get_selected_mode_button(){return lt.util.dom.$.call(null,[cljs.core.str("#"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.cyclop.state))))].join(''));
});
lt.plugins.cyclop.get_mode_buttons = (function get_mode_buttons(){return lt.util.dom.$$.call(null,".mode-button");
});
lt.plugins.cyclop.refresh_ui = (function refresh_ui(this$){var mode_buttons = lt.plugins.cyclop.get_mode_buttons.call(null);var selected_mode_button = lt.plugins.cyclop.get_selected_mode_button.call(null);var seq__16386_16490 = cljs.core.seq.call(null,mode_buttons);var chunk__16387_16491 = null;var count__16388_16492 = 0;var i__16389_16493 = 0;while(true){
if((i__16389_16493 < count__16388_16492))
{var b_16494 = cljs.core._nth.call(null,chunk__16387_16491,i__16389_16493);lt.util.dom.remove_class.call(null,b_16494,new cljs.core.Keyword(null,"selected","selected",2205476365));
{
var G__16495 = seq__16386_16490;
var G__16496 = chunk__16387_16491;
var G__16497 = count__16388_16492;
var G__16498 = (i__16389_16493 + 1);
seq__16386_16490 = G__16495;
chunk__16387_16491 = G__16496;
count__16388_16492 = G__16497;
i__16389_16493 = G__16498;
continue;
}
} else
{var temp__4092__auto___16499 = cljs.core.seq.call(null,seq__16386_16490);if(temp__4092__auto___16499)
{var seq__16386_16500__$1 = temp__4092__auto___16499;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16386_16500__$1))
{var c__7112__auto___16501 = cljs.core.chunk_first.call(null,seq__16386_16500__$1);{
var G__16502 = cljs.core.chunk_rest.call(null,seq__16386_16500__$1);
var G__16503 = c__7112__auto___16501;
var G__16504 = cljs.core.count.call(null,c__7112__auto___16501);
var G__16505 = 0;
seq__16386_16490 = G__16502;
chunk__16387_16491 = G__16503;
count__16388_16492 = G__16504;
i__16389_16493 = G__16505;
continue;
}
} else
{var b_16506 = cljs.core.first.call(null,seq__16386_16500__$1);lt.util.dom.remove_class.call(null,b_16506,new cljs.core.Keyword(null,"selected","selected",2205476365));
{
var G__16507 = cljs.core.next.call(null,seq__16386_16500__$1);
var G__16508 = null;
var G__16509 = 0;
var G__16510 = 0;
seq__16386_16490 = G__16507;
chunk__16387_16491 = G__16508;
count__16388_16492 = G__16509;
i__16389_16493 = G__16510;
continue;
}
}
} else
{}
}
break;
}
return lt.util.dom.add_class.call(null,selected_mode_button,new cljs.core.Keyword(null,"selected","selected",2205476365));
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cyclop","cyclop.panel","lt.plugins.cyclop/cyclop.panel",3214433793),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cyclop.panel","cyclop.panel",531845000)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Cyclop",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.cyclop.full_panel.call(null,this$);
}));
lt.plugins.cyclop.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___16511 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___16511))
{var ts_16512 = temp__4092__auto___16511;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_16512))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_16512);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cyclop","on-close-destroy","lt.plugins.cyclop/on-close-destroy",3859548130),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cyclop.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.cyclop.__BEH__select_mode = (function __BEH__select_mode(this$,new_mode){cljs.core.swap_BANG_.call(null,lt.plugins.cyclop.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",1017261333)], null),new_mode);
return lt.plugins.cyclop.refresh_ui.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cyclop","select-mode","lt.plugins.cyclop/select-mode",3865572807),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cyclop.__BEH__select_mode,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select-mode","select-mode",1182979910),null], null), null));
lt.plugins.cyclop.cyclop = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.cyclop","cyclop.panel","lt.plugins.cyclop/cyclop.panel",3214433793));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cyclop","start","lt.plugins.cyclop/start",3823146933),new cljs.core.Keyword(null,"desc","desc",1016984067),"Cyclop: Start",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.cyclop.cyclop);
})], null));
}

//# sourceMappingURL=cyclop_compiled.js.map