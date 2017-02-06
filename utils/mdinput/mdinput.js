class MDInput{

   
    constructor(){
        console.log('构造')
    }

    putData(data){
           // 确保各个page不影响
        let allpages = getCurrentPages()
        let currentPage = allpages[allpages.length - 1]
        let page = currentPage 
        page.setData(data)
    }

    handlerInput(e){
         console.log(e.detail)
           // 确保各个page不影响
        let allpages = getCurrentPages()
        let currentPage = allpages[allpages.length - 1]
        let page = currentPage 
    
    
    if(e.detail.value.length>20){
        
        page.setData({
                 style_mdi_num_input:'color:red;',
                mdi_num_input:e.detail.value.length
           
        })
        if(!page.data.showHelperText){
            page.setData({
                      showHelperText:true,
                    mdi_helper_text:'最多只能输入20个字符哦!'
           
        })
        }
    }else{
        if(e.detail.value.length==0){
          page.setData({
                    style_mdi_float:'transform: translateY(0px)',

              
          })
      }else{
        page.setData({
                 style_mdi_border:'border-bottom:1px solid deepskyblue',
                    style_mdi_float:'color:deepskyblue ;transform: translateY(-20px)',
                    style_mdi_num_input:'color:deepskyblue;',
                    showHelperText:false,
                    mdi_num_input:e.detail.value.length
                
         
        })
      }
        
    }
    }
    
}


module.exports = MDInput