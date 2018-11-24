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

### 如何使用
写好header和content
header为选择
content为对应文本框
```
    <div class="mod-tab mod-tab1">
        <div class="header">
            <div class="tab active">1</div>
            <div class="tab">2</div>
            <div class="tab">3</div>
            <div class="tab">4</div>
        </div>
        <div class="content">
            <div class="panel active">panel1</div>
            <div class="panel">panel2</div>
            <div class="panel">panel3</div>
            <div class="panel">panel4</div>
        </div>
    </div>
```
创建Tab
```
 new Tab('.mod-tab1')
```