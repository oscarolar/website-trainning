odoo.define('academy.counter', function (require){
    'use strict';

    var Widget = require('web.Widget');
    var core = require('web.core');
    require('web.dom_ready');

    var Counter = Widget.extend({
        events: {
            'click button': '_onClick',
        },
        init: function(parent, value) {
            this._super(parent);
            this.count = value;
        },
        _onClick: function(){
            this.count++;
            this.$('.val').text(this.count);
        },
        start: function(){
            return this._super.apply(this, arguments);
        },
    });
    var counter_list = [];
    $('.counter').each(function (idx) {
        var counter = new Counter(this, 10);
        counter.setElement($(this)).start();
        counter_list.push(counter);
    }); 
});
