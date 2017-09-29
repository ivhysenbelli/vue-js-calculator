var app = new Vue({
    el: '#app',
    data: {
        number1: '',
        number2: '',
        total: 0,
        display: 0,
        operator: null
    },
    methods: {
        setNumber(number) {
            if (this.operator === null) {
                this.number1 += number;
                this.display = this.number1;
            } else {
                this.number2 += number;
                this.display = this.number2;
            }
        },
        calculate() {
            switch (this.operator) {
                case '+':
                    this.total = parseFloat(this.number1) + parseFloat(this.number2);
                    break;
                case '-':
                    this.total = parseFloat(this.number1) - parseFloat(this.number2);
                    break;
                case '*':
                    this.total = parseFloat(this.number1) * parseFloat(this.number2);
                    break;
                case '/':
                    this.total = parseFloat(this.number1) / parseFloat(this.number2);
                    break;
            }
            this.display = this.total;
            this.number1 = '' + this.total + '';
            this.number2 = '';
            this.operator = null;
        },
        clear() {
            this.number1 = '';
            this.number2 = '';
            this.tot = 0;
            this.display = 0;
            this.operator = null;
        }
    }
});