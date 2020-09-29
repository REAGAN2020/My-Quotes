export class Quotess {
    showDetails: boolean
    constructor(public quote: String, public author: String, public publisher: String, public submitDate: Date) {
        this.showDetails = false;
    }
}