/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('qron.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    logout : function () {
        Ext.Msg.confirm('Warning', 'Are you sure want to exit from app ?',
            function (choice) {
                if (choice === 'yes') {
                    //do clear session here and then reload
                    window.location.reload();
                }
            }
        );
    },

    mainMenuKpi: function () {
        //call main menu kpi
    },

    mainMenuOrganization: function () {
        //call main menu Org
    },

    mainMenuPosition: function () {
        //call main menu position
    },

    mainMenuEmployee: function () {
        //call main menu employee
    },

    mainMenuUser: function () {
        var mainTabPanel = this.lookupReference('qronMainTabPanel');
        var mainUsrTabPanel = this.lookupReference('mainUsersTabPanel');
        if(!Ext.isEmpty(mainUsrTabPanel)){
            mainTabPanel.setActiveTab(mainUsrTabPanel);
        }else {
            var usersModule = Ext.create('qron.view.users.Users');
            var usrTab = mainTabPanel.add(usersModule);
            mainTabPanel.setActiveTab(usrTab);
        }
    }
});
