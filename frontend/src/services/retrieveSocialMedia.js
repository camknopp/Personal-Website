import axios from "axios"

const getYoutubeUrls = async () => {
    const response = await axios.get("/api/Youtube")
    console.log(response.data)
}


export default { getYoutubeUrls }