
var Unique = function(select_class,no_select_value){
	this.select_class = select_class;//select class is the class of the drop down lists(<select> tags) that have to be exclusive
	this.no_select_value = no_select_value;//value that is present in the drop down list by default
	this.list_values = Array.apply(null, new Array($(this.select_class).length)).map(String.prototype.valueOf,this.no_select_value);
	
	var _self = this;
	$(_self.select_class).change(function(){
		if($(this).val()!=_self.no_select_value){
			var prev_val = _self.list_values[$(_self.select_class).index($(this))];
			_self.list_values[$(_self.select_class).index($(this))] = $(this).val();
			_self.enableoption(_self.select_class,prev_val);
			_self.removeoption(_self.select_class,$(this).val());
		}
	});
}

Unique.prototype.removeoption = function(classname,value){
	var arr = $(classname);
	for(var i=0;i<arr.length;i++){
		$(arr[i]).children('option[value="'+value+'"]').attr('disabled','disabled');
	}
}

Unique.prototype.enableoption = function(classname,value){
	var arr = $(classname);
	for(var i=0;i<arr.length;i++){
		$(arr[i]).children('option[value="'+value+'"]').attr('disabled',false);
	}
}








