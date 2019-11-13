import gql from 'graphql-tag'

export const getCars = gql`
query($req: PageRequest!, $companies: [String!], $sort: PriceSort!) {
    cars: getCars(req: $req, companies: $companies, sort: $sort) {
      page
      totalPages
      totalItems
      items {
        id
        name
        imageUrl
        seats
        doors
        carTypeForWeb
        airco
        transmission
        bigSuitcases
        price {
          total
          currency
        }
        supplier {
          id
          name
          rating
        }
      }
    }
  }
`