const blueBox=document.querySelector(".blueBox"); //宣告變數

//to from from to不能共用

//to
// gsap.to(blueBox,{
//     opacity: 0, //透明
//     x: 500, //位移X軸多少距離
//     y: 500, //位移Y軸多少距離
//     duration: 3, //持續幾秒動畫
//     rotate: 180,
//     backgroundColor: "red",
//     ease: "bounce.in", //表示移動速率（不會等速）
// })

//form
// gsap.from(blueBox,{
//     opacity: 0, //透明
//     x: 500, //位移X軸多少距離
//     y: 500, //位移Y軸多少距離
//     duration: 3, //持續幾秒動畫
//     rotate: 180,
//     backgroundColor: "red",
//     ease: "bounce.in", //表示移動速率（不會等速）
// })

//from to
gsap.fromTo(blueBox,{
    opacity: 0,
    x: 0,
    y: 0,
    duration: 3,
    rotste: 0,
    backgroundColor: "yellow",
},{
    opacity: 1,
    x: 300,
    y: 300,
    duration: 3,
    rotate: 180,
    backgroundColor: "pink",
})