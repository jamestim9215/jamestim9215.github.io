import { ref,nextTick, } from 'vue'

const hideLoading = () => {
    nextTick(() => {
        const imagesToPreload = []
        const imgs = document.querySelectorAll("img")
        for(var item=0; item< imgs.length; item++) {
            imagesToPreload.push(imgs[item].src)
        }

        const images = imagesToPreload.map(imageSrc => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = imageSrc;
                img.onload = resolve;
                img.onerror = reject;
            });
        });

        Promise.all(images).then(() => {
            console.log("Images loaded!");
            document.getElementById("loading-cover").classList.add('close');
            setTimeout(() => {
                document.getElementById("loading-cover").style.display = 'none'
            }, 300)
        }).catch(error => {
            console.error("Some image(s) failed loading!");
            console.error(error.message)
        });
    })
}

const showLoading = () => {
    document.getElementById("loading-cover").style.display = 'inline'
    document.getElementById("loading-cover").classList.add('close');
}

export { showLoading, hideLoading }