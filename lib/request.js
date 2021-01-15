export class Request {
    constructor(url, options) {
        this.options = options || {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }

    async post(url, data) {
        let options = Object.assign({}, this.options, {
            body: JSON.stringify(data),
            method: 'POST'
        })

        const response = await fetch(url, options);

        return response.json();
    }

    async get(url) {
        let options = Object.assign({}, this.options, {
            method: 'GET'
        })
        const response = await fetch(url, options);

        return response.json();
    }

    async update(url, data, id) {
        let options = Object.assign({}, this.options, {
            method: 'PUT',
            body: JSON.stringify(data)
        })
        const response = await fetch(`${url}/${id}`, options);

        return response.json();
    }

    async delete(url, id) {
        let options = Object.assign({}, this.options, {
            method: 'DELETE'
        })
        const response = await fetch(this.url + `${url}/${id}`, options);

        return response.json();
    }
}


export default new Request();