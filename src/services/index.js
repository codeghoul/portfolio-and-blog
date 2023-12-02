import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getAllBlogs = async () => {
  const query = gql`
    query AllBlogs {
      posts {
        id
        createdAt
        slug
        title
        excerpt
        tags
        categories {
          name
        }
      }
      postsConnection {
        aggregate {
          count
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)
  return result.posts
}

export const getCategoryBlogs = async (category) => {
  const query = gql`
    query CategoryBlogs($category: String!) {
      posts(where: { categories_some: { slug: $category } }) {
        id
        createdAt
        slug
        title
        excerpt
        tags
        categories {
          name
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { category })
  return result.posts
}

export const getRecentBlogs = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_DESC
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

export const getSimilarBlogs = async (categories, slug) => {
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
        id
        name
        slug
        post {
          id
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.categories
}

export const getBlogDetails = async (slug) => {
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
          raw
        }
        categories {
          ... on Category {
            name
            slug
          }
        }
        markdown
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug })

  return result.post
}

export const getAdjacentBlogs = async (createdAt, slug) => {
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
      projects(orderBy: createdAt_DESC) {
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

export const getAllTrips = async () => {
  const query = gql`
    query GetAllTrips {
      jsonTrips {
        trips
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.jsonTrips[0].trips
}
