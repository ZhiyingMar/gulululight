# gulululight(前端)
项目的名字为gulululight，想表达的是源源不断的灵感（类似话唠？🤔）。正好对应了项目的功能


## 项目简介

项目是采用react开发，是个人开发项目gulululight项目的前端部分，主要的功能是做一个基础的留言板功能，可以自己创建账号，用账号发表留言板的相关内容。



项目的后端地址指路👉 - <https://github.com/ZhiyingMar/background-first>

## 安装要求

[NodeJS安装](https://nodejs.org/zh-cn) v16.13.0 


## 技术栈

React + Redux + TypeScript + ES6 +react-router + axios

## 项目运行

#### 依赖安装
`npm install`

#### 项目运行
`npm start`

#### 项目发布
`npm run build`

## 项目展示地址

 🌐 <https://zhiyingmar.github.io/gulululight/>

## 个人项目总结

### 项目难点

#### 1.新增、编辑和删除的时候对列表刷新，因为这几个功能是分在不同的组件上面的，传递值通过父子组件传的方式过于繁琐，需要解决同级组件的传值。

解决方式：  
引用evnetBus的库“events”，并且进行封装抛出，进行值之间的传递  
  
    //utils/eventBus.ts  
    const EventEmitter = require("events");  
    const eventBus = new EventEmitter();  
    export default eventBus;

页面引用抛出的eventBus  

    import eventBus from "@/utils/eventBus";  
    eventBus.emit("login",username);//触发
    useEffect(() => {
        //接收
        eventBus.on("refresh", () => {
            //...
        });
    }, []);

#### 2.redux的使用和刷新后值的保存

解决方式：
redux在store.ts文件里面进行处理，保存store和persistor

    //...
    import {persistStore, persistReducer} from 'redux-persist';
    import storageSession from 'redux-persist/lib/storage/session';

    // 缓存采用session缓存
    const storageConfig = {
        key: 'root', // 必须有的
        storage:storageSession // 缓存机制
    }

    const contentSessionReducer=persistReducer(storageConfig,contentReducer);

    const store = configureStore({
        reducer: {
            content: contentSessionReducer,
        },
        //... 
    });

    export const persistor=persistStore(store);
    export default store;

在index.tsx文件中还需要用PersistGate包裹

    import store from "@/store/store";
    import { persistor } from "@/store/store";
    import {PersistGate} from 'redux-persist/lib/integration/react';
    //...
    root.render(
        <Provider store={store} >
            <PersistGate loading={null} persistor={persistor}>
                //...
            </PersistGate>
        </Provider>
    );

#### 3.列表的触底加载处理

解决方式：
自定义一个hook进行使用，完成触底加载的操作，并且在触发的时候用loadsh的debounce减小滚动的开销

    export default function useContainerScroll(){
        useEffect(() => {
            const theContainer = getContainer();
            // 防抖动函数添加，减少开销
            window.addEventListener('scroll',_.debounce(onScroll.bind(theContainer),200));
            return () => {
                window.removeEventListener('scroll', onScroll.bind(theContainer));
            };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        //...
        function onScroll() {
        // 网页滚动高度 
        const scrollTopHeight = document.body.scrollTop || document.documentElement.scrollTop
        // 文档显示区域的高度
        const showHeight = window.innerHeight
        // 所有内容的高度
        const allHeight = document.body.scrollHeight

        // 只需要判断内容盒子的高度+滚动条的scrollTop = 盒子内容的高度即为触底
        setReachBottom(allHeight - safeBottomheight < scrollTopHeight + showHeight);
        }
    }






### 项目亮点

1.项目的UI使用的是react-bootstrap的UI库，可以自动适配屏幕的大小

2.项目使用redux进行状态管理，可以在切换页面的时候能够保证没有发送的内容不丢失，并且在这部分使用了redux-persist库，解决在刷新页面的时候redux的数据丢失问题。

3.对网络请求部分进行了封装，对于相同的报错进行统一的处理

4.使用eventBus简化了组件之间的通信，有效分离事件的发送者和接受者避免了复杂的问题，开销减小，使代码更加优雅。

5.进入页面与滚动添加动画，使页面显示更加生动

6.在调取借口的时候进行防抖处理，减少接口请求次数

  
