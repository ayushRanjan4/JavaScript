const body = document.querySelector('body');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

const redomcolor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const generate=function(){
  body.style.backgroundColor=redomcolor();
}
let interval=null;
const startgenerate=function(){
  if(interval===null){
    interval=setInterval(generate,1000);
  }
}

const stopgeneration=function(){
  clearInterval(interval);
  interval=null;
}

start.addEventListener('click',startgenerate);

stop.addEventListener('click',stopgeneration)


