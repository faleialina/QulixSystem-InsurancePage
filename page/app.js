function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }


  const toggleBtn=document.querySelector('.toggle-btn')
  let flag=true

  toggleBtn.addEventListener('click',function(){
    const side=document.getElementById('sidebar')
    if(flag===true){
      side.style='right: 20px'
      flag=false
    }else{
      side.style='right: -260px;'
      flag=true
    }
  })