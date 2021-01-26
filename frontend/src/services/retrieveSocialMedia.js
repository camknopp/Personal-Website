import axios from "axios"

export const getYoutubeUrls = async () => {
    const response = await axios.get("http://localhost:3001/api/Youtube")
    console.log(response.data)
}


