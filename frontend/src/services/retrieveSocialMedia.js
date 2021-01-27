import axios from "axios"

export const getYoutubeUrls = async () => {
    const response = await axios.get("http://localhost:3001/api/Youtube")
    console.log(response.data)
}

export const getSpotifyUrls = async () => {
    const response = await axios.get("http://localhost:3001/api/Spotify")
    console.log(response.data)
}

export const getInstagramUrls = async () => {
    const response = await axios.get("http://localhost:3001/api/Instagram")
    return response.json
    console.log(response)
}



export const getFacebookUrls = async () => {
    const response = await axios.get("http://localhost:3001/api/Facebook")
    console.log(response.data)
}

