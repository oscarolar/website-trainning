odoo.define('academy.teachers_tour', function(require){
    'use strict';

    var tour = require('web_tour.tour'),
        core = require('web.core'),
        base = require('web_editor.base');

    tour.register('tour_show_biographies',{
        // test: true,
        url: '/academy/academy',
        wait_for: base.ready(),
    },
    [
        {
            content: 'Click on first teacher',
            trigger: 'p[data-teacher-id="1"] a',
            position: "bottom",
        },{
            content: 'Click on first teacher',
            trigger: 'p[data-teacher-id="2"] a',
            extra_trigger: '.s_comparisons',
            position: "bottom",
        },
    ]);
});
