sap.ui.jsview("views.App",{
	getControllerName: function(){
		return "views.App";
	},

	createContent: function(oController){
		this.setDisplayBlock(false);
		return new sap.m.App("navContainer");
	}
});
