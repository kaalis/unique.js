function Unique(select_class,no_select_value){
	this.select_class = select_class;//select class is the class of the drop down lists(<select> tags) that have to be exclusive
	this.no_select_value = no_select_value;//value that is present in the drop down list by default
	this.list_values = Array.apply(null, new Array($(this.select_class).length)).map(String.prototype.valueOf,this.no_select_value);
	
	var _self = this;
	$(select_class).change(function(){
		var prev_val = _self.list_values[$(_self.select_class).index($(this))];
		_self.list_values[$(_self.select_class).index($(this))] = $(this).val();
		console.log("here");
		_self.enableoption(_self.select_class,prev_val);
		console.log("here1");
		_self.removeoption(_self.select_class,$(this).val(),$(_self.select_class).index($(this)));
		console.log("here2");
	});
}

Unique.prototype.removeoption = function(classname,value,index){
	console.log("in remove option");
	if(value==this.no_select_value)return;
	var arr = $(classname);
	for(var i=0;i<arr.length;i++){
		if(i==index)continue;
		$(arr[i]).children('option[value="'+value+'"]').attr('disabled',true);
	}
	
	//$(arr[index]).children('option[value="'+value+'"]').removeAttr('disabled');
}

Unique.prototype.enableoption = function(classname,value){
	console.log("in enable option");
	var arr = $(classname);
	for(var i=0;i<arr.length;i++){
		console.log($(arr[i]).children('option[value="'+value+'"]').removeAttr('disabled'));
	}
}
