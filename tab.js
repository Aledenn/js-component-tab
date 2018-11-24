function Tab(node)
{
    this.node = document.querySelector(node)
    this.init()
    this.bind()
}

Tab.prototype = {
    init:function(){
        this.tabList = this.node.querySelectorAll('.header>.tab')
        this.tabPanels = this.node.querySelectorAll('.content>.panel')
    },
    bind:function(){
        this.tabList.forEach((tab) => {
            var _this = this
            tab.onclick = function(e){
                var target = e.target
                var index = [].indexOf.call(_this.tabList,target)
                _this.tabList.forEach((tab) => {
                    tab.classList.remove('active')
                })

                target.classList.add('active')
                
                _this.tabPanels.forEach((panel) => {
                    panel.classList.remove('active')
                })
                _this.tabPanels[index].classList.add('active')
            }
        })
    }

}

