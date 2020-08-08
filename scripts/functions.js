export function sendRequest(url, method = 'GET', data) {
    let settings = {
        method: method,
        body: JSON.stringify(data),
    }
    if(method === 'POST'){
        settings.headers = {'Content-type': 'application/json;'}
     }
    return fetch(url, settings).then( response => {
        if(response.ok){
            return response.json()
        }
        return response.json().then(err => {
            let e = new Error('Something words')
            e.data = err
            throw e
        })
    })
}

export function toParse(data){
    data.forEach(elem => {
        let div = document.createElement('div')
        div.classList.add('col-md-12', 'm-2', 'postCards')
        let header = document.createElement('h2')
        header.innerText = `${elem.title}`
        let span = document.createElement('span')
        span.innerText = `${elem.body}`
        let paren = document.querySelector('.posts').appendChild(div)
        paren.append(header)
        paren.append(span)
    });
}


