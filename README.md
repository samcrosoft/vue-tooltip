# VueTooltip

Tooltip plugin implemented for use with Vue.js.

This is a vue.js directive for the tooltip plugin.


## Usage

### Installation

Firstly, insert the vue.js script and then insert a reference to the following libraries as listed below
 - [tether](https://github.com/HubSpot/tether)
 - [drop](https://github.com/HubSpot/drop)
 - [tooltip](https://github.com/HubSpot/tooltip)
 
And then insert a link to the vue-tooltip script 

```html
<script src="../bower_components/tether/dist/js/tether.min.js"></script>
<script src="../bower_components/tether-drop/dist/js/drop.min.js"></script>
<script src="../bower_components/tether-tooltip/dist/js/tooltip.min.js"></script>
<script src="../bower_components/vue/dist/vue.js"></script>
<!--include the Vue Tooltip-->
<script src="../dist/js/vue-tooltip.js"></script>
```

### Use in your templates

You can insert a tooltip on any element using the tooltip directive

```html
<span v-tooltip position="bottom center" content="Wow! I am a vue Tooltip"></span>   
            
```

You can specify all the attributes listed below for the tooltip


### Available Attributes


1. **position** - This is the position of the tooltip 
    - **type**: String
    - **required** : false
    - **default** : 'top left'
    Acceptable options can be found in documentation for [tooltip](http://github.hubspot.com/tooltip/docs/welcome/)
2. **content** - This is the content to be displayed in the tooltip 
    - **type**: String
    - **required** : false
    - **default** : empty string ''

## License

This plugin is released under the [MIT Licence](https://opensource.org/licenses/MIT)