## js Tab组件
### 组件功能
实现了tab组件

### 组件实现方式
获得组件中的标签和对应的标签页列表
```
init:function(){
    this.tabList = this.node.querySelectorAll('.header>.tab')
    this.tabPanels = this.node.querySelectorAll('.content>.panel')
},
```
绑定点击事件在.tab标签上，当点击的时候移除所有tab标签的.active,同时在该标签上添加active属性，然后在对应的.panel下添加.active
```
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
```