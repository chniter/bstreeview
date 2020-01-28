; (function ($, window, document, undefined) {

    "use strict";

    // Create the defaults once
    var pluginName = "bstreeview",
        defaults = {
            propertyName: "value"
        };
    var templates = {
        treeview:  '   <div class="just-padding">  '  + 
        '   <div class="list-group list-group-root card">  '  + 
        '     <a href="#item-1" class="list-group-item" data-toggle="collapse">  '  + 
        '       <i class="bi bi-chevron-right"></i>Item 1  '  + 
        '     </a>  '  + 
        '     <div class="list-group collapse" id="item-1">  '  + 
        '       <a href="#item-1-1" class="list-group-item" data-toggle="collapse">  '  + 
        '         <i class="bi bi-chevron-right"></i>Item 1.1  '  + 
        '       </a>  '  + 
        '       <div class="list-group collapse" id="item-1-1">  '  + 
        '         <a href="#" class="list-group-item">Item 1.1.1</a>  '  + 
        '         <a href="#" class="list-group-item">Item 1.1.2</a>  '  + 
        '         <a href="#" class="list-group-item">Item 1.1.3</a>  '  + 
        '       </div>  '  + 
        '       <a href="#item-1-2" class="list-group-item" data-toggle="collapse">  '  + 
        '         <i class="bi bi-chevron-right"></i>Item 1.2  '  + 
        '       </a>  '  + 
        '       <div class="list-group collapse" id="item-1-2">  '  + 
        '         <a href="#" class="list-group-item">Item 1.2.1</a>  '  + 
        '         <a href="#" class="list-group-item">Item 1.2.2</a>  '  + 
        '         <a href="#" class="list-group-item">Item 1.2.3</a>  '  + 
        '       </div>  '  + 
        '       <a href="#item-1-3" class="list-group-item" data-toggle="collapse">  '  + 
        '         <i class="bi bi-chevron-right"></i>Item 1.3  '  + 
        '       </a>  '  + 
        '       <div class="list-group collapse" id="item-1-3">  '  + 
        '         <a href="#" class="list-group-item">Item 1.3.1</a>  '  + 
        '         <a href="#" class="list-group-item">Item 1.3.2</a>  '  + 
        '         <a href="#" class="list-group-item">Item 1.3.3</a>  '  + 
        '       </div>  '  + 
        '     </div>  '  + 
        '     <a href="#item-2" class="list-group-item" data-toggle="collapse">  '  + 
        '       <i class="bi bi-chevron-right"></i>Item 2  '  + 
        '     </a>  '  + 
        '     <div class="list-group collapse" id="item-2">  '  + 
        '       <a href="#item-2-1" class="list-group-item" data-toggle="collapse">  '  + 
        '         <i class="bi bi-chevron-right"></i>Item 2.1  '  + 
        '       </a>  '  + 
        '       <div class="list-group collapse" id="item-2-1">  '  + 
        '         <a href="#" class="list-group-item">Item 2.1.1</a>  '  + 
        '         <a href="#" class="list-group-item">Item 2.1.2</a>  '  + 
        '         <a href="#" class="list-group-item">Item 2.1.3</a>  '  + 
        '       </div>  '  + 
        '       <a href="#item-2-2" class="list-group-item" data-toggle="collapse">  '  + 
        '         <i class="bi bi-chevron-right"></i>Item 2.2  '  + 
        '       </a>  '  + 
        '       <div class="list-group collapse" id="item-2-2">  '  + 
        '         <a href="#" class="list-group-item">Item 2.2.1</a>  '  + 
        '         <a href="#" class="list-group-item">Item 2.2.2</a>  '  + 
        '         <a href="#" class="list-group-item">Item 2.2.3</a>  '  + 
        '       </div>  '  + 
        '         '  + 
        '       <a href="#item-2-3" class="list-group-item" data-toggle="collapse">  '  + 
        '         <i class="bi bi-chevron-right"></i>Item 2.3  '  + 
        '       </a>  '  + 
        '       <div class="list-group collapse" id="item-2-3">  '  + 
        '         <a href="#" class="list-group-item">Item 2.3.1</a>  '  + 
        '         <a href="#" class="list-group-item">Item 2.3.2</a>  '  + 
        '         <a href="#" class="list-group-item">Item 2.3.3</a>  '  + 
        '       </div>  '  + 
        '     </div>  '  + 
        '     <a href="#item-3" class="list-group-item" data-toggle="collapse">  '  + 
        '       <i class="bi bi-chevron-right"></i>Item 3  '  + 
        '     </a>  '  + 
        '     <div class="list-group collapse" id="item-3">  '  + 
        '       <a href="#item-3-1" class="list-group-item" data-toggle="collapse">  '  + 
        '         <i class="bi bi-chevron-right"></i>Item 3.1  '  + 
        '       </a>  '  + 
        '       <div class="list-group collapse" id="item-3-1">  '  + 
        '         <a href="#" class="list-group-item">Item 3.1.1</a>  '  + 
        '         <a href="#" class="list-group-item">Item 3.1.2</a>  '  + 
        '         <a href="#" class="list-group-item">Item 3.1.3</a>  '  + 
        '       </div>  '  + 
        '         '  + 
        '       <a href="#item-3-2" class="list-group-item" data-toggle="collapse">  '  + 
        '         <i class="bi bi-chevron-right"></i>Item 3.2  '  + 
        '       </a>  '  + 
        '       <div class="list-group collapse" id="item-3-2">  '  + 
        '         <a href="#" class="list-group-item">Item 3.2.1</a>  '  + 
        '         <a href="#" class="list-group-item">Item 3.2.2</a>  '  + 
        '         <a href="#" class="list-group-item">Item 3.2.3</a>  '  + 
        '       </div>  '  + 
        '       <a href="#item-3-3" class="list-group-item" data-toggle="collapse">  '  + 
        '         <i class="bi bi-chevron-right"></i>Item 3.3  '  + 
        '       </a>  '  + 
        '       <div class="list-group collapse" id="item-3-3">  '  + 
        '         <a href="#" class="list-group-item">Item 3.3.1</a>  '  + 
        '         <a href="#" class="list-group-item">Item 3.3.2</a>  '  + 
        '         <a href="#" class="list-group-item">Item 3.3.3</a>  '  + 
        '       </div>  '  + 
        '     </div>  '  + 
        '   </div>  '  + 
        '  </div>  ' 
    };
    // The actual plugin constructor
    function bstreeView(element, options) {
        this.element = element;

        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(bstreeView.prototype, {
        init: function () {

            $(this.element).html(templates.treeview);
            $('.list-group-item').on('click', function() {
                $('.bi', this)
                  .toggleClass('bi-chevron-right')
                  .toggleClass('bi-chevron-down');
              });

        },
        yourOtherFunction: function (text) {

            // some logic
            $(this.element).text(text);
        }
    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" +
                    pluginName, new bstreeView(this, options));
            }
        });
    };

})(jQuery, window, document);