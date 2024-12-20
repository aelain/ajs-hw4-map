export default class ErrorRepository {
    constructor() {
        this.list = new Map();
    }

    translate(code) {
        if (this.list.has(code)) {
            return this.list.get(code);
        }
        return 'Unknown error';
    }
}
