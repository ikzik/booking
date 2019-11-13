import gql from 'graphql-tag'

export const getSuppliers = gql`
 query {
    suppliers {
      id
      name
      rating
      logo
    }
  }
`