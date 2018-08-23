odoo.define('web_widget_color.web_widget_color', function(require){
    'use strict';

    var basic_fields = require('web.basic_fields'),
        field_registry = require('web.field_registry');

    
    var FieldColor = basic_fields.FieldChar.extend({
        template: 'FieldColor',
        widget_class: 'oe_form_field_color',

        _renderReadonly: function () {
            // just to prove state
        },
        _renderEdit: function () {
            this.$input = this.$el.find('input');
            this.jscolor = new jscolor(this.$input[0], {hash: true});
        },
    });
    field_registry.add('color', FieldColor);
    return FieldColor;
});
