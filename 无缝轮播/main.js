let n
let arr = $(`.images>img`)

init()
let timer=setInterval(function () {
  //console.log(n)
  makeXleft(getImage(n))
    .one('transitionend', function (e) {
      makeXright($(e.currentTarget))
    })

  makeXcenter(getImage(n + 1))
  n += 1
}, 2000)


/*当浏览器当前窗口切走以后，过一会又切回来时轮播顺序会错乱，因为浏览器在当前窗口被切走后偷懒了，时间不同，把许多轮播放在一起执行了  解决思路：监听当前窗口是否被切换（visivilitychange）,切走时轮播停止，切回时轮播再继续。 */
document.addEventListener('visibilitychange',function(e){
  if(document.hidden){
    window.clearInterval(timer)
  }
  else{
    timer=setInterval(function () {
      //console.log(n)
      makeXleft(getImage(n))
        .one('transitionend', function (e) {
          makeXright($(e.currentTarget))
        })
    
      makeXcenter(getImage(n + 1))
      n += 1
    }, 2000)
  }
})


//下面是工具函数

function getImage(n) {
  return $(`.images>img:nth-child( ${x(n)} )`)
}

function makeXright($node) {
  $node.removeClass('Xleft Xcenter').addClass('Xright')
}

function makeXleft($node) {
  $node.removeClass('Xcenter Xright').addClass('Xleft')
  return $node
}

function makeXcenter($node) {
  $node.removeClass('Xright Xleft').addClass('Xcenter')
  return $node
}

function init() {
  n = 1
  $(`.images>img:nth-child(${n})`).addClass('Xcenter').siblings().addClass('Xright')
}

//let arr=$(`.images>img`)
//console.log(arr)
function x(n) {
  let size = arr.length
  if (n > size) {
    n = n % size
    if (n === 0) {
      n = size
    }
  }
  return n
}






















// setInterval(function(){
//   console.log(n)
//   $('.images>img:nth-child( '+x(n)+' )').removeClass('Xcenter').addClass('Xleft')

//   $('.images>img:nth-child( '+x(n+1)+' )').removeClass('Xright').addClass('Xcenter')

//   $('.images>img:nth-child( '+x(n)+' )').one('transitionend',function(e){$(e.currentTarget).removeClass('Xleft').addClass('Xright')})
//   n += 1
// },n*3000)




// $('.images > img:nth-child(1)').addClass('Xcenter')
// $('.images > img:nth-child(2)').addClass('Xright')
// $('.images > img:nth-child(3)').addClass('Xright')
// let n = 1
// setInterval(()=>{
//   $(`.images > img:nth-child(${x(n)})`).removeClass('Xcenter').addClass('Xleft')
//     .one('transitionend', (e)=>{
//       $(e.currentTarget).removeClass('Xleft').addClass('Xright')
//     })
//   $(`.images > img:nth-child(${x(n+1)})`).removeClass('Xright').addClass('Xcenter')
//   n += 1
// },3000)


// function x(n){
//   if(n>3){
//     n = n%3
//     if (n===0){
//       n =3
//     }
//   } // n = 1 2 3
//   return n
// }