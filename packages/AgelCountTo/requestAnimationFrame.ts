let lastTime = 0;

const isServer = typeof window === 'undefined'

let requestAnimationFrame
let cancelAnimationFrame


if(isServer){
  requestAnimationFrame = function () {
    return
  }
  cancelAnimationFrame = function () {
    return
  }
}else{
  requestAnimationFrame = window.requestAnimationFrame
  cancelAnimationFrame = window.cancelAnimationFrame

  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function (callback: (time: number) => void) {
      const currTime = new Date().getTime();
      // 为了使setTimteout的尽可能的接近每秒60帧的效果
      const timeToCall = Math.max(0, 16 - (currTime - lastTime));
      const id = window.setTimeout(() => {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  
    cancelAnimationFrame = function (id: number) {
      window.clearTimeout(id);
    };
  }
}



export { requestAnimationFrame, cancelAnimationFrame };
