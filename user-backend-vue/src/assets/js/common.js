const showLoading = () => {
    let loadingDiv = document.getElementById("loading-div");
    loadingDiv.classList.add("active");
    loadingDiv.classList.add("show");
}

const hideLoading = () => {
    let loadingDiv = document.getElementById("loading-div");
    loadingDiv.classList.remove("show");
    setTimeout(() => {
        loadingDiv.classList.remove("active");
    }, 500);
}

export {
    showLoading,
    hideLoading
}