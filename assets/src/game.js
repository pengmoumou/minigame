// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
//定义一个类继承自cc.Component,编辑器自动找到它
cc.Class({
    extends: cc.Component,
    //属性列表
    properties: {
        //简单数据类型，使用this.num访问，编辑器初始化指定
        num:0,
        //复杂数据类型
        foo: {
            // ATTRIBUTES:
            default: null,        // The default value will be used only when the component attaching
                                  // to a node for the first time
            //cc是cocos creator缩写，所有cocos的对象类的开头
            type: cc.SpriteFrame, // optional, default is typeof default
            serializable: true,   // optional, default is true
        },
        //_开头的属性，不会绑定到编辑器，可以作为属性来访问
        _nums:1,
        bar: {
            get () {
                return this._bar;
            },
            set (value) {
                this._bar = value;
            }
        },
        speed:200,
        item:{
            type:cc.Node,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    //组件实例.start
    start () {
        //this指向当前组件实例
        //this.node指向当前组件实例所在的节点

    },
    //组件实例.update(dt)
     update (dt) {
         //动画平移
        //  var s=this.speed*dt;
        //  this.item.x+=s;
     },
});
