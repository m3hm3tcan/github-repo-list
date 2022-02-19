export const GET_CURRENT_USER_QUERY = () =>{
    return `
        {
            viewer {
                name,
                id,
                login
            }
        }
    `
}

export const GET_USER_REPO_QUERY = (userName) => {

    const query = `
        {
            user(login:"${userName}") {
                id
                repositories(first:5, after:null){
                    nodes {
                        name
                        url
                        isFork
                        description
                        viewerPermission
                        issues(states:OPEN){
                            totalCount
                        }
                    }
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                }
            }
        }
    `

    return query
  }
