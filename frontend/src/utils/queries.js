import { gql } from "@apollo/client";

//GraphQL query to fetch all the blogs from the backend
export const CATEGORIES = gql`
  {
    categories(sort: "name:asc") {
      data {
        id
        attributes {
          name
          icon {
            data {
              attributes {
                url
              }
            }
          }
          articles {
            data {
              id
              attributes {
                title
              }
            }
          }
        }
      }
    }
  }
`;

export const CATEGORY = gql`
  query Category($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          name
          icon {
            data {
              attributes {
                url
              }
            }
          }
          articles {
            data {
              id
              attributes {
                title
              }
            }
          }
        }
      }
    }
  }
`;

export const ARTICLES = gql`
  query Articles(
    $sort: [String]
    $search: String!
    $categoryId: ID!
  ) {
    articles(
      sort: $sort
      filters: {
        content: { contains: $search }
      }
    ) {
      data {
        id
        attributes {
          title
          content
          releasedAt
          categories {
            data {
              id
              attributes {
                name
                icon {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const ARTICLE = gql`
  query Article($id: ID!) {
    article(id: $id) {
      data {
        id
        attributes {
          title
          content
          releasedAt
          categories {
            data {
              id
              attributes {
                name
                
              }
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
          users_permissions_user {
            data {
              attributes {
                username
                email
              }
            }
          }
        }
      }
    }
  }
`;

export const HOMEPAGE = gql`
  {
    homepage {
      data {
        id
        attributes {
              info
              link
            }
          }
        }
      }
`;

export const HEADER = gql`
  {
    header {
      data {
        attributes {
          title
          motto
        }
      }
    }
  }
`;

