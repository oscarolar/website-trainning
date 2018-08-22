odoo.define('academy.demo_rpc', function(require){
    'use strict';

    var core = require('web.core'),
        Widget = require('web.Widget'),
        rpc = require('web.rpc');
    require('web.dom_ready');
    
    var RpcButton = Widget.extend({
        // self :this,
        events: {
            'click .rpc-button': 'onClick'
        },
        init: function(parent, options) {
            this._super.apply(this, arguments);
            this.options = _.extend(options || {}, {});
        },
        onClick: function (ev){
            console.log('Clicked');
            rpc.query({
                route: '/academy/search_teacher',
                params: {
                    teacher_id: this.$el.data('teacher-id')
                }
            }).then(function(teachers_found){
                $('.biography').html(teachers_found[0].biography);
            });
        },
    });
    if(!$('.rpc-container').length){
        return $.Defferred().reject('DOM does not contain .rpc-container');
    }
    $('.rpc-container').each(function(idx){
        var $elem = $(this);
        var button = new RpcButton(null, $elem.data());
        button.attachTo($elem);
    });
    return RpcButton;
});
