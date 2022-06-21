class find {
    constructor(query) {
        this.queryArr = [];
        for (const iterator of this.map.values()) {
            this.validator = true;
            if (iterator.country !== query.country) {
                this.validator = false;
            } if (query.age.hasOwnProperty('min')) {
                if (query.age.min > iterator.age) {
                    this.validator = false;
                }
            } if (query.age.hasOwnProperty('max')) {
                if (query.age.max < iterator.age) {
                    this.validator = false;
                }
            } if (query.salary.hasOwnProperty('min')) {
                if (query.salary.min > iterator.salary) {
                    this.validator = false;
                }
            } if (query.salary.hasOwnProperty('max')) {
                if (query.salary.max < iterator.salary) {
                    this.validator = false;
                }
            }
            if (this.validator === true) {
                this.queryArr.push(iterator);
            }
        }
        return this.queryArr;
    }
}