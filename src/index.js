/**
 * Created by Adebola on 03/02/2016.
 */

(function (Vue) {
    let VueToolTipDirective = {
        params: ['position', 'content'],
        bind(el, binding, vnode){
            let oOption = {
                target: el,
                position: vnode.data.attrs.position || "top left",
                content: vnode.data.attrs.position || "",
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