/**
 * Created by Adebola on 03/02/2016.
 */

(function (Vue) {
    let VueToolTipDirective = {
        params: ['position', 'content'],
        bind(){
            let oOption = {
                target: this.el,
                position: this.params.position || "top left",
                content: this.params.content || "",
                constrainToWindow: false
            };
            let this.tooltip = new Tooltip(oOption);
        },
        unbind() {
            this.tooltip.destroy();
        }
    };


    /*
     * Install Vue Directive if Vue is available
     */

    if (typeof Vue !== "undefined") {
        Vue.directive('tooltip', VueToolTipDirective);
    }
})(window.Vue);
