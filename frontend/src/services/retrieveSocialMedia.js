import axios from "axios"

const getYoutubeUrls = async () => {
    const response = await axios.get("http://localhost:3001/api/Youtube")   
    const urlsJSON = await response.data

    return urlsJSON
}

const getSpotifyUrls = async () => {
    const response = await axios.get("http://localhost:3001/api/Spotify")
    console.log(response.data)
}

const getInstagramUrls = async () => {
    const response = await axios.get("http://localhost:3001/api/Instagram")
    return response.json
    console.log(response)
}


const getFacebookUrls = async () => {
    const response = await axios.get("http://localhost:3001/api/Facebook")
    console.log(response.data)
}


export default { getYoutubeUrls, getSpotifyUrls, getInstagramUrls, getFacebookUrls }