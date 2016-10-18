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

  var VueToolTipComponent = {
    props: ['position', 'content'],
    render: function render(h) {
      return h('span', this.$slots['default']);
    },
    mounted: function mounted() {
      var oOption = {
        target: this.$el,
        position: this.position || 'top left',
        content: this.content || '',
        constrainToWindow: false
      };
      this.tooltip = new Tooltip(oOption);
    },
    destroyed: function destroyed() {
      this.tooltip.destroy();
    }
  };

  /*
   * Install Vue Component if Vue is available
   */

  if (typeof Vue !== "undefined") {
    Vue.component('tooltip', VueToolTipComponent);
  }
})(window.Vue);