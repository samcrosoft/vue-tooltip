/**
 * vue-tooltip - A plugin to implement tooltip using Vue.js
 * @version v0.1.0
 * @link https://github.com/samcrosoft/vue-tooltip
 * @license MIT
 */
/**
 * Created by Adebola on 03/02/2016.
 */

'use strict';

(function (Vue) {
    var VueToolTipDirective = {
        params: ['position', 'content'],
        bind: function bind() {
            var oOption = {
                target: this.el,
                position: this.params.position || "top left",
                content: this.params.content || "",
                constrainToWindow: false
            };
            new Tooltip(oOption);
        }
    };

    /*
     * Install Vue Directive if Vue is available
     */

    if (typeof Vue !== "undefined") {
        Vue.directive('tooltip', VueToolTipDirective);
    }
})(window.Vue);