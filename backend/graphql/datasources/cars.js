const { RESTDataSource } = require('apollo-datasource-rest')

class bookingAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://sampledata.bookinggroup.com/';
        this.path = 'carlist.json';
    }

    async getCars() {
        try {
            const data = await this.get(this.path, null)
            return data.cars.map(obj => ({
                id: obj.car.id,
                name: obj.car.name,
                imageUrl: obj.car.imageUrl,
                seats: obj.car.seats,
                transmission: obj.car.transmission,
                carTypeForWeb: obj.car.carTypeForWeb,
                doors: obj.car.doors,
                airco: obj.car.airco,
                bigSuitcases: obj.car.bigSuitcases,
                price: {
                    total: obj.price.total,
                    currency: obj.price.currency
                },
                supplier: {
                    id: obj.supplier.id,
                    name: obj.supplier.name,
                    rating: obj.supplier.rating
                }
            }))
        } catch (err) { throw err }
    }

    async getSuppliers() {
        try {
            const data = await this.get(this.path, null)
            return data.suppliers.map( o => ({
                id: o.id,
                logo: o.logo,
                name: o.name,
                rating: o.rating
            }))
        } catch (err) { throw err }
    }

}

module.exports = bookingAPI