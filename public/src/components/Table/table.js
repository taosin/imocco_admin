module.exports = {
    name: 'im-table',
    props: ['data', 'columns'],
    inherit: true,
    data() {
        let isshow = true;
        let shownum = 10;
        const columnObject = this.translateColumns(this.columns);
        return {
            columnsname: columnObject[0],
            columnskey: columnObject[1],
            columnsrender: columnObject[2],
            columnswidth: columnObject[3],
            columnsclickable: columnObject[4],
            show: isshow,
            startnums: 1,
            rownumstart: 0,
            rownumend: 0,
            activePage: 0,
            showpagination: false,
            newData: this.$deepCopy(this.data),
            sort: 1,
            isup: false,
            isdown: false,
            issort: true,
            isopen: 1,
        };
    },
    computed: {
    },
    watch: {
        data(values) {
            this.newData = Vue.prototype.$deepCopy(values);
            this.renderHtml(this.newData);
        },
        columns(value) {
            const columnObject = this.translateColumns(value);
            this.columnsname = columnObject[0];
            this.columnskey = columnObject[1];
            this.columnsrender = columnObject[2];
            this.columnswidth = columnObject[3];
            this.columnsclickable = columnObject[4];
        },
    },
    directives: {
        gridcell(html) {
            const cell = document.createElement('DIV');
            cell.style.textAlign = 'center';
            cell.innerHTML = html;
            this.vm.$compile(cell);
            this.el.innerHTML = '';
            this.el.appendChild(cell);
        }
    },
    compiled() {
        this.renderHtml(this.newData);
    },
    methods: {
        renderHtml(values) {
            values.forEach((value, index) => {
                Object.keys(this.columnsrender).forEach((key) => {
                    if (this.columnsrender[key]) {
                        value[key] = this.columnsrender[key](value[key], value, index);
                    }
                });
            });
        },
        translateColumns(columnsMap) {
            const columnsname = [];
            const columnskey = [];
            const columnsrender = {};
            const columnswidth = {};
            const columnsclickable = {};
            for (const key in columnsMap) {
                if (typeof(columnsMap[key]) === 'string') {
                    columnsname.push(columnsMap[key]);
                    columnswidth[key] = '100px';
                } else {
                    columnsname.push(columnsMap[key].text);
                    columnsrender[key] = columnsMap[key].render;
                    columnswidth[columnsMap[key].text] = columnsMap[key].width;
                    columnsclickable[columnsMap[key].text] = columnsMap[key].clickable;
                }
                columnskey.push(key);
            }
            return [columnsname, columnskey, columnsrender, columnswidth, columnsclickable];
        },

        rowClick(index) {
            if (this.$parent.rowClick && this.$isFunc(this.$parent.rowClick)) {
                this.$parent.rowClick(index);
            }
        },
        edit() {
            if (this.$parent.edit && this.$isFunc(this.$parent.edit)) {
                this.$parent.edit.apply(this, arguments);
            }
        },
        edit2() {
            if (this.$parent.edit2 && this.$isFunc(this.$parent.edit2)) {
                this.$parent.edit2.apply(this, arguments);
            }
        },
        edit3() {
            if (this.$parent.edit3 && this.$isFunc(this.$parent.edit3)) {
                this.$parent.edit3.apply(this, arguments);
            }
        },
        add() {
            if (this.$parent.add && this.$isFunc(this.$parent.add)) {
                this.$parent.add.apply(this, arguments);
            }
        },
        del() {
            if (this.$parent.del && this.$isFunc(this.$parent.del)) {
                this.$parent.del.apply(this, arguments);
            }
        },
    }
};
