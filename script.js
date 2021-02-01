// bring in what we need from html 
 
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
// Since morethn one class it will bring them all using query selctor 
// . as it is a class
const circles = document.querySelectorAll('.circle')


//  This index represents which one is active 
 let currentActive = 1 

//  This is for next button 
next.addEventListener('click', ()=>{
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    // console.log(currentActive);
    // call a function 
    update()
})

// This is for the back button 
prev.addEventListener('click', ()=>{
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }
    update()
    // console.log(currentActive);
})

// lets create a  update funcation to update the dom

function update(){
    circles.forEach((circle, index )=>{
        // This if statement allows us to move active in each circle
         if (index < currentActive){
             circle.classList.add('active')
         }else{
             circle.classList.remove('active')
         }
    })
    const actives = document.querySelectorAll('.active')
    // This is gives us position in relative to circles 
    // console.log(actives.length, circles.length);
    // This is gives us as a percentage 
    // console.log((actives.length/circles.length)*100);
    // Lets styles this 
    // Reason for - 1 is so we don not exceed it
    progress.style.width = ((actives.length - 1 )/(circles.length - 1)*100 + '%');
    if(currentActive===1){
        prev.disabled = true
        // check if it is at the end checks against length 
     } else if (currentActive === circles.length){
        next.disabled = true
     }else {
        // This means we are in the middle  
        prev.disabled = false
         
         next.disabled = false
     }
}

