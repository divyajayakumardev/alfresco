define(["dojo/_base/declare",
        "dijit/_WidgetBase",
        "alfresco/core/Core",
        "dojo/_base/lang",
      
		"dijit/popup",
        "dojo/text!./templates/PopupWidget.html"
    ],
	 function(declare, _Widget, popup, Core,   _Templated, template) {
	        return declare([_Widget, Core, _Templated, _TopicsMixin], {

	            templateString: template,
	          

	            postCreate: function example_widgets_InputWidget__postCreate() {
	                this.inherited(arguments);
					// wrap the pop-up widget and position it offscreen so
						    // that it can be measured by the widget’s startup method
						    popup.moveOffScreen(dropDown);

						    // if the pop-up has not been started yet, start it now
						    if(dropDown.startup && !dropDown._started){
						        dropDown.startup();
						    }

						    // make the pop-up appear around my node
						    popup.open({
						        parent: this,
						        popup: dropDown,
						        around: this.domNode,
						        orient: ["below-centered", "above-centered"],
						        onExecute: function(){
						            popup.close(dropDown);
						        },
						        onCancel: function(){
						            popup.close(dropDown);
						        },
						        onClose: function(){
						        }
						    });
							this.dialogDropDownButton = new SimpleDropDownButton({
													id: "showSimpleDialogButton",
													label: "show dialog",
													popup: new DialogWithPopupWidget({
														id: "simpleDialog",
														label: 'show simple choice drop down',
														popup: new SimpleChoiceWidget({
															id: "choiceFromDialog"
														})
													})
												})
	                this.dialogDropDownButton.placeAt(this.inputPopupNode);

	               

	            }

	           

	        });
	});
	