import axios from 'axios'
import { GET_USER_REPO_QUERY, GET_CURRENT_USER_QUERY, CREATE_NEW_REPO } from './utils/queries'

const axiosGitHubGrapQL = axios.create({
    baseURL: `https://api.github.com/graphql`,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    }
})


export const getUserRepoList = async (userName,cursor) => {
    return await axiosGitHubGrapQL
        .post('', { query: GET_USER_REPO_QUERY(userName,cursor) })
}

export const getCurrentUser = async () => {
    return await axiosGitHubGrapQL
        .post('', { query: GET_CURRENT_USER_QUERY() })
}

export const createNewRepo = async (ownerId, newRepo) => {
    return await axiosGitHubGrapQL
    .post('', { query: CREATE_NEW_REPO(ownerId, newRepo) })
}