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
        for(let i = 0; i<data.length ; i++){
            let that = new MDInput()
        
            that._data = data;
            if(that._data[i].mdInput.hideFooter){
                that._data[i].mdInput.style_mdi_num_input = "display:none;"
                that._data[i].mdInput.style_mdi_helper = "display:none;"
                that._data[i].mdInput.style_mdi_num_range ="display:none;"
            }else{
                that._data[i].mdInput.style_mdi_num_input =  that._data[i].mdInput.style_mdi_number_inputting
                that._data[i].mdInput.style_mdi_helper = that._data[i].mdInput.style_mdi_helper_shown
                that._data[i].mdInput.style_mdi_num_range =that._data[i].mdInput.style_mdi_number_range
                that._data[i].mdInput.showHelperText = that._data[i].mdInput.isHelperShowBefore
            }
            
            console.log(page)
          
            page.setData({
                inputs:that._data
            })
            let onInput = data[i].mdInput.onMDInput
            let onBlur = data[i].mdInput.onMDIBlur
            page[onInput] = function(e){
            
                if(e.detail.value.length>Number(that._data[i].mdInput.mdi_num_range.substring(that._data[i].mdInput.mdi_num_range.length-2)))           {

                     if(that._data[i].mdInput.hideFooter){
                            that._data[i].mdInput.style_mdi_num_input = "display:none;"
                            that._data[i].mdInput.style_mdi_helper = "display:none;"
                            that._data[i].mdInput.style_mdi_num_range ="display:none;"
                    }else{
                            that._data[i].mdInput.style_mdi_num_input =  that._data[i].mdInput.style_mdi_number_overflow
                            that._data[i].mdInput.mdi_num_input = e.detail.value.length
                            that._data[i].mdInput.mdi_helper_text = that._data[i].mdInput.mdi_helper_text_error
                            if(!that._data[i].mdInput.isHelperShowBefore){
                                that._data[i].mdInput.showHelperText = true
                            }else{
                                that._data[i].mdInput.style_mdi_helper = that._data[i].mdInput.style_mdi_helper_error
                                
                            }
                    }
                    that._data[i].mdInput.style_mdi_border = that._data[i].mdInput.style_mdi_border_focus
                    
                   
                    
                    page.setData({
                        inputs:that._data
                    })
                }else{
                    if(e.detail.value.length==0){
                        that._data[i].mdInput.style_mdi_float = 'transform: translateY(0px);'
                        that._data[i].mdInput.mdi_num_input = e.detail.value.length
                        page.setData({
                            inputs:that._data
                        })
                    }else{
                        that._data[i].mdInput.style_mdi_border = that._data[i].mdInput.style_mdi_border_focus
                        that._data[i].mdInput.style_mdi_float = 'transform: translateY(-20px);'+that._data[i].mdInput.style_mdi_float_up

                         if(that._data[i].mdInput.hideFooter){
                            that._data[i].mdInput.style_mdi_num_input = "display:none;"
                            that._data[i].mdInput.style_mdi_helper = "display:none;"
                            that._data[i].mdInput.style_mdi_num_range ="display:none;"
                         }else{
                            
                            that._data[i].mdInput.style_mdi_num_input =  that._data[i].mdInput.style_mdi_number_inputting
                            that._data[i].mdInput.mdi_num_input = e.detail.value.length
                            that._data[i].mdInput.mdi_helper_text = that._data[i].mdInput.mdi_helper_text_tip
                            if(!that._data[i].mdInput.isHelperShowBefore&that._data[i].mdInput.showHelperText){
                                that._data[i].mdInput.showHelperText = false
                            }else{
                                that._data[i].mdInput.style_mdi_helper = that._data[i].mdInput.style_mdi_helper_shown
                            }
                       
                    }
                        page.setData({
                            inputs:that._data
                        })
                 }
                       
                }

                console.log(page.data)
            }

            page[onBlur]=function(e){
                that._data[i].mdInput.style_mdi_border = 'border-bottom:1px solid grey;'
                page.setData({
                            inputs:that._data
                })
                _inputValues[i] = e.detail.value
                
            }
        
    }

     this.inputValues= _inputValues
     console.log(this.inputValues)
    }


    static getValue(){
        return  this.inputValues
    }

   
    
}


module.exports = MDInput