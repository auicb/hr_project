/*
 * File: app/view/WindowAddEmp.js
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

Ext.define('MyApp.view.WindowAddEmp', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowAddEmp',

    width: 600,
    title: 'Add Employee',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    id: 'formemp',
                    itemId: 'formemp',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox'
                            },
                            fieldLabel: 'Full Name',
                            labelStyle: 'font-weight:bold;padding:0;',
                            labelWidth: 150,
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    maxWidth: 160,
                                    width: 160,
                                    fieldLabel: 'First Name',
                                    labelAlign: 'top',
                                    labelWidth: 160,
                                    name: 'firstName',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    margin: '0 0 0 5',
                                    width: 90,
                                    fieldLabel: 'Middle Name',
                                    labelAlign: 'top',
                                    labelWidth: 0,
                                    name: 'middleName'
                                },
                                {
                                    xtype: 'textfield',
                                    flex: 2,
                                    margin: '0 0 0 5',
                                    maxWidth: 160,
                                    width: 160,
                                    fieldLabel: 'Last Name',
                                    labelAlign: 'top',
                                    labelWidth: 0,
                                    name: 'lastName',
                                    allowBlank: false
                                }
                            ]
                        },
                        {
                            xtype: 'textfield',
                            width: 350,
                            fieldLabel: 'Employee Id',
                            labelWidth: 150,
                            name: 'empId'
                        },
                        {
                            xtype: 'filefield',
                            width: 450,
                            fieldLabel: 'Photograph',
                            labelWidth: 150,
                            name: 'photograph',
                            buttonText: 'Select Photo...'
                        },
                        {
                            xtype: 'label',
                            text: 'Create Login Details'
                        },
                        {
                            xtype: 'textfield',
                            padding: '10 0 0 0',
                            width: 300,
                            fieldLabel: 'User Name',
                            labelWidth: 150,
                            name: 'userName'
                        },
                        {
                            xtype: 'textfield',
                            width: 300,
                            fieldLabel: 'Password',
                            labelWidth: 150,
                            name: 'password'
                        },
                        {
                            xtype: 'textfield',
                            width: 300,
                            fieldLabel: 'Confirm Password ',
                            labelWidth: 150,
                            name: 'confirmpass'
                        },
                        {
                            xtype: 'combobox',
                            id: 'status_combo',
                            itemId: 'status_combo',
                            width: 300,
                            fieldLabel: 'Status',
                            labelWidth: 150,
                            name: 'status',
                            selectOnFocus: true,
                            displayField: 'name',
                            forceSelection: true,
                            queryMode: 'local',
                            store: 'StoreStatus',
                            valueField: 'code'
                        },
                        {
                            xtype: 'container',
                            width: 315,
                            layout: {
                                align: 'middle',
                                pack: 'end',
                                padding: 5,
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'bt_saveEmpAdd',
                                    itemId: 'bt_saveEmpAdd',
                                    width: 80,
                                    text: 'save'
                                },
                                {
                                    xtype: 'button',
                                    id: 'bt_closeEmpAdd',
                                    width: 80,
                                    text: 'close'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});