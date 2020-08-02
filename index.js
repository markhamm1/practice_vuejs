var app = new Vue({
  el: "#app",
  data: {
    message: "Hello from JavaScript!",
    firstName: "Mark",
    lastName: "Hamm",
    info: false,
    sports: ["ultimate frisbee", "disc golf", "other fake sports"],
    additionalSport: ""
  },
  methods: {
    changeMessage: function () {
      console.log('changing greeting');
      this.message = "We're ready to go!";
    },
    toggleInfo: function () {
      console.log('toggling info...');
      this.info = !this.info;
    },
    addSport: function () {
      console.log('adding sport...');
      this.sports.push(this.additionalSport);
    }
  },
});