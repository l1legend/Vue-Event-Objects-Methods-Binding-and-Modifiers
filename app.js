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
    outputFullname() {
      if (this.userInput === ''){
        return '';
      }
      return this.userInput + ' ' + 'Min';
    },

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
      if (this.counter > 19 ){
        this.counter = this.counter - num; 
      } else {
        this.counter = 19;
      }

    }
  }
});

app.mount('#events');
