var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    number1: 0,
    number2: 0,
    number3: 0,
    number4: 0,
    number5: 0,
    sum: "",
    product: ""
  },
  methods: {
    calculateSum: function () {
      this.sum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    },
    calculateProduct: function () {
      this.product = parseInt(this.number4) * parseInt(this.number5);
    }
  }
});