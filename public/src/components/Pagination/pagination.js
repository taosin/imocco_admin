module.exports = {
    name: 'im-pagination',
    props: {
        currentPage: {
            type: Number,
            default: 1,
            twoWay: true
        },
        limit: {
            type: Number,
            default: 7,
        },
        perPage: {
            type: Number,
            default: 20,
        },
        totalRows: {
            type: Number,
            default: 20,
        }
    },
    replace: true,
    data() {
        return {
            diff: 1,
            showPrev: false,
            showNext: false
        };
    },
    computed: {
        numberOfPages() {
            const result = Math.ceil(this.totalRows / this.perPage);
            return (result < 1) ? 1 : result;
        },
        pageLinks() {
            let result = this.limit;
            if (this.currentPage > this.numberOfPages) {
                this.currentPage = 1;
            }
            this.diff = 1;
            this.showPrev = false;
            this.showNext = false;
            if (this.numberOfPages <= this.limit) {
                return this.numberOfPages;
            }
            if (this.currentPage <= this.limit - 2) {
                this.diff = 1;
                this.showNext = true;
                result = this.limit - 2;
            }

            if (this.currentPage > this.numberOfPages - this.limit + 2) {
                this.diff = this.numberOfPages - this.limit + 3;
                this.showPrev = true;
                result = this.limit - 2;
            }
            if (this.currentPage >= this.limit - 2 && this.currentPage <= this.numberOfPages - this.limit + 2) {
                this.diff = this.currentPage - 1;
                this.showPrev = true;
                this.showNext = true;
                result = this.limit - 4;
            }
            return result;
        },
    }
};
