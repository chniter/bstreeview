; (function ($, window, document, undefined) {

    "use strict";

    // Create the defaults once
    var pluginName = "bstreeview",
        defaults = {
            propertyName: "value"
        };

    defaults.settings = {

        injectStyle: true,

        levels: 2,

        expandIcon: 'glyphicon glyphicon-plus',
        collapseIcon: 'glyphicon glyphicon-minus',
        emptyIcon: 'glyphicon',
        nodeIcon: '',
        selectedIcon: '',
        checkedIcon: 'glyphicon glyphicon-check',
        uncheckedIcon: 'glyphicon glyphicon-unchecked'
    };
    var templates = {
        treeview: '<div class="bstreeview list-group list-group-root card"></div>',
        treeviewItem: '<div href="#item-1" class="list-group-item" data-toggle="collapse"></div>',
        treeviewGroupItem: '<div class="list-group collapse" id="item-1-1"></div>'
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
            this.tree = [];
            this.nodes = [];
            if (this.settings.data) {
                this.settings.data = $.parseJSON(this.settings.data);

                this.tree = $.extend(true, [], this.settings.data);
                delete this.settings.data;
            }
            this.settings = $.extend({}, this._defaults.settings, this.settings);


            $(this.element).addClass('bstreeview list-group list-group-root card');
            this.initData({ nodes: this.tree }, 0);
            this.build($(this.element), this.tree, 0);
        },

        initData: function (node, level) {
            if (!node.nodes) return;
            level += 1;

            var parent = node;
            var _this = this;
            $.each(node.nodes, function checkStates(index, node) {

                node.nodeId = _this.nodes.length;
                node.parentId = parent.nodeId;
                _this.nodes.push(node);

                if (node.nodes) {
                    _this.initData(node, level);
                }
            });
        },

        build: function (parentElement, nodes, depth) {
            var leftPadding = "1.25rem;";
            if (depth > 0) {
                leftPadding = (1.25 + depth * 1.25).toString() + "rem;";
            }

            depth += 1;
            var _this = this;

            $.each(nodes, function addNodes(id, node) {
                
                var treeItem = $(templates.treeviewItem)
                    .attr('href', '#item-' + node.nodeId)
                    .attr('style', 'padding-left:'+leftPadding);
                treeItem.append(node.text);

                parentElement.append(treeItem);

                if (node.nodes) {
                    var treeGroup = $(templates.treeviewGroupItem)
                        .attr('id', 'item-' + node.nodeId);
                    parentElement.append(treeGroup);
                    _this.build(treeGroup, node.nodes, depth);
                }
            });
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