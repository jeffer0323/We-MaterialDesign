class MDInput{

   
    constructor(){
        console.log('构造')
        this._data = null
        this._inputValue =''
    }

    static putData(data){
        // 确保各个page不影响
        var _inputValues = new Array(data.length)
        let allpages = getCurrentPages()
        let currentPage = allpages[allpages.length - 1]
        let page = currentPage 
        for(var i = 0; i<data.length ; i++){
            if(data[i].mdInput.hideFooter){
                data[i].mdInput.style_mdi_num_input = "display:none;"
                data[i].mdInput.style_mdi_helper = "display:none;"
                data[i].mdInput.style_mdi_num_range ="display:none;"
            }else{
                data[i].mdInput.style_mdi_num_input = data[i].mdInput.style_mdi_number_inputting
                data[i].mdInput.style_mdi_helper = data[i].mdInput.style_mdi_helper_shown
                data[i].mdInput.style_mdi_num_range =data[i].mdInput.style_mdi_number_range
                data[i].mdInput.showHelperText = data[i].mdInput.isHelperShowBefore
            }
            
          
            page.setData({
                inputs:data
            })
            MDInput.registerEvent(page, data ,i,_inputValues)
            
    }

     this.inputValues= _inputValues
    }

    static registerEvent(page,data,i,_inputValues){
         var onInput = data[i].mdInput.onMDInput
        var onBlur = data[i].mdInput.onMDIBlur
        page[onInput] = function(e){
                if(e.detail.value.length>Number(data[i].mdInput.mdi_num_range.substring(data[i].mdInput.mdi_num_range.length-2)))           {
                   
                     if(data[i].mdInput.hideFooter){
                            data[i].mdInput.style_mdi_num_input = "display:none;"
                            data[i].mdInput.style_mdi_helper = "display:none;"
                            data[i].mdInput.style_mdi_num_range ="display:none;"
                    }else{
                            data[i].mdInput.style_mdi_num_input =  data[i].mdInput.style_mdi_number_overflow
                            data[i].mdInput.mdi_num_input = e.detail.value.length
                            data[i].mdInput.mdi_helper_text = data[i].mdInput.mdi_helper_text_error
                            if(!data[i].mdInput.isHelperShowBefore){
                                data[i].mdInput.showHelperText = true
                            }else{
                                data[i].mdInput.style_mdi_helper = data[i].mdInput.style_mdi_helper_error
                                
                            }
                    }
                    data[i].mdInput.style_mdi_border = data[i].mdInput.style_mdi_border_focus
                    
                   
                    
                    page.setData({
                        inputs:data
                    })
                }else{
                    if(e.detail.value.length==0){
                        data[i].mdInput.style_mdi_float = 'transform: translateY(0px);'
                        data[i].mdInput.mdi_num_input = e.detail.value.length
                        page.setData({
                            inputs:data
                        })
                    }else{
                        data[i].mdInput.style_mdi_border = data[i].mdInput.style_mdi_border_focus
                        data[i].mdInput.style_mdi_float = 'transform: translateY(-20px);'+data[i].mdInput.style_mdi_float_up

                         if(data[i].mdInput.hideFooter){
                            data[i].mdInput.style_mdi_num_input = "display:none;"
                            data[i].mdInput.style_mdi_helper = "display:none;"
                            data[i].mdInput.style_mdi_num_range ="display:none;"
                         }else{
                            
                            data[i].mdInput.style_mdi_num_input =  data[i].mdInput.style_mdi_number_inputting
                            data[i].mdInput.mdi_num_input = e.detail.value.length
                            data[i].mdInput.mdi_helper_text = data[i].mdInput.mdi_helper_text_tip
                            if(!data[i].mdInput.isHelperShowBefore&data[i].mdInput.showHelperText){
                                data[i].mdInput.showHelperText = false
                            }else{
                                data[i].mdInput.style_mdi_helper = data[i].mdInput.style_mdi_helper_shown
                            }
                       
                    }
                        page.setData({
                            inputs:data
                        })
                 }
                       
                }

                console.log(page.data)
            }

            page[onBlur]=function(e){
                data[i].mdInput.style_mdi_border = 'border-bottom:1px solid grey;'
                page.setData({
                            inputs:data
                })
                _inputValues[i] = e.detail.value
                
            }
        
    }


    static getValue(){
        return  this.inputValues
    }

   
    
}


module.exports = MDInput