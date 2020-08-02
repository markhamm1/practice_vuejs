var app = new Vue({
  el: "#app",
  data: {
    message: "Hello from JavaScript!",
    firstName: "Mark",
    lastName: "Hamm",

  },
  methods: {
    changeMessage: function () {
      console.log('changing greeting');
      this.message = "We're ready to go!";
    }
  },
});