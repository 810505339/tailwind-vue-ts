import server from "@/api/server";


const bannerApi = () => server.get('/banner')


export {
    bannerApi
}