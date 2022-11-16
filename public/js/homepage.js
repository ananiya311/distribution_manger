const test = document.querySelectorAll('.header2')

const observer = new IntersectionObserver((ob)=>{
    ob.forEach(en=>{
        if(en.isIntersecting){
            en.target.style.animationName = "tra"
        }else{
            en.target.classList.remove('test')
        }
    })
})

test.forEach((re)=>observer.observe(re))


const testScroll = ()=>{
    window.scrollTo(0,0)
}
