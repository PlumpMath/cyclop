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
lt.plugins.cyclop.example_data = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,150], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,200], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,300], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,250], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,370], null)], null);
lt.plugins.cyclop.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"raw","raw",1014016922),new cljs.core.Keyword(null,"data","data",1016980252),lt.plugins.cyclop.example_data], null));
lt.plugins.cyclop.modes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"raw","raw",1014016922),"Raw",new cljs.core.Keyword(null,"boxes","boxes",1107834667),"Pretty boxes",new cljs.core.Keyword(null,"graph","graph",1112519872),"2D-graph"], null);
lt.plugins.cyclop.mode_button = (function mode_button(this$,mode_keyword){var e__7755__auto__ = crate.core.html.call(null,(function (){var title = cljs.core.get.call(null,lt.plugins.cyclop.modes,mode_keyword,"MISSING");return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.mode-button","button.mode-button",1190551890),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.name.call(null,mode_keyword)], null),title], null);
})());var seq__30035_30134 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"select-mode","select-mode",1182979910),mode_keyword);
});})(e__7755__auto__))
], null)));var chunk__30036_30135 = null;var count__30037_30136 = 0;var i__30038_30137 = 0;while(true){
if((i__30038_30137 < count__30037_30136))
{var vec__30039_30138 = cljs.core._nth.call(null,chunk__30036_30135,i__30038_30137);var ev__7756__auto___30139 = cljs.core.nth.call(null,vec__30039_30138,0,null);var func__7757__auto___30140 = cljs.core.nth.call(null,vec__30039_30138,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___30139,func__7757__auto___30140);
{
var G__30141 = seq__30035_30134;
var G__30142 = chunk__30036_30135;
var G__30143 = count__30037_30136;
var G__30144 = (i__30038_30137 + 1);
seq__30035_30134 = G__30141;
chunk__30036_30135 = G__30142;
count__30037_30136 = G__30143;
i__30038_30137 = G__30144;
continue;
}
} else
{var temp__4092__auto___30145 = cljs.core.seq.call(null,seq__30035_30134);if(temp__4092__auto___30145)
{var seq__30035_30146__$1 = temp__4092__auto___30145;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30035_30146__$1))
{var c__7112__auto___30147 = cljs.core.chunk_first.call(null,seq__30035_30146__$1);{
var G__30148 = cljs.core.chunk_rest.call(null,seq__30035_30146__$1);
var G__30149 = c__7112__auto___30147;
var G__30150 = cljs.core.count.call(null,c__7112__auto___30147);
var G__30151 = 0;
seq__30035_30134 = G__30148;
chunk__30036_30135 = G__30149;
count__30037_30136 = G__30150;
i__30038_30137 = G__30151;
continue;
}
} else
{var vec__30040_30152 = cljs.core.first.call(null,seq__30035_30146__$1);var ev__7756__auto___30153 = cljs.core.nth.call(null,vec__30040_30152,0,null);var func__7757__auto___30154 = cljs.core.nth.call(null,vec__30040_30152,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___30153,func__7757__auto___30154);
{
var G__30155 = cljs.core.next.call(null,seq__30035_30146__$1);
var G__30156 = null;
var G__30157 = 0;
var G__30158 = 0;
seq__30035_30134 = G__30155;
chunk__30036_30135 = G__30156;
count__30037_30136 = G__30157;
i__30038_30137 = G__30158;
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
lt.plugins.cyclop.mode_selection_bar = (function mode_selection_bar(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",1323954190),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.plugins.cyclop.mode_button.call(null,this$,new cljs.core.Keyword(null,"raw","raw",1014016922))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.plugins.cyclop.mode_button.call(null,this$,new cljs.core.Keyword(null,"boxes","boxes",1107834667))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.plugins.cyclop.mode_button.call(null,this$,new cljs.core.Keyword(null,"graph","graph",1112519872))], null)], null)], null));var seq__30047_30159 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__30048_30160 = null;var count__30049_30161 = 0;var i__30050_30162 = 0;while(true){
if((i__30050_30162 < count__30049_30161))
{var vec__30051_30163 = cljs.core._nth.call(null,chunk__30048_30160,i__30050_30162);var ev__7756__auto___30164 = cljs.core.nth.call(null,vec__30051_30163,0,null);var func__7757__auto___30165 = cljs.core.nth.call(null,vec__30051_30163,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___30164,func__7757__auto___30165);
{
var G__30166 = seq__30047_30159;
var G__30167 = chunk__30048_30160;
var G__30168 = count__30049_30161;
var G__30169 = (i__30050_30162 + 1);
seq__30047_30159 = G__30166;
chunk__30048_30160 = G__30167;
count__30049_30161 = G__30168;
i__30050_30162 = G__30169;
continue;
}
} else
{var temp__4092__auto___30170 = cljs.core.seq.call(null,seq__30047_30159);if(temp__4092__auto___30170)
{var seq__30047_30171__$1 = temp__4092__auto___30170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30047_30171__$1))
{var c__7112__auto___30172 = cljs.core.chunk_first.call(null,seq__30047_30171__$1);{
var G__30173 = cljs.core.chunk_rest.call(null,seq__30047_30171__$1);
var G__30174 = c__7112__auto___30172;
var G__30175 = cljs.core.count.call(null,c__7112__auto___30172);
var G__30176 = 0;
seq__30047_30159 = G__30173;
chunk__30048_30160 = G__30174;
count__30049_30161 = G__30175;
i__30050_30162 = G__30176;
continue;
}
} else
{var vec__30052_30177 = cljs.core.first.call(null,seq__30047_30171__$1);var ev__7756__auto___30178 = cljs.core.nth.call(null,vec__30052_30177,0,null);var func__7757__auto___30179 = cljs.core.nth.call(null,vec__30052_30177,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___30178,func__7757__auto___30179);
{
var G__30180 = cljs.core.next.call(null,seq__30047_30171__$1);
var G__30181 = null;
var G__30182 = 0;
var G__30183 = 0;
seq__30047_30159 = G__30180;
chunk__30048_30160 = G__30181;
count__30049_30161 = G__30182;
i__30050_30162 = G__30183;
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
lt.plugins.cyclop.mode_raw = (function mode_raw(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.raw","div.raw",2686478525),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Enter data here:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),[cljs.core.str(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.cyclop.state)))].join('')], null)], null)], null));var seq__30059_30184 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__30060_30185 = null;var count__30061_30186 = 0;var i__30062_30187 = 0;while(true){
if((i__30062_30187 < count__30061_30186))
{var vec__30063_30188 = cljs.core._nth.call(null,chunk__30060_30185,i__30062_30187);var ev__7756__auto___30189 = cljs.core.nth.call(null,vec__30063_30188,0,null);var func__7757__auto___30190 = cljs.core.nth.call(null,vec__30063_30188,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___30189,func__7757__auto___30190);
{
var G__30191 = seq__30059_30184;
var G__30192 = chunk__30060_30185;
var G__30193 = count__30061_30186;
var G__30194 = (i__30062_30187 + 1);
seq__30059_30184 = G__30191;
chunk__30060_30185 = G__30192;
count__30061_30186 = G__30193;
i__30062_30187 = G__30194;
continue;
}
} else
{var temp__4092__auto___30195 = cljs.core.seq.call(null,seq__30059_30184);if(temp__4092__auto___30195)
{var seq__30059_30196__$1 = temp__4092__auto___30195;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30059_30196__$1))
{var c__7112__auto___30197 = cljs.core.chunk_first.call(null,seq__30059_30196__$1);{
var G__30198 = cljs.core.chunk_rest.call(null,seq__30059_30196__$1);
var G__30199 = c__7112__auto___30197;
var G__30200 = cljs.core.count.call(null,c__7112__auto___30197);
var G__30201 = 0;
seq__30059_30184 = G__30198;
chunk__30060_30185 = G__30199;
count__30061_30186 = G__30200;
i__30062_30187 = G__30201;
continue;
}
} else
{var vec__30064_30202 = cljs.core.first.call(null,seq__30059_30196__$1);var ev__7756__auto___30203 = cljs.core.nth.call(null,vec__30064_30202,0,null);var func__7757__auto___30204 = cljs.core.nth.call(null,vec__30064_30202,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___30203,func__7757__auto___30204);
{
var G__30205 = cljs.core.next.call(null,seq__30059_30196__$1);
var G__30206 = null;
var G__30207 = 0;
var G__30208 = 0;
seq__30059_30184 = G__30205;
chunk__30060_30185 = G__30206;
count__30061_30186 = G__30207;
i__30062_30187 = G__30208;
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
lt.plugins.cyclop.mode_boxes = (function mode_boxes(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.boxes","div.boxes",2025666446),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Pretty boxes"], null)], null));var seq__30071_30209 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__30072_30210 = null;var count__30073_30211 = 0;var i__30074_30212 = 0;while(true){
if((i__30074_30212 < count__30073_30211))
{var vec__30075_30213 = cljs.core._nth.call(null,chunk__30072_30210,i__30074_30212);var ev__7756__auto___30214 = cljs.core.nth.call(null,vec__30075_30213,0,null);var func__7757__auto___30215 = cljs.core.nth.call(null,vec__30075_30213,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___30214,func__7757__auto___30215);
{
var G__30216 = seq__30071_30209;
var G__30217 = chunk__30072_30210;
var G__30218 = count__30073_30211;
var G__30219 = (i__30074_30212 + 1);
seq__30071_30209 = G__30216;
chunk__30072_30210 = G__30217;
count__30073_30211 = G__30218;
i__30074_30212 = G__30219;
continue;
}
} else
{var temp__4092__auto___30220 = cljs.core.seq.call(null,seq__30071_30209);if(temp__4092__auto___30220)
{var seq__30071_30221__$1 = temp__4092__auto___30220;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30071_30221__$1))
{var c__7112__auto___30222 = cljs.core.chunk_first.call(null,seq__30071_30221__$1);{
var G__30223 = cljs.core.chunk_rest.call(null,seq__30071_30221__$1);
var G__30224 = c__7112__auto___30222;
var G__30225 = cljs.core.count.call(null,c__7112__auto___30222);
var G__30226 = 0;
seq__30071_30209 = G__30223;
chunk__30072_30210 = G__30224;
count__30073_30211 = G__30225;
i__30074_30212 = G__30226;
continue;
}
} else
{var vec__30076_30227 = cljs.core.first.call(null,seq__30071_30221__$1);var ev__7756__auto___30228 = cljs.core.nth.call(null,vec__30076_30227,0,null);var func__7757__auto___30229 = cljs.core.nth.call(null,vec__30076_30227,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___30228,func__7757__auto___30229);
{
var G__30230 = cljs.core.next.call(null,seq__30071_30221__$1);
var G__30231 = null;
var G__30232 = 0;
var G__30233 = 0;
seq__30071_30209 = G__30230;
chunk__30072_30210 = G__30231;
count__30073_30211 = G__30232;
i__30074_30212 = G__30233;
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
lt.plugins.cyclop.mode_graph = (function mode_graph(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph","div.graph",2030351651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"2D-graph"], null)], null));var seq__30083_30234 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__30084_30235 = null;var count__30085_30236 = 0;var i__30086_30237 = 0;while(true){
if((i__30086_30237 < count__30085_30236))
{var vec__30087_30238 = cljs.core._nth.call(null,chunk__30084_30235,i__30086_30237);var ev__7756__auto___30239 = cljs.core.nth.call(null,vec__30087_30238,0,null);var func__7757__auto___30240 = cljs.core.nth.call(null,vec__30087_30238,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___30239,func__7757__auto___30240);
{
var G__30241 = seq__30083_30234;
var G__30242 = chunk__30084_30235;
var G__30243 = count__30085_30236;
var G__30244 = (i__30086_30237 + 1);
seq__30083_30234 = G__30241;
chunk__30084_30235 = G__30242;
count__30085_30236 = G__30243;
i__30086_30237 = G__30244;
continue;
}
} else
{var temp__4092__auto___30245 = cljs.core.seq.call(null,seq__30083_30234);if(temp__4092__auto___30245)
{var seq__30083_30246__$1 = temp__4092__auto___30245;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30083_30246__$1))
{var c__7112__auto___30247 = cljs.core.chunk_first.call(null,seq__30083_30246__$1);{
var G__30248 = cljs.core.chunk_rest.call(null,seq__30083_30246__$1);
var G__30249 = c__7112__auto___30247;
var G__30250 = cljs.core.count.call(null,c__7112__auto___30247);
var G__30251 = 0;
seq__30083_30234 = G__30248;
chunk__30084_30235 = G__30249;
count__30085_30236 = G__30250;
i__30086_30237 = G__30251;
continue;
}
} else
{var vec__30088_30252 = cljs.core.first.call(null,seq__30083_30246__$1);var ev__7756__auto___30253 = cljs.core.nth.call(null,vec__30088_30252,0,null);var func__7757__auto___30254 = cljs.core.nth.call(null,vec__30088_30252,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___30253,func__7757__auto___30254);
{
var G__30255 = cljs.core.next.call(null,seq__30083_30246__$1);
var G__30256 = null;
var G__30257 = 0;
var G__30258 = 0;
seq__30083_30234 = G__30255;
chunk__30084_30235 = G__30256;
count__30085_30236 = G__30257;
i__30086_30237 = G__30258;
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
lt.plugins.cyclop.inspector = (function inspector(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inspector","div.inspector",4583540044),lt.plugins.cyclop.mode_raw.call(null,this$),lt.plugins.cyclop.mode_boxes.call(null,this$),lt.plugins.cyclop.mode_graph.call(null,this$)], null));var seq__30095_30259 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__30096_30260 = null;var count__30097_30261 = 0;var i__30098_30262 = 0;while(true){
if((i__30098_30262 < count__30097_30261))
{var vec__30099_30263 = cljs.core._nth.call(null,chunk__30096_30260,i__30098_30262);var ev__7756__auto___30264 = cljs.core.nth.call(null,vec__30099_30263,0,null);var func__7757__auto___30265 = cljs.core.nth.call(null,vec__30099_30263,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___30264,func__7757__auto___30265);
{
var G__30266 = seq__30095_30259;
var G__30267 = chunk__30096_30260;
var G__30268 = count__30097_30261;
var G__30269 = (i__30098_30262 + 1);
seq__30095_30259 = G__30266;
chunk__30096_30260 = G__30267;
count__30097_30261 = G__30268;
i__30098_30262 = G__30269;
continue;
}
} else
{var temp__4092__auto___30270 = cljs.core.seq.call(null,seq__30095_30259);if(temp__4092__auto___30270)
{var seq__30095_30271__$1 = temp__4092__auto___30270;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30095_30271__$1))
{var c__7112__auto___30272 = cljs.core.chunk_first.call(null,seq__30095_30271__$1);{
var G__30273 = cljs.core.chunk_rest.call(null,seq__30095_30271__$1);
var G__30274 = c__7112__auto___30272;
var G__30275 = cljs.core.count.call(null,c__7112__auto___30272);
var G__30276 = 0;
seq__30095_30259 = G__30273;
chunk__30096_30260 = G__30274;
count__30097_30261 = G__30275;
i__30098_30262 = G__30276;
continue;
}
} else
{var vec__30100_30277 = cljs.core.first.call(null,seq__30095_30271__$1);var ev__7756__auto___30278 = cljs.core.nth.call(null,vec__30100_30277,0,null);var func__7757__auto___30279 = cljs.core.nth.call(null,vec__30100_30277,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___30278,func__7757__auto___30279);
{
var G__30280 = cljs.core.next.call(null,seq__30095_30271__$1);
var G__30281 = null;
var G__30282 = 0;
var G__30283 = 0;
seq__30095_30259 = G__30280;
chunk__30096_30260 = G__30281;
count__30097_30261 = G__30282;
i__30098_30262 = G__30283;
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
lt.plugins.cyclop.full_panel = (function full_panel(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.full","div.full",1323760958),lt.plugins.cyclop.mode_selection_bar.call(null,this$),lt.plugins.cyclop.inspector.call(null,this$)], null));var seq__30107_30284 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__30108_30285 = null;var count__30109_30286 = 0;var i__30110_30287 = 0;while(true){
if((i__30110_30287 < count__30109_30286))
{var vec__30111_30288 = cljs.core._nth.call(null,chunk__30108_30285,i__30110_30287);var ev__7756__auto___30289 = cljs.core.nth.call(null,vec__30111_30288,0,null);var func__7757__auto___30290 = cljs.core.nth.call(null,vec__30111_30288,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___30289,func__7757__auto___30290);
{
var G__30291 = seq__30107_30284;
var G__30292 = chunk__30108_30285;
var G__30293 = count__30109_30286;
var G__30294 = (i__30110_30287 + 1);
seq__30107_30284 = G__30291;
chunk__30108_30285 = G__30292;
count__30109_30286 = G__30293;
i__30110_30287 = G__30294;
continue;
}
} else
{var temp__4092__auto___30295 = cljs.core.seq.call(null,seq__30107_30284);if(temp__4092__auto___30295)
{var seq__30107_30296__$1 = temp__4092__auto___30295;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30107_30296__$1))
{var c__7112__auto___30297 = cljs.core.chunk_first.call(null,seq__30107_30296__$1);{
var G__30298 = cljs.core.chunk_rest.call(null,seq__30107_30296__$1);
var G__30299 = c__7112__auto___30297;
var G__30300 = cljs.core.count.call(null,c__7112__auto___30297);
var G__30301 = 0;
seq__30107_30284 = G__30298;
chunk__30108_30285 = G__30299;
count__30109_30286 = G__30300;
i__30110_30287 = G__30301;
continue;
}
} else
{var vec__30112_30302 = cljs.core.first.call(null,seq__30107_30296__$1);var ev__7756__auto___30303 = cljs.core.nth.call(null,vec__30112_30302,0,null);var func__7757__auto___30304 = cljs.core.nth.call(null,vec__30112_30302,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___30303,func__7757__auto___30304);
{
var G__30305 = cljs.core.next.call(null,seq__30107_30296__$1);
var G__30306 = null;
var G__30307 = 0;
var G__30308 = 0;
seq__30107_30284 = G__30305;
chunk__30108_30285 = G__30306;
count__30109_30286 = G__30307;
i__30110_30287 = G__30308;
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
lt.plugins.cyclop.inspectors_for_keys = (function inspectors_for_keys(){var modes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"raw","raw",1014016922),new cljs.core.Keyword(null,"boxes","boxes",1107834667),new cljs.core.Keyword(null,"graph","graph",1112519872)], null);var divs = cljs.core.map.call(null,((function (modes){
return (function (p1__30113_SHARP_){return lt.util.dom.$.call(null,[cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,p1__30113_SHARP_))].join(''));
});})(modes))
,modes);return cljs.core.zipmap.call(null,modes,divs);
});
lt.plugins.cyclop.refresh_ui = (function refresh_ui(this$){var mode_buttons_30309 = lt.plugins.cyclop.get_mode_buttons.call(null);var selected_mode_button_30310 = lt.plugins.cyclop.get_selected_mode_button.call(null);var seq__30124_30311 = cljs.core.seq.call(null,mode_buttons_30309);var chunk__30125_30312 = null;var count__30126_30313 = 0;var i__30127_30314 = 0;while(true){
if((i__30127_30314 < count__30126_30313))
{var b_30315 = cljs.core._nth.call(null,chunk__30125_30312,i__30127_30314);lt.util.dom.remove_class.call(null,b_30315,new cljs.core.Keyword(null,"selected","selected",2205476365));
{
var G__30316 = seq__30124_30311;
var G__30317 = chunk__30125_30312;
var G__30318 = count__30126_30313;
var G__30319 = (i__30127_30314 + 1);
seq__30124_30311 = G__30316;
chunk__30125_30312 = G__30317;
count__30126_30313 = G__30318;
i__30127_30314 = G__30319;
continue;
}
} else
{var temp__4092__auto___30320 = cljs.core.seq.call(null,seq__30124_30311);if(temp__4092__auto___30320)
{var seq__30124_30321__$1 = temp__4092__auto___30320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30124_30321__$1))
{var c__7112__auto___30322 = cljs.core.chunk_first.call(null,seq__30124_30321__$1);{
var G__30323 = cljs.core.chunk_rest.call(null,seq__30124_30321__$1);
var G__30324 = c__7112__auto___30322;
var G__30325 = cljs.core.count.call(null,c__7112__auto___30322);
var G__30326 = 0;
seq__30124_30311 = G__30323;
chunk__30125_30312 = G__30324;
count__30126_30313 = G__30325;
i__30127_30314 = G__30326;
continue;
}
} else
{var b_30327 = cljs.core.first.call(null,seq__30124_30321__$1);lt.util.dom.remove_class.call(null,b_30327,new cljs.core.Keyword(null,"selected","selected",2205476365));
{
var G__30328 = cljs.core.next.call(null,seq__30124_30321__$1);
var G__30329 = null;
var G__30330 = 0;
var G__30331 = 0;
seq__30124_30311 = G__30328;
chunk__30125_30312 = G__30329;
count__30126_30313 = G__30330;
i__30127_30314 = G__30331;
continue;
}
}
} else
{}
}
break;
}
lt.util.dom.add_class.call(null,selected_mode_button_30310,new cljs.core.Keyword(null,"selected","selected",2205476365));
var inspectors = lt.plugins.cyclop.inspectors_for_keys.call(null);var seq__30128 = cljs.core.seq.call(null,inspectors);var chunk__30129 = null;var count__30130 = 0;var i__30131 = 0;while(true){
if((i__30131 < count__30130))
{var vec__30132 = cljs.core._nth.call(null,chunk__30129,i__30131);var k = cljs.core.nth.call(null,vec__30132,0,null);var inspector = cljs.core.nth.call(null,vec__30132,1,null);if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.cyclop.state))))
{lt.util.dom.remove_class.call(null,inspector,new cljs.core.Keyword(null,"invisible","invisible",3407065887));
} else
{lt.util.dom.add_class.call(null,inspector,new cljs.core.Keyword(null,"invisible","invisible",3407065887));
}
{
var G__30332 = seq__30128;
var G__30333 = chunk__30129;
var G__30334 = count__30130;
var G__30335 = (i__30131 + 1);
seq__30128 = G__30332;
chunk__30129 = G__30333;
count__30130 = G__30334;
i__30131 = G__30335;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30128);if(temp__4092__auto__)
{var seq__30128__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30128__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__30128__$1);{
var G__30336 = cljs.core.chunk_rest.call(null,seq__30128__$1);
var G__30337 = c__7112__auto__;
var G__30338 = cljs.core.count.call(null,c__7112__auto__);
var G__30339 = 0;
seq__30128 = G__30336;
chunk__30129 = G__30337;
count__30130 = G__30338;
i__30131 = G__30339;
continue;
}
} else
{var vec__30133 = cljs.core.first.call(null,seq__30128__$1);var k = cljs.core.nth.call(null,vec__30133,0,null);var inspector = cljs.core.nth.call(null,vec__30133,1,null);if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.cyclop.state))))
{lt.util.dom.remove_class.call(null,inspector,new cljs.core.Keyword(null,"invisible","invisible",3407065887));
} else
{lt.util.dom.add_class.call(null,inspector,new cljs.core.Keyword(null,"invisible","invisible",3407065887));
}
{
var G__30340 = cljs.core.next.call(null,seq__30128__$1);
var G__30341 = null;
var G__30342 = 0;
var G__30343 = 0;
seq__30128 = G__30340;
chunk__30129 = G__30341;
count__30130 = G__30342;
i__30131 = G__30343;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cyclop","cyclop.panel","lt.plugins.cyclop/cyclop.panel",3214433793),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cyclop.panel","cyclop.panel",531845000)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Cyclop",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.cyclop.full_panel.call(null,this$);
}));
lt.plugins.cyclop.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___30344 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___30344))
{var ts_30345 = temp__4092__auto___30344;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_30345))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_30345);
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
lt.plugins.cyclop.refresh_ui.call(null,lt.plugins.cyclop.cyclop);
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cyclop","start","lt.plugins.cyclop/start",3823146933),new cljs.core.Keyword(null,"desc","desc",1016984067),"Cyclop: Start",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.cyclop.cyclop);
return lt.plugins.cyclop.refresh_ui.call(null,lt.plugins.cyclop.cyclop);
})], null));
}

//# sourceMappingURL=cyclop_compiled.js.map