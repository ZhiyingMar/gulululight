import { MutableRefObject, useEffect, useState } from 'react';

const _ = require('lodash');

interface IContainerScrollOption {
  /** 距离底部多少距离触发触底 */
  safeBottomheight: number;
}

interface IContainerScrollState {
  /** 滚动条横向高度 */
  scrollLeft: number;
  /** 滚动条高度 */
  scrollTop: number;
  /** 是否触底 */
  reachBottom: boolean;
  /** scroll to top */
  scrollToTop: () => void;
  /** scroll to left */
  scrollToLeft: () => void;
  /** 滚动到指定锚点位置*/
  scrollToAnchor: (anchorId:string) => void;
}

/**
 * 获取dom对应的scrollLeft & scrollTop
 * @param container Ref<HTMLElement> | string 容器（不传，默认body）
 * @param options 额外配置参数
 * @returns scrollState IContainerScrollState
 */
export default function useContainerScroll(
  container: MutableRefObject<HTMLElement> | string,
  options?: IContainerScrollOption,
) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [reachBottom, setReachBottom] = useState(false);
  const { safeBottomheight = 50 } = options || {};

  function getContainer() {
    let theContainer: HTMLElement|null = null;
    if (container && (container as MutableRefObject<HTMLDivElement>).current) {
      theContainer = (container as MutableRefObject<HTMLDivElement>).current;
    }
    if (container && typeof container === 'string') {
      theContainer = document.querySelector(container);
    }
    
    return theContainer || document.body;
  }

  function onScroll() {
    
    const theContainer = getContainer();

    // 网页滚动高度 
    const scrollTopHeight = document.body.scrollTop || document.documentElement.scrollTop
    // 文档显示区域的高度
    const showHeight = window.innerHeight
    // 所有内容的高度
    const allHeight = document.body.scrollHeight
    
    setX(theContainer.scrollLeft);
    setY(theContainer.scrollTop);

     // 只需要判断内容盒子的高度+滚动条的scrollTop = 盒子内容的高度即为触底
    setReachBottom(allHeight - safeBottomheight < scrollTopHeight + showHeight);
  }

  function resetScroll(type: 'top' | 'left' = 'top') {
    const theContainer = getContainer();
    const scrollKey = type === 'left' ? 'scrollLeft' : 'scrollTop';
    let timer:any;

    const step = () => {
      theContainer[scrollKey] -= 130;        
      if (theContainer[scrollKey] > 0) {
        timer = window.requestAnimationFrame(step);
      } else {
        window.cancelAnimationFrame(timer);
      }
    };

    timer = window.requestAnimationFrame(step);
  }

//   滚动到指定位置
     function  scrollToAnchor(anchorId:string){
    let anchorElement:any = document.getElementById(anchorId);
    
    if (anchorElement) {
        anchorElement.scrollIntoView({behavior: 'smooth',block: "center", inline: "nearest"});
    }
  }

  useEffect(() => {
    const theContainer = getContainer();

    // 防抖动函数添加，减少开销
    window.addEventListener('scroll',_.debounce(onScroll.bind(theContainer),200));

    return () => {
        window.removeEventListener('scroll', onScroll.bind(theContainer));
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    scrollLeft: x,
    scrollTop: y,
    reachBottom,
    scrollToTop: () => {
    //   resetScroll('top');
    // window.scrollTo(0,130)
    },
    scrollToLeft: () => {
      resetScroll('left');
    },
    scrollToAnchor:(messages:string)=>{
        scrollToAnchor(messages)
    }
  } as IContainerScrollState;
}