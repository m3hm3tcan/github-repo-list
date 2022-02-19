export const GET_CURRENT_USER_QUERY = () => {
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

export const GET_USER_REPO_QUERY = (userName, cursor) => {

  const query = `
 {
    user(login: "${userName}" ) {
      login
      repositories(${cursor}) {
        nodes {
          name
          url
          isFork
          description
          viewerPermission
          issues(states: OPEN) {
            totalCount
          }
          defaultBranchRef {
            name
            target {
              ... on Commit {
                history(first: 1) {
                  edges {
                    node {
                      committedDate
                    }
                  }
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
          hasPreviousPage
          startCursor
        }
      }
    }
  }

  
   `

  return query
}
