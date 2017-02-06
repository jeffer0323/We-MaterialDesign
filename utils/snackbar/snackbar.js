class SnackBar{

   
    constructor(){
        this.timer = null // 定时器
        console.log('构造')
        
    }


// snackbar单例
   static getInstance(){
       if(this.instance==undefined){
           console.log('new')
            console.log(this.instance)
           this.instance = new SnackBar()
           return this.instance
       }else{
           console.log('reuse')
           return this.instance
       }
   }

  

    show(data){
        // 确保各个page不影响
        let allpages = getCurrentPages()
        let currentPage = allpages[allpages.length - 1]
        let page = currentPage 
        console.log(this.page_temp)
        clearTimeout(this.timer)

        data.snackEnable = true
        page.setData({
            snackbar: data
        })
       
        let animation = wx.createAnimation()
        animation.translateY(0).step()
        page.setData({
            'snackbar.animationData': animation.export()
        })


        if (data.duration <= 0) {
            this.timer =  setTimeout (() => {
                this.hide()
                typeof data.success === 'function' && data.success(data)
            }, 2000)
           
        } else {
            this.timer = setTimeout(() => {
                this.make()

                typeof data.success === 'function' && data.success(data)
            }, data.duration)
        }
    }

    hide(data){
         let allpages = getCurrentPages()
        let currentPage = allpages[allpages.length - 1]
        let page = currentPage 
        clearTimeout(this.timer)

        if (!page.data.snackbar.snackEnable) {
            return
        }

        let animation = wx.createAnimation()
        animation.translateY(60).step()
        page.setData({
            'snackbar.animationData': animation.export()
        })
        
        setTimeout(() => {
            page.setData({
               snackbar: {'snackEnable': false}
            })
        }, 400)

    }

    make(data){
        try {
            if (!data) {
                this.hide()
            } else {
                this.show(data)
            }
        } catch (err) {
            console.error(err)
            
            data && typeof data.fail === 'function' && data.fail(data)
        } finally {
            data && typeof data.complete === 'function' && data.complete(data)
        }

        return this;
    }
    

}


module.exports = SnackBar
