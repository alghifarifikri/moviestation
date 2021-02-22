import axios from "axios"

const requestApi = async (e, url, page) => {
    try {
        const params = e
        let urls
        if (page !== null) {
            urls = url.concat(page ? `&page=${page}` : '').concat(params ? `&s=${params}` : '')
            console.log("masuk if", urls, page)
        } else {
            urls = url + `${params}`;
            console.log("masuk else", urls, page)
        }
        const response = await axios.get(urls)
        if (response.status === 200) {
            const data = response.data
            return (data)
        } else {
            const error = 'Failed to get data'
            return error
        }
    } catch (e) {
        console.error("this is error fetch", e)
    }
}

export default requestApi