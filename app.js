const app = Vue.createApp({
  data() {
    return {
      counter: 35,
      name: '',
      // confirmedName: '',
      imageUrl: 'images/human_genome.jpg'
    };
  },
  methods: {
    confirmInput() {
      this.confirmName = this.name;
    },

    submitForm() {
      alert('Submitted!');
    },

    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },

    add(num) {
      this.counter = this.counter + num; 
      //this.counter++;
    },

    reduce(num) {
      this.counter = this.counter - num; 
    }
  }
});

app.mount('#events');
