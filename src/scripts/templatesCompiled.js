import Handlebars from 'handlebars/runtime';

(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['works'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});
 
  return "\r\n<div class='work card'>\r\n    <div class='work__image' style='background-image: url(\"assets/images/"
    + container.escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\")'>\r\n    <div class='work__details-button-container'>\r\n        <button class='work__details-button'>\r\n        <div class=\"arrow\"></div>\r\n        </button>\r\n    </div>\r\n    <div class='work__details'>\r\n        <section class='subsection'>\r\n        <div class='graphic-heading-container'>\r\n            <div class='graphic-heading graphic-heading_back'></div>\r\n            <div class=' graphic-heading graphic-heading_front'></div>\r\n            <h3 class='graphic-heading__text'>Summary</h3>\r\n        </div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.summaryParagraphs : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </section>\r\n        <section class='subsection'>\r\n        <div class='graphic-heading-container'>\r\n            <div class='graphic-heading graphic-heading_back'></div>\r\n            <div class=' graphic-heading graphic-heading_front'></div>\r\n            <h3 class='graphic-heading__text'>Features</h3>\r\n        </div>\r\n        <ul class='work__features'>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.features : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\r\n        </section>\r\n        <!-- <section class='subsection'>\r\n            <div class='graphic-heading-container'>\r\n            <div class='graphic-heading graphic-heading_back'></div>\r\n            <div class=' graphic-heading graphic-heading_front'></div>\r\n            <h3 class='graphic-heading__text'>Technologies</h3>\r\n            </div>\r\n            <div class='work__technologies'>\r\n                <div class='work__technology'>React</div>\r\n                <div class='work__technology'>Node</div>\r\n                <div class='work__technology'>Express</div>\r\n                <div class='work__technology'>React</div>\r\n                <div class='work__technology'>Node</div>\r\n                <div class='work__technology'>Express</div>\r\n                <div class='work__technology'>React</div>\r\n            </div>\r\n        </section> -->\r\n    </div>\r\n    </div>\r\n</div>\r\n\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "        <p>\r\n            "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\r\n        </p>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "            <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.works : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();