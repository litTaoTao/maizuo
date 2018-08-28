<template>
    <div>
        <ul>
			<li v-for="(item,index) in letters" :key="index">
				<span class="item"><a :href="'#'+item">{{item}}</a></span>
			</li>
        </ul>
        <ul class="list">
           <li v-for="(item,index) in cities" :key="item.id">
           		<h3 :id="item.zm" v-if="index===0 || index!=0 && item.zm!=cities[index-1].zm">{{item.zm}}</h3>
           		<span class="item">{{item.name}}</span>
           </li>
        </ul>
    </div>
</template>
<script>

export default {
      data(){
        return {
           cities:[],
           letters:[]
        }
      },
      created(){
      	 
      	  for(var i=65;i<91;i++){		//遍历26个字母
      	  	if(i===73 || i===79 || i===85 || i===86){		//除去i  o  v   u
      	  		continue;
      	  	}
      	  	this.letters.push(String.fromCharCode(i))
      	  }
      	  console.log(this.letters);
          this.$http.get("/mz/v4/api/city",{
           params:{
                        __t:new Date().getTime()
           }
          }).then((res)=>{
              this.cities= res.data.data.cities.sort((a,b)=>{		 //sort排序
                 return a.pinyin[0].charCodeAt()-b.pinyin[0].charCodeAt()		//将字母转换成Ascll	
              }).map((item)=>{ 			//map映射
                 return {
	                 "id":item.id,
	                 "zm":item.pinyin[0],
	                 "name":item.name
                 }
              })
            
          })

      },
	  methods:{
	  	
	  }
}
</script>
<style lang="scss" scoped="scoped">
$sc:25;
	h3:target{
		padding-top: 20/$sc+rem;
	}
   .list  h3{
   	clear:both;
   	background: #ccc;
   }
  .item{
  	width: 25%;
    font-size: 16px;
    line-height: 30/$sc+rem;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    border-bottom: #ebebeb 1px solid;
    background: #fff;
    float: left
  }
  h3{
  	font-size: 14px;
  	padding-left: 13/$sc+rem;
  	line-height: 20/$sc+rem;
  	font-weight: normal;
  	background: #ebebeb;
  }
  li{
  	list-style: none;
  	background: #fff;
  }
  a{
  	text-decoration: none;
  }

</style>