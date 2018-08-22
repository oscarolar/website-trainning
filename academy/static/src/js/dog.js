odoo.define('academy.dog', function (require) {
    'use strict';

    var Animal = require('academy.animal');

    var Dog = Animal.extend({
        move: function(){
            this.bark();
            this._super.apply(this, arguments);
        },
        bark: function(){
            console.log('Woof!');
        },
    });
var dog = new Dog();
dog.move();

return Dog;
});
