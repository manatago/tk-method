const resizeBg =() =>{
    let lis = document.querySelectorAll('.trigolist>ul>li');
    if(window.innerWidth>768){
        lis.forEach(function(li){
            let liWidth = li.getBoundingClientRect().width;
            let bgHeight = liWidth / 1.4;
            li.style.backgroundSize='100% '+bgHeight+'px';
            li.style.paddingTop=bgHeight+'px';
            li.querySelectorAll('p').forEach(function(p){p.style.paddingLeft=0;p.style.paddingRight=0;});
        });
    }else if(window.innerWidth>567){
        let liodd = document.querySelectorAll('.trigolist>ul>li:nth-child(odd)');
        let lieven = document.querySelectorAll('.trigolist>ul>li:nth-child(even)');
        lis.forEach(function(li){
            li.style.backgroundSize='50% 100%';
        });
        liodd.forEach(function(li){
            li.style.backgroundPosition='right';
            li.querySelectorAll('p').forEach(function(p){ p.style.paddingRight='50%';});
        });
        lieven.forEach(function(li){
            li.style.backgroundPosition='left';
            li.querySelectorAll('p').forEach(function(p){ p.style.paddingLeft='50%';});
        });
    }
}

window.addEventListener('load',resizeBg);
window.addEventListener('resize',resizeBg);