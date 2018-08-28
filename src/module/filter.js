import Vue from 'vue'

Vue.filter("dataFilm",function(value){		
	var time=new Date(value);
	return (time.getMonth()+1)+"月"+(time.getDate())+"日"
})

