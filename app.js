const app = Vue.createApp({
  data() {
    return {
      counter: 35,
      userInput: '',
      confirmInput: '',
      imageUrl: 'images/human_genome.jpg'
    };
  },
  methods: {
    confirmInput() {
      this.confirmInput = this.userInput;
    },

    submitForm() {
      alert('Submitted!');
    },

    saveInput(event) {
      this.userInput = event.target.value;
    },

    resetInput() {
      this.userInput = '';
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
