import api from "."

export const login = async (email, pwd) => {
    const ret = await api.post("login", {email: email, password: pwd})
    return ret.data
}

export const logout = async () => {
    const ret = await api.put("logout");
    return ret.data
}

export const fetchMe = async () => {
    const ret = await api.get("me");
    return ret.data
}

export const create = async (email, pwd, confirmation) => {
    const ret = await api.post("login", {email: email, password: pwd, password_confirmation: confirmation});

    return ret.data
}
