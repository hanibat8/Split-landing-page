const section=document.querySelectorAll('.section');
const container=document.querySelector('.container');

//Hover
container.addEventListener('mouseover',function(e){
    if(e.target.closest('section')){
        section.forEach(function(sect){
            if( sect.classList.contains('expand-section')){
                sect.classList.remove('expand-section');
            }
        });

        e.target.closest('section').classList.toggle('expand-section');
    }
});

//Click
container.addEventListener('click',function(e){
    if(e.target.closest('section')){
        section.forEach(function(sect){
            if( sect.classList.contains('expand-section')){
                sect.classList.remove('expand-section');
            }
        });

        e.target.closest('section').classList.toggle('expand-section');
    }
});

