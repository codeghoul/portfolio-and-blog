import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            slug
            title
            coverImage {
              url
              width
              height
            }
            excerpt
            tags
            categories {
              ... on Category {
                name
                slug
              }
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.postsConnection.edges
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        coverImage {
          url
          width
          height
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query)

  return result.posts
}

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        coverImage {
          url
          width
          height
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug, categories })

  return result.posts
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.categories
}

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        coverImage {
          url
          width
          height
        }
        author {
          ... on Author {
            name
            bio
            picture {
              url
            }
          }
        }
        createdAt
        slug
        content {
          html
        }
        categories {
          ... on Category {
            name
            slug
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug })

  return result.post
}

export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!, $slug: String!) {
      next: posts(
        first: 1
        orderBy: createdAt_ASC
        where: { slug_not: $slug, AND: { createdAt_gte: $createdAt } }
      ) {
        title
        coverImage {
          url
        }
        createdAt
        slug
      }
      previous: posts(
        first: 1
        orderBy: createdAt_DESC
        where: { slug_not: $slug, AND: { createdAt_lte: $createdAt } }
      ) {
        title
        coverImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug, createdAt })

  return { next: result.next[0], previous: result.previous[0] }
}

export const getAllProjects = async () => {
  const query = gql`
    query GetAllProjects {
      projects {
        name
        description
        tags
        demo
        sourceCode
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.projects
}

// export const getCategoryPost = async (slug) => {
//   const query = gql`
//     query GetCategoryPost($slug: String!) {
//       postsConnection(where: { categories_some: { slug: $slug } }) {
//         edges {
//           cursor
//           node {
//             author {
//               bio
//               name
//               id
//               photo {
//                 url
//               }
//             }
//             createdAt
//             slug
//             title
//             excerpt
//             featuredImage {
//               url
//             }
//             categories {
//               name
//               slug
//             }
//           }
//         }
//       }
//     }
//   `

//   const result = await request(graphqlAPI, query, { slug })

//   return result.postsConnection.edges
// }