//funzione che mi estrapoli il getmarkup da inserire
function getMarkup(arr) {
    let markup = '';
    for (let i = 0; i < arr.length; i++) {
        const {name, role, email, img} = arr[i];
        markup += `
        <div class="col-md-6 col-xl-4 gy-3" >
            <div class="card bg-black rounded-0 border-0 text-white">
                <div class="row">
                    <img src="./${img}" alt="" class="col-sm-6 col-md-4 img-fluid">
                    <div class="col-sm-6 col-md-8 p-md-3 p-4">
                        <h2 class="h5 fw-bolder">${name}</h2>
                        <p class="h6 fw-normal">${role}</p>
                        <a href="#" class="text-decoration-none">${email}</a>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    return markup
}

//funzione per inserire addmarkup
function addMarkup(string, node) {
    node.innerHTML = string;
    console.log(node, string)
}