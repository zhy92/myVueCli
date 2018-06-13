<template>  
  <div class="row">
    <div class="col-md-12">
      <div class="panel-group table-responsive" role="tablist">
        <div class="panel panel-primary leftMenu">
          <!-- 利用data-target指定要折叠的分组列表 -->
          <div class="panel-heading" id="collapseListGroupHeading1" data-toggle="collapse" data-target="#collapseListGroup1" role="tab" >
            <h4 class="panel-title">
                <a href="#/mainPage">首页</a>
                <!-- <span class="glyphicon glyphicon-chevron-up right"></span> -->
            </h4>
          </div>
          <!-- .panel-collapse和.collapse标明折叠元素 .in表示要显示出来 -->
          <!-- <div id="collapseListGroup1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="collapseListGroupHeading1">
            <ul class="list-group">
              <li class="list-group-item"> -->
                <!-- 利用data-target指定URL -->
                <!-- <button class="menu-item-left" data-target="test2.html">
                  <span class="glyphicon glyphicon-triangle-right"></span>分组项1-1
                </button>
              </li>
              <li class="list-group-item">
                <button class="menu-item-left">
                  <span class="glyphicon glyphicon-triangle-right"></span>分组项1-2
                </button>
              </li>
            </ul>
          </div> -->
        </div><!--panel end-->
        <div class="panel panel-primary leftMenu">
          <div class="panel-heading" id="collapseListGroupHeading2" data-toggle="collapse" data-target="#collapseListGroup2" role="tab" >
              <h4 class="panel-title">
                  内页
                  <span class="glyphicon glyphicon-chevron-down right"></span>
              </h4>
          </div>
          <div id="collapseListGroup2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="collapseListGroupHeading2">
              <ul class="list-group">
                <li class="list-group-item">
                  <a class="menu-item-left" href="#/hello">
                      <span class="glyphicon glyphicon-triangle-right"></span>hello
                  </a>
                </li>
                <li class="list-group-item">
                  <a class="menu-item-left" href="#/myPage">
                      <span class="glyphicon glyphicon-triangle-right"></span>mypage
                  </a>
                </li>
              </ul>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>  
<script>
export default {
  name: "navgator",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel-group {
  max-height: 770px;
  overflow: auto;
}
.leftMenu {
  margin: 10px;
  margin-top: 5px;
}
.leftMenu .panel-heading {
  font-size: 14px;
  padding-left: 20px;
  height: 36px;
  line-height: 36px;
  color: white;
  position: relative;
  cursor: pointer;
} /*转成手形图标*/
.leftMenu .panel-heading span {
  position: absolute;
  right: 10px;
  top: 12px;
}
.leftMenu .menu-item-left {
  padding: 2px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
}
.leftMenu .menu-item-left:hover {
  background: #c4e3f3;
  border: 1px solid #1e90ff;
}
</style>
