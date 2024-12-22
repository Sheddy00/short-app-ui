document.addEventListener('DOMContentLoaded', function() {
    var yesButtons = document.querySelectorAll('.yes');
    var noButtons = document.querySelectorAll('.no');
    var happy = document.querySelectorAll('.click');
    var send = document.querySelectorAll('.send');
    var free = document.querySelector('.free-date');
    var proposal = document.querySelector('.proposal');
    var exited = document.querySelector('.exited');
    var next = document.querySelectorAll('.next');
    var nice = document.querySelectorAll('.nice');

    yesButtons.forEach(button => {
        button.addEventListener('click', () => {
            var acceuil = document.querySelector('.acceuil');
            var great = document.querySelector('.great');
            
            setTimeout(() => {
                acceuil.style.display = 'none';
                great.style.display = 'block';
            }, 500)
            
        });
    });

    noButtons.forEach(button => {
        button.addEventListener('click', () => {
            var acceuil = document.querySelector('.acceuil');
            var sad = document.querySelector('.sad');
            var ok = document.querySelector('.understanding');
            
            setTimeout(() => {
                acceuil.style.display = 'none';
                sad.style.display = 'block';
                setTimeout(() => {
                    sad.style.display = 'none';
                    ok.style.display = 'block';
                }, 8000);
            }, 1000);
        });
    });

    happy.forEach(button => {
        button.addEventListener('click', () => {
            var great = document.querySelector('.great');
            
            setTimeout(() => {
                free.style.display = 'block';
                great.style.display = 'none';
            }, 500)
        });
    });

    send.forEach(button => {
        button.addEventListener('click', () => {
            setTimeout(() => {
                free.style.display = 'none';
                proposal.style.display = 'block';
            }, 500);
        });
    });

    next.forEach(button => {
        button.addEventListener('click', () => {
            setTimeout(() => {
                proposal.style.display = 'none';
                exited.style.display = 'block';
            }, 500);
        });
    });

    nice.forEach(button => {
        button.addEventListener('click', () => {
            var end = document.querySelector('.end');
            setTimeout(() => {
                exited.style.display = 'none';
                setTimeout(() => {
                    end.style.display = 'block';
                }, 500);
            }, 500);
        });
    });

    // heart mousemove event
    document.addEventListener('mousemove', function (e) {
        let body = document.querySelector('body');
        let heart = document.createElement('span');
        let x = e.offsetX;
        let y = e.offsetY;
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';

        let size = Math.random() * 30;
        heart.style.width = 20 + size + 'px';
        heart.style.height = 20 + size + 'px';

        let transformValue = Math.random() * 360;
        heart.style.transform = 'rotate('+ transformValue +'deg)';


        body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 3000)
    });

    var percent = document.querySelector('.percent');
    var load = document.querySelector('.loading');
    var progress = document.querySelector('.progress');
    var hi = document.querySelector('.container2');
    var D = document.querySelector('.container');
    var count = 4;
    var per = 16;
    var loading = setInterval(animate, 100);
    function animate() {
        if (count == 100 && per == 400) {
            clearInterval(loading);
        } else {
            per = per + 4;
            count++;
            progress.style.width = per + 'px';
            percent.textContent = count + '%';
        }
    }
    setTimeout(() => {
        load.style.display = 'none';
        hi.style.display = 'block';
        setTimeout(() => {
            hi.style.display = 'none';
            D.style.display = 'block'
            setTimeout(() => {
                D.style.display = 'none';
                window.location.href = '/pages/acceuil.html';
            }, 8000);
        }, 2000);
    }, 10500);
}) 

document.addEventListener('DOMContentLoaded', () => {
    //remind select date
    var sendDate = document.getElementById('send-date');
    sendDate.addEventListener('click', () => {
        var date = document.getElementById('date');
        var time = document.getElementById('time');
        var remind = document.getElementById('remind');
        const text = `Don't forget on ${date.value} at ${time.value} !!`
        remind.textContent = text;
    });
});