/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'MyApp.view.PanelSearch',
        'MyApp.view.MyGridPanel'
    ],

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panelsearch',
                    height: 235,
                    collapseDirection: 'top',
                    collapsible: true
                },
                {
                    xtype: 'container',
                    height: 40,
                    layout: {
                        type: 'absolute'
                    },
                    items: [
                        {
                            xtype: 'button',
                            x: 70,
                            y: -1,
                            height: 30,
                            id: 'bt_addEmp',
                            itemId: 'bt_addEmp',
                            width: 90,
                            text: 'Add'
                        },
                        {
                            xtype: 'button',
                            x: 200,
                            y: 0,
                            height: 30,
                            id: 'bt_delEmp',
                            itemId: 'bt_delEmp',
                            width: 90,
                            text: 'Delete'
                        }
                    ]
                },
                {
                    xtype: 'mygridpanel'
                }
            ]
        });

        me.callParent(arguments);
    }

});