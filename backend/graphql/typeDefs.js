const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Car {
        id: ID!
        name: String!
        imageUrl: String
        seats: Int
        doors: String
        carTypeForWeb: [String]
        transmission: Int
        airco: Boolean
        bigSuitcases: Int
        price: Price!
        supplier: Supplier!
    }

    type Price {
        total: Float!
        currency: String!
    }

    type Supplier {
        id: ID!
        name: String!
        logo: String
        rating: Float!
    }

    enum PriceSort {
        ASC,
        DESC
    }

    input PageRequest {
    offset: Int!
    limit: Int!
    }
    
    type CarPage {
        page: Int!
        totalPages: Int!
        totalItems: Int!
        items: [Car!]!
    }

    type Query {
        getCars(req: PageRequest!, companies: [String!], sort: PriceSort!): CarPage!
        suppliers: [Supplier!]!
    }
`;

module.exports = typeDefs 