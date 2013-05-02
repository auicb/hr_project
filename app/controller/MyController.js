/*
 * File: app/controller/MyController.js
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

Ext.define('MyApp.controller.MyController', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'windowAddEmp',
            selector: 'windowAddEmp'
        }
    ],

    onOpenWindowEmp: function(button, e, eOpts) {
        console.log("Open Window AddEmp");
        var win = Ext.create('widget.windowAddEmp');
        win.show();
    },

    onAddEmployee: function(button, e, eOpts) {
        console.log("Controll----------onPanelAdd Emp");

        var form = Ext.getCmp('formemp'),
            value = form.getValues(),
            store = Ext.getStore('StoreEmp');

        addstore = store.add(value);
        console.log(value);
        store.sync();
        //Ext.getCmp('mygridpanel').reconfigure();

        if (addstore) {
            this.getWindowAddEmp().destroy();
        }


    },

    onAddEmployeeClose: function(button, e, eOpts) {
        this.getWindowAddEmp().destroy();
    },

    onSelectGriddeletedata: function(button, e, eOpts) {
        console.log('Controll----------Delete');



        /*var grid = Ext.getCmp('grid'),
        arraySelected =grid.getSelectionModel().getSelection(),

        //assuming you have a single select, you have the record at index 0;

        record = arraySelected[0];
        console.log(arraySelected);
        */


        //var grid = Ext.getCmp('grid');
        // var selected = grid.getSelectionModel().getSelection()[0];

        //   grid.getStore().remove(selected);





        var grid = Ext.getCmp('mygridpanel');
        var arraySelected = grid.getSelectionModel().getSelection();
        if (arraySelected) {
            grid.getStore().remove(arraySelected );
        }
    },

    onSearchEmp: function(button, e, eOpts) {

        console.log('Controll----------SearchEmp');

        /*var searchValue = Ext.getCmp('formsearch');
        console.log(searchValue);
        store.load();*/

        /*
        var Store = Ext.getStore('StoreEmp');
        Ext.getCmp('formsearch');
        Store.load();*/


        /*var Store = Ext.getStore('StoreEmp');
        Ext.getCmp('formsearch');
        var data = ["firstName", "empId"]
        console.log(data);
        Store.loadData(data);*/


        /*   Ext.getCmp('formsearch');
        var data = grid.getSelectionModel().selected.items[0].data;

        console.log(data);
        store.clearFilter();
        store.filter('mygridpanel', data.productsCat);
        */


        /*var Store = Ext.getStore('StoreEmp');
        console.log(Store);
        var grid = Ext.getCmp('mygridpanel');

        store.filterBy(id); 
        Store.load();*/



        var Store = Ext.getStore('StoreEmp');

        Store.filter('empId', Ext.getCmp('idemp').getValue());











    },

    onResetSearchEmp: function(button, e, eOpts) {
        console.log('Controll----------ResetSearchEmp');



        Ext.getCmp('formsearch').getForm().reset(); 

    },

    init: function(application) {
        this.control({
            "#bt_addEmp": {
                click: this.onOpenWindowEmp
            },
            "#bt_saveEmpAdd": {
                click: this.onAddEmployee
            },
            "#bt_closeEmpAdd": {
                click: this.onAddEmployeeClose
            },
            "#bt_delEmp": {
                click: this.onSelectGriddeletedata
            },
            "#bt_SearchEmp": {
                click: this.onSearchEmp
            },
            "#bt_ResetEmp": {
                click: this.onResetSearchEmp
            }
        });
    }

});
