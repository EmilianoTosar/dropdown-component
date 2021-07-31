document.querySelectorAll('.title').forEach(item => {
  item.addEventListener('click', () => {
    let accCollapse = item.nextElementSibling;
    console.log('click')

    if(item.classList.contains('collapsing')) {
      if(!item.classList.contains('open')) {
        console.log('toggle accordion btn')
  
        accCollapse.style.display = 'block';
        let accHeight = accCollapse.clientHeight;
        console.log(accHeight)
  
        setTimeout(() => {
          accCollapse.style.height = `${accHeight}px`;
          accCollapse.style.display = '';
        }, 1)
        
        accCollapse.classList = 'accordion-collapse collapsing';
  
        setTimeout(() => {
          console.log('open accordion content')
          accCollapse.style.height = `${accHeight}px`;
          accCollapse.classList = 'accordion-collapse collapse open';
        }, 300);
  
      } else {
        accCollapse.classList = 'accordion-collapse collapsing';
  
        setTimeout(() => {
          accCollapse.style.height = '0px';
        }, 1)
  
        setTimeout(() => {
          console.log('close accordion content')
          accCollapse.classList = 'accordion-collapse collapse';
          accCollapse.style.height = '';
        }, 300);
      }
  
      item.classList.toggle('open');
    }

  })
})

