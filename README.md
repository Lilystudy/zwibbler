# zwibbler-drawBoard

本项目是基于 zwibbler 这一在线画图工具。底层的技术就是 canvas，一系列对 canvas 的操作。
 
>**如有帮助谢谢star**   :star::star::star::star::star:

 - 官网 ：http://zwibbler.com/
 - 官方英文文档：http://zwibbler.com/docs/
 - zwibbler作者邮箱：steve.hanov@gmail.com
 
 > 这里有对 zwibbler 工具的具体描述。里面也有一些简单的例子，大家可以学习学习。


## 1、首先引用官方JS文件，然后写以下代码，画板即可显示
---------------------------


```
<!doctype html>
<html>
<body>
    <div id="zwibbler" style="margin-left:auto;margin-right:auto;border:2px solid red;width:800px;height:600px;"></div>
    <input type="button" onclick="onImage()" value="Open as image"/>
    <script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
    <script src="http://zwibbler.com/zwibbler-demo.js"></script>
    <script type="text/javascript">
        var zwibbler = Zwibbler.create("zwibbler", {
            showPropertyPanel: true
        });
        function onImage() {
            var dataUrl = zwibbler.save("png");
            window.open(dataUrl, "other");
        }
    </script>
</body>
</html>

```

## 2、然后官方文档很详细，不过是全英文的，以下整理一些自己用到的API。
-----------------------------------

```
var zwibbler = Zwibbler.create("zwibbler", {
	showToolbar: false,//是否显示工具栏
	showColourPanel: false,//是否显示颜色画板
	defaultFontSize: 22,//文本字体大小
	multilineText: true,//文本工具是否允许设置换行
	scrollbars: false,//是否显示滚动条
	showPickTool: false,//是否在内置工具栏中显示选择工具(箭头选择工具)
	sloppy: false,
	allowTextInShape: false,//禁止用户在封闭形状内写入字
	autoPickTool: false,//绘制形状后，是否允许用户绘制相同类型的形状。
	defaultStrokeStyle: "#ff0000",//默认为#000000（默认图形颜色）
	defaultBrushColour: "#ff0000",//默认为#000000（默认刷子颜色）
	defaultBrushWidth:2,//画笔的宽度
	//defaultArrowSize:15,//控制箭头工具中箭头的大小
	//defaultArrowStyle: 'solid',//箭头样式  simple solid
	defaultLineWidth: 3,//图形的边框宽度
	//defaultStrokeStyle: 'blue',//图形的边框颜色
	defaultTextFillStyle:'red',//文本的颜色
	backgroundImage: "http://localhost:64435/Content/img/top_bg.jpg", 
	//defaultZoom: "width",//缩放背景适应整个画板（测试没反应） width  page
});
```


## 3、方法

```
zwibbler.newDocument();//重绘（可用作清空）画板内容
zwibbler.useLineTool({//单机箭头工具栏时触发
  arrowStyle: "solid",//如改变箭头工具的形状及大小
  arrowSize: 20
});
zwibbler.useRectangleTool({//单机矩形工具栏时触发
  fillStyle: "transparent"//此属性为矩形的填充色，该属性值为透明
});
zwibbler.useCircleTool({//单机圆形工具栏时触发
  fillStyle: "transparent"
});
zwibbler.setZoom(0.6);//如添加背景图片后，可缩放背景图



```
