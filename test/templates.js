function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (name) {
buf.push("<p>" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "' good good</p>");}.call(this,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined));;return buf.join("");
}