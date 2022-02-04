const searchInput = document.querySelector('#search-input')
const products = document.querySelector('.products')

const listProduct = []

async function getData() {
    let apiUrl = 'https://fakestoreapi.com/products'

    const loading = document.createElement('div')
    loading.innerHTML = `
        <div>
            <h3>Loading...</h3>
        </div>`

    products.appendChild(loading)

    let data = await fetch(apiUrl).then(res => res.json())

    //clean...
    products.innerHTML = ""

    //console.log(data)
    data.forEach(product => {
        const div = document.createElement('div')
        div.setAttribute('class', 'product')
        listProduct.push(div)

        div.innerHTML = `
            <img src="${product.image}" alt="">
            <div class="product-detail">
                <h4>${product.title.slice(0, 30)}</h4>
                <p>$${product.price}</p>
            </div>`

        products.appendChild(div)
    });
}

function searchProduct(input) {
    listProduct.forEach(product => {
        if (product.innerText.toLowerCase().includes(input.toLowerCase())) {
            product.classList.remove('hide')
        } else {
            product.classList.add('hide')
        }
    });
}

getData()

searchInput.addEventListener('input', (e) => searchProduct(e.target.value))