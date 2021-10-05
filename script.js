        const ANIMATE_CLASS = 'animated';
        const Elements = document.querySelectorAll('.HOVER');

        Elements.forEach((ele, idx) => {
            
            let addAnimation = false;
            
            if (ele.classList[1] == 'FLASH') {
                ele.addEventListener('animationend', e => {
                    ele.classList.remove(ANIMATE_CLASS);
                })
                addAnimation = true;
            }

            ele.addEventListener('mouseover', (e) => {

                const sp = ele.querySelector('span');
                ele.classList.add(ANIMATE_CLASS);
                let x = e.clientX - ele.offsetLeft;
                let y = e.clientY - ele.offsetTop;
                sp.style.top = y + 'px';
                sp.style.left = x + 'px';
            });
        })