/*
 * File: app/store/StoreJobTitle.js
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

Ext.define('MyApp.store.StoreJobTitle', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.mdJobTitle'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'MyApp.model.mdJobTitle',
            storeId: 'StoreJobTitle',
            data: [
                {
                    code: '1',
                    name: 'All'
                },
                {
                    code: '2',
                    name: 'เจ้าหน้าที่สินเชื่อ'
                },
                {
                    code: '3',
                    name: 'เลขานุการ'
                },
                {
                    code: '4',
                    name: 'เจ้าหน้าที่บุคคล'
                }
            ]
        }, cfg)]);
    }
});