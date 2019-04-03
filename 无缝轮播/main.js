$('.images>img:nth-child(2)').addClass('Xright')
$('.images>img:nth-child(3)').addClass('Xright')

let n=1
setInterval(function(){
  console.log(n)
  $(`.images>img:nth-child( ${x(n)} )`).removeClass('Xcenter').addClass('Xleft')

  $(`.images>img:nth-child( ${x(n+1)} )`).removeClass('Xright').addClass('Xcenter')

  $(`.images>img:nth-child( ${x(n)} )`).one('transitionend',function(e){$(e.currentTarget).removeClass('Xleft').addClass('Xright')})
  n += 1
},n*3000)






function x(n){
  if(n>3){
    n=n%5
    if(n===0){
      n=5
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












































