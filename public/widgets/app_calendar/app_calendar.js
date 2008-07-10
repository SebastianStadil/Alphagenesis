/*
 * This file is part of Appcelerator.
 *
 * Copyright (C) 2006-2008 by Appcelerator, Inc. All Rights Reserved.
 * For more information, please visit http://www.appcelerator.org
 *
 * Appcelerator is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


Appcelerator.Widget.Calendar =
{
	calendarCount:0,
	
	getName: function()
	{
		return 'appcelerator calendar';
	},
	getDescription: function()
	{
		return 'calendar widget';
	},
	getVersion: function()
	{
		return '1.0.2';
	},
	getSpecVersion: function()
	{
		return 1.0;
	},
	getAuthor: function()
	{
		return 'Nolan Wright';
	},
	getModuleURL: function ()
	{
		return 'http://www.appcelerator.org';
	},
	isWidget: function ()
	{
		return true;
	},
	getWidgetName: function()
	{
		return 'app:calendar';
	},
	getActions: function()
	{
		return ['execute', 'close'];
	},
	getAttributes: function()
	{
		var T = Appcelerator.Types;
		return [{name: 'on', optional: true, description: "May be used to execute the calendar.", type: T.onExpr},
		        {name: 'close', optional: true, description: 'Toggle display of the close button.', type: T.bool, defaultValue: false},
				{name: 'inputId', optional: true, type: T.identifier},
				{name: 'elementId', optional: true, type: T.identifier},
				{name: 'minDate', optional: true, type: T.pattern(/[0-9]{1,2}\/[0-9]{1,2}(\/[0-9]{4})/)},
				{name: 'title', optional: true, defaultValue: ''}];
	},
	execute: function(id,parameterMap,data,scope,version)
	{
		Element.show($(parameterMap['name']));
	},
	close: function(id, parameterMap, data, scope, version) 
	{
	    Element.hide($(parameterMap['name']));
	},
	setValue: function(id,params,value) {
	    var cal = YAHOO.appcelerator.calendar[params['name']];
	    if (value != "") {
    		cal.select(value);
    		var selectedDates = cal.getSelectedDates();
    		if (selectedDates.length > 0) {
    			var firstDate = selectedDates[0];
    			cal.cfg.setProperty("pagedate", (firstDate.getMonth()+1) + "/" + firstDate.getFullYear());
    			cal.render();
    		}
    	}
	},
	getValue: function(id,params) {
	    return params['value'];
	},
	compileWidget: function(parameters)
	{
		var inputId = parameters['inputId'];
		var elementId = parameters['elementId'];
		var minDate = parameters['minDate'];
		var title = parameters['title'];
		var name = parameters['name'];
		var id = parameters['id'];
		var close = !!parameters['close'];
		var element = null;
		
		if (elementId)
		{
			element = $(elementId);
		}
		else if(inputId)
		{
			element = $(inputId);
		}
		
		YAHOO.namespace('appcelerator.calendar');
		
		if (minDate)
		{
			YAHOO.appcelerator.calendar[name] = new YAHOO.widget.Calendar(name+'_cal',name,{close:close,mindate:minDate,title:title});
		}
		else
		{
			YAHOO.appcelerator.calendar[name] = new YAHOO.widget.Calendar(name+'_cal',name,{close:close,title:title});
		}

		YAHOO.appcelerator.calendar[name].render();
		YAHOO.appcelerator.calendar[name].selectEvent.subscribe(function(type,args,obj)
		{
			var dates=args[0];
			var date=dates[0];
			
			var year=date[0];
			var month=date[1];
			var date=date[2];
            
			var dateString = month + '/' + date + '/' + year;
			
			if(element)
			{
    			if (inputId)
    			{
    				element.value = dateString;
    				Appcelerator.Compiler.executeFunction(element,'revalidate');
    			}
    			else
    			{
    				element.innerHTML = dateString;
    			}
    		}
    		else
    		{
    		    parameters['value'] = dateString;
    		}
    		
			Element.hide(name);
		}, YAHOO.appcelerator.calendar[name], true);
	},
	buildWidget: function(element, parameters)
	{
        if (!parameters.inputId && !parameters.elementId && !$(parameters.id).hasAttribute('fieldset'))
        {
            throw "inputId or elementId or fieldset is required";
        }
        
		parameters['name'] = 'app_calendar_' + Appcelerator.Widget.Calendar.calendarCount++;
		var html = '<div style="position:absolute;z-index:1000;display:none" id="'+parameters['name']+'" on="' + 
		        parameters['on'] + '"></div>';
		
		return {
			'position' : Appcelerator.Compiler.POSITION_REPLACE,
			'presentation' : html,
			'wire': true,
			'compile' : true 
	   };	
	}
};

Appcelerator.Core.loadModuleCSS('app:calendar','calendar.css');
Appcelerator.Widget.registerWithJS('app:calendar',Appcelerator.Widget.Calendar,['yahoo.js', 'event.js', 'dom.js', 'calendar.js']);
