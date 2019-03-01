var n=0
var code=document.getElementById('code')
var styleTag=document.querySelector('#styleTag')
// var styleTag=document.getElementById('styleTag')
console.log(styleTag)
// var id=setInterval(() => {
//     n=n+1
//     code.innerHTML=result.substring(0,n)
//     styleTag.innerHTML=result.substring(0,n)

//     if(n>=result.length){
//         window.clearInterval(id)
//     }

    
// }, 0);
var duration=0
setTimeout(function fn(){
    code.innerHTML=result.substring(0,n)
    styleTag.innerHTML=result.substring(0,n)
    code.scrollTop=code.scrollHeight
    console.log(code.scrollHeight, code.scrollTop)

    if(n<result.length){
        setTimeout(fn,duration)
    }
    n=n+1


},duration)

var buttons=document.querySelectorAll('.buttons>ul>li')

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(e){
        
        let id=e.currentTarget.querySelector('input').getAttribute("id")
        console.log(e.currentTarget,id)
        switch(id)
        {
        case 'slow':
        duration=100
        break;
        case 'middle':
        duration=50
        break;
        case 'fast':
        duration=0
        break;
        }
    })

    
}








var result=`
.nose{
    position: absolute;
    left: 50%;
    top: 240px;
    border: 15px solid ;
    margin-left: -15px;
    border-radius: 50%;
    border-color: black transparent transparent transparent;
}
.eye{
    height: 64px;
    width: 64px;
    background-color: #2E2E2E;
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
    top: 205px;
    
}
.eye::after{
    content: '';
    height: 32px;
    width: 32px;
    background-color: white;
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
    top: 2px;
    left: 4px
}
.eye.left{
    left: 35%;
}
.eye.right{ 
    right: 35%;
}
.face{
    height: 90px;
    width: 90px;
    background-color: #F20000;
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
    top: 330px;
}
.face.left{
    left: 28%;
}
.face.right{ 
    right: 28%;
}


.upper_lip{
    position: absolute;
    top: 275px;
    width: 80px;
    height: 25px;
    border: 3px solid black;
    z-index: 1;
    background-color: #FFE600;



}
.upper_lip.left{
    left: 316px;
    transform:rotate(-25deg);
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 60px 30px;
}
.upper_lip.right{
    right: 316px;
    transform:rotate(25deg);
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 60px 30px;
}
.tongue_wapper{
    position: absolute;
    left: 50%;
    top: 282px;
    display: block;
    content: '';
    height: 200px;
    width: 220px;
    margin-left: -110px;
    overflow: hidden;
}
.tongue{
    height: 450px;
    width: 120px;
    background-color: #9B000A;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -60px;
    border-radius: 90px/250px;
    overflow: hidden;
}
.tongue::after{
    content: '';
    display: block;
    height: 190px;
    width:150px;
    border-radius: 50%;
    background-color: #FF485F;
    position: absolute;
    left: 50%;
    bottom: -20px;
    margin-left: -75px;

}`