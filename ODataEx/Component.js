jQuery.sap.declare("com.example.ODataEx.Component");

sap.ui.core.UIComponent.extend("com.example.ODataEx.Component",{
	metadata : {

		routing : {
			viewType : "JS",
			viewPath : "views"
			targetControl : "navContainer",
			clearTarget: false,
			transition: "flip"
			routes: {
				[

				]

			}// end of routes
		}//end of routing
	},//end of metadata

	init: function(){
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		//call createContent
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		this._router = this.getRouter();
		this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);
		this._router.Initialize();

		//create model
		var url = "http://services.odata.org/Northwind/Northwind.svc/";
		var this.endpoint = new sap.ui.model.odata.ODataModel(url);
		return this.setModel(this.endpoint, "odata");

	}//end of init,

	createContent: function(){
		var oView = sap.ui.view({
			id: "App",
			viewName: "views.App",
			type: "JS",
			viewData: {component: this}
		});

		return oView;
	}// end of createContent



});