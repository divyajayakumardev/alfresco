model.jsonModel = {
	
	widgets:[
		{
		   "name": "alfresco/layout/HorizontalWidgets",
		   "config": {
		      "widgetMarginLeft": 10,
		      "widgetMarginRight": 10,
		      "widgets": [
		         {
		            "name": "alfresco/html/Image",
					"src":"https://via.placeholder.com/600/92c952", 
					
		            "widthPx": 300
		         },
				 /*{
				   "name": "alfresco/logo/Logo",
				    "widthPc": 50
				 },*/
				 
				 {
				 name: "alfresco/buttons/AlfButton",
				 config: {
				  name: "Study Document",				
				 label: "Open Document"
				 }
				 },
				 {
				    name: "alfresco/forms/controls/DateTextBox",
				    id: "VALID_DATE_VALUE_1",
				    config: {
				       name: "validDate",
				       value: "2012-12-12",
				       label: "Valid date #1"
				    }
				 },
				 {
				 	            "name": "alfresco/logo/Logo",
				 	            "widthPc": 50
				}
		      ]
		   }
		},
		
		{
		   name: "aikautw/widgets/StudyWidget"
		},
		
		{
		  name: "alfresco/layout/VerticalWidgets",
		  config: {
			widgetMarginTop: "50",
			widgetMarginBottom: "50",
		    widgets: [
				{
						  name: "alfresco/buttons/DropDownButton",
						  config: {
						    hideDropDownTopics: ["SAVE"],
						    label: "Show Form",
						    widgets: [
						       {
						          name: "alfresco/forms/Form",
						          config: {
						             okButtonPublishTopic: "SAVE",
						             okButtonPublishGlobal: true,
						             widgets: [
						                {
						                   name: "alfresco/forms/controls/TextBox",
						                   config: {
						                      label: "Value",
						                      name: "value"
						                   }
						                }
						             ]
						          }
						       }
						    ]
						  }
						},
				{
					name: "alfresco/layout/HorizontalWidgets",
					config: {
						widgetMarginLeft: "3",
						widgetMarginRight: "3",
						widgets: [
							{
								name: "aikautw/widgets/AjaxWidget"
							},
								{
								name: "aikautw/widgets/InputWidget"
							},
								{
								name: "aikautw/widgets/RenderWidget"
							},

							/*{
								name: "alfresco/layout/ClassicWindow",
								widthPc: "25",
								config: {
									title: "Groups",
									additionalCssClasses: "no-margin"
								}
							},
							{
								name: "alfresco/layout/ClassicWindow",
								widthPc: "25",
								config: {
									title: "Users",
									additionalCssClasses: "no-margin"
								}
							}*/
						]
					}
				},



						
		    ]
		  }
		},
		
	]
	


};
