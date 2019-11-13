const resolvers = {
    Query : {
        getCars: async (_, {req, companies, sort = 'ASC'}, {dataSources}) => {
            try {
                const cars = (await dataSources.bookingAPI.getCars())
                .sort((a, b) => sort === 'ASC' ? a.price.total - b.price.total : b.price.total - a.price.total)
                .filter(company => !companies || companies.length === 0 || companies.map(company => company.trim().toLowerCase()).indexOf(company.supplier.name.toLowerCase().trim()) > -1)
                return {
                    page: Math.ceil(req.offset / req.limit) + 1,
                    totalPages: Math.ceil(cars.length / req.limit) + 1,
                    totalItems: cars.length,
                    items: cars.slice(req.offset, req.offset + req.limit)
                }
            } catch (error) { throw error }
        },
        suppliers: (_, args, { dataSources }) => dataSources.bookingAPI.getSuppliers()
    }
}

module.exports = resolvers