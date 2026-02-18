//funzione che mi estrapoli il getmarkup da inserire
function getMarkup(arr) {
    let markup = '';
    for (let i = 0; i < arr.length; i++) {
        const {name, role, email, img} = arr[i];
        markup += `
        <div class="col" >
            <div class="card bg-dark rounded-0 border-0 text-white">
                <div class="row">
                    <img src="./${img}" alt="" class="col-4 img-fluid">
                    <div class="col-8">
                        <h2>${name}</h2>
                        <p>${role}</p>
                        <a href="#">${email}</a>
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