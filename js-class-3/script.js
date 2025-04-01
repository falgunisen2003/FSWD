// ----------------------------DOM--------------------------------
// getElementbyId(),
// grtElementsByclass(),
// getelementsbyTagname(),
// QuerySelector(),

// -------change the color bg and text---------------
// let h1 = document.getElementById('container-h1');
// h1.style.backgroundColor= 'blue';
// // let btn = document.getElementById('button');
// function changeColor(){
//     h1.style.backgroundColor= 'yellow';
//     h1.style.color='red';
// }


// let container = document.getElementsByClassName('container')[0];
// let containerH2=document.createElement('h2');
// containerH2.innerText="learn coding!";
// containerH2.className="container-h2";
// container.appendChild(containerH2);
// containerH2.style.backgroundColor='green';
// containerH2.style.cursor='pointer';




















// let h1 = document.getElementById('container-h1');

// h1.style.backgroundColor = 'blue';

// let container = document.getElementsByClassName('container')[0];

// // let containerH2 = document.createElement('h2');
// // containerH2.innerText = "Learn Coding!";
// // containerH2.className = "container-h2";
// // containerH2.id = "container-id";
// // container.appendChild(containerH2);

// // containerH2.style.cursor = "pointer";





// // let btn = document.getElementById('button');

// // function changeColor(){
// //     h1.style.color = 'blue';
// //     h1.style.backgroundColor = 'aquamarine';
// // }

// // let state = false;

// // function alertMe(){
// //     state = !state;

// //     if(state){
// //         h1.style.color = 'blue';
// //         h1.style.backgroundColor = 'aquamarine';
// //     }
// //     else{
// //         h1.style.color = 'black';
// //         h1.style.backgroundColor = 'blue';
// //     }

// // }


// function changeColorToPink(){
//     document.getElementById('box-1').style.backgroundColor = "pink"
// }
// function changeColorToOrange(){
//     document.getElementById('box-2').style.backgroundColor = "orange"



// }
// function changeColorToGreen(){
//     document.getElementById('box-3').style.backgroundColor = "green"



// }
// function changeColorToBlue(){
//     document.getElementById('box-4').style.backgroundColor = "blue"



// }
// function changeColorToRed(){
//     document.getElementById('box-5').style.backgroundColor = "red"



// }
// function changeColorToYellow(){
//     document.getElementById('box-6').style.backgroundColor = "yellow"



// }

// function callBackFn(){
//     console.log("I am a call back function");
    
// }

// setTimeout(callBackFn, 3000);

// console.log("Hello")


// setInterval(callBackFn, 3000)


// setTimeout(()=>{
//     console.log("Good Morning!");
// }, 4000)

// // setInterval(() => {
//     console.log("Very Good Morning");
// }, 2000);


// -------------------example 1--------------------------
// function callMe(b){
//     let a=20;
//     let func=()=>{
//         console.log(a+b);
        
//     }
// b++;
// a++;
// func();

// }
// let a=3;
// callMe(a+2);

// ----------------example 2---------------------------
// function callMe(b){
//     let a=20;
//     let func=()=>{
//         console.log(a+b);
        
//     }
// setTimeout(func,3000);
// b++;
// a++;


// }
// let a=3;
// callMe(a+2);

    //    orrrrrrrrrrrrrr

    // function callMe(b){
    //     let a=20;
        
    // setTimeout(()=>{
        
    //         console.log(a+b);
            
    //     },3000)
    
    // b++;
    // a++;
    
    
    // }
    // let a=3;
    // callMe(a+2);

    // -------------example 3--------------------
    // function callMe(b){
    //     let a=20;
    //     let func=()=>{
    //         console.log("3");
    //         console.log(a+b);
            
            
    //     }
    //     console.log("1");
    //     b++;
    //     console.log("2");
    //     setTimeout(func,3000);
    //     console.log("4");
    //     a++;
    // }
    // let a=3;
    // callMe(a+2);

    // -------------example 4-----------------
    // console.log("0");
    // queueMicrotask(()=>{
    //     console.log("1");
        
    // })
    // console.log("2");

    // 0rrrrrrrrrrrrrrrrrrrr

    // console.log("0");

    // setTimeout(()=>{
    //     console.log(4);
        
    // },0);
    // queueMicrotask(()=>{
    //     console.log("1");
        
    // })
    // console.log("2");

    // // ------promise object create-----------------------------
    
    // let p=new Object(); //create object

    // class Prom{

//     constructor(executor){
//         executor(a, b)
//     }

//     let executor = (a, b)=>{
//         if(){
//             a()
//         }
//         {
//             b()
//         }
//     }

//     a {

//     }

//     b {

//     }
// };


// let p1 = new Promise((resolve, reject)=>{
//     //  setTimeout(()=>{
//     //     resolve();
//     //  },4000)

//     setTimeout(()=>{
//         reject();
//     }, 4000)
// });

// console.log(p1);

// function successCallBack(){
//     console.log("Success");
// }
// function successCallBack1(){
//     console.log("Successsss1111");
// }
// function successCallBack2(){
//     console.log("Successsss2222");
// }

// function errorCallBack(){
//     console.log("Errorrrrrr");
// }
// function errorCallBack1(){
//     console.log("Errorrrrr1111");
// }
// function errorCallBack2(){
//     console.log("Errorrrrr2222");
// }

// p1.then(successCallBack).then(successCallBack1).then(successCallBack2);
// p1.catch(errorCallBack).then(errorCallBack1).then(errorCallBack2);

// let errProm = p1.catch(errorCallBack);
// let errProm2 = errProm.then(errorCallBack1);
// errProm2.then(errorCallBack2);


// .then() & .catch()

// GET https://api.postalpincode.in/pincode/{PINCODE}

// let prom1 = fetch("https://api.postalpincode.in/pincode/713405");

// prom1.then((response)=> response.json()).then(data=>console.log(data));




const PINCODE = "713405"

async function getData(pin){
    let p1 = await fetch(`https://api.postalpincode.in/pincode/${PINCODE}`);

    let p2 = await p1.json();

    let arr = p2[0].PostOffice;

    arr.forEach(element => {
        console.log(element.Name + " ===> " + element.District)
    });

}

getData(PINCODE);