var clickBox = () => {
    document.getElementById('game-box').classList.add('shake');
    setTimeout(()=>{
        document.getElementById('game-box').classList.remove('shake');
        document.getElementById('box-case').classList.add('openbox');
        document.getElementById('card').classList.add('opencard');
        document.getElementById('cover').classList.add('show');
        document.getElementById('somepaper').classList.add('active');
        setTimeout(()=>{
            
            document.getElementById('cover').classList.add('active');
            document.getElementById('box-case').classList.add('active');
            document.getElementById('card').classList.add('active');
            document.getElementById('restart-btn').classList.add('active');
        }, 600);
    },1000)
}

var clickBtn = () => {
    document.getElementById('cover').classList.remove('active');
    document.getElementById('box-case').classList.remove('active');
    document.getElementById('card').classList.remove('active');
    document.getElementById('restart-btn').classList.remove('active');
    document.getElementById('box-case').classList.remove('openbox');
    document.getElementById('card').classList.remove('opencard');
    document.getElementById('cover').classList.remove('show');
    document.getElementById('somepaper').classList.remove('active');
}