new Vue({
    el:"#app",
    data:{
        isActive:5,
       
        boxShow:0,
        itemlist:[
        {"tran":"translate(91.5,0)"},
        {"tran":"translate(3,151)"},
        {"tran":"translate(179,151)"},
        {"tran":"translate(91.5,302)"},
        ],
    },
    filters:{

    },
    mounted: function(){

    },
    methods:{
        
        onActive:function(){
        	boxShow=0;
        	
        },
        
    }
})