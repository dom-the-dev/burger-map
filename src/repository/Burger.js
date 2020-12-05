export default class Burger {
    constructor(burger) {
        this.id = burger.id;
        this.name = burger.name;
        this.restaurant = burger.restaurant;
        this.description = burger.description;
        this.website = burger.web;
        this.ingredients = burger.ingredients;
        this.addresses = burger.addresses;
        this.long = null;
        this.lat = null;
    }

    getId() {
        return this.id;
    }

    getWeb() {
        return this.website;
    }

    getRestaurant() {
        return this.restaurant;
    }

    getIngredientsString() {
        return this.ingredients.join(', ')
    }

    getDescription() {
        return this.description;
    }
    // getWebsite() {
    //     return this.website;
    // }

    getIngredients() {
        return this.ingredients
    }

    getName() {
        return this.name;
    }

    getLine1() {
        return this.addresses[0].line1 ? this.addresses[0].line1 : '';
    }

    getLine2() {
        return this.addresses[0].line2 ? this.addresses[0].line2 : '';
    }

    getNumber() {
        return this.addresses[0].number ? this.addresses[0].number : '';
    }

    getPostCode() {
        return this.addresses[0].postCode ? this.addresses[0].postCode : '';
    }

    getCountry() {
        return this.addresses[0].country ? this.addresses[0].country : '';
    }

    getLat() {
        return this.lat;
    }

    getLong() {
        return this.long;
    }

    setCoordinates(long, lat) {
        this.long = long;
        this.lat = lat;
    }
}