import api  from "./index"
export const fetchMessages = async (channelId) => {
    const response = await api.get(`${process.env.REACT_APP_API_MESSAGES}/message?channel=${channelId}`)
    return response.data;
}

export const createMessage = async (message, channelId, from) => {
    const response = await api.post(`${process.env.REACT_APP_API_MESSAGES}/message`, {
        "from": from,
        "channel": channelId,
        "message": message
    })
    return response.data;
}