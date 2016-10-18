/**
 * Created by Adebola on 03/02/2016.
 */

(function (Vue) {
    let VueToolTipComponent = {
      props: [ 'position', 'content' ],
      render(h) {
        return h(
          'span',
          this.$slots.default
        );
      },
      mounted() {
        let oOption = {
          target: this.$el,
          position: this.position || 'top left',
          content: this.content || '',
          constrainToWindow: false
        };
        this.tooltip = new Tooltip(oOption);
      },
      destroyed() {
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
