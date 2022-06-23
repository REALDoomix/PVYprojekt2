import {  gql } from '@apollo/client'

//GraphQL query to fetch all the blogs from the backend
export const UPDATE_LIKES = gql`
mutation updateLike($id: ID!, $like: Int!) {
    updateArticle(id: $id, data: { likes: $like }) 
    {
      data {
        id
        attributes {
          likes
        }
      }
    }
  }
`

export const UPDATE_DISLIKES = gql`
mutation updateDislike($id: ID!, $dislike: Int!) {
    updateArticle(id: $id, data: { dislikes: $dislike }) 
    {
      data {
        id
        attributes {
          dislikes
        }
      }
    }
  }
`