const app = Vue.createApp({
  data() {
    return {
      counter: 35,
      name: '',
      lastName: '',
      confirmInput: '',
      imageUrl: 'images/human_genome.jpg'
    };
  },
  watch: {
    counter(value) {
      if (value < 19){
        this.counter = 19;
      }
    }
  },
  computed: {
    fullname() {
      if (this.name === '' || this.lastName === ''){
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    outputFullname() {
      if (this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Min';
    },

    confirmInput() {
      this.confirmInput = this.name;
    },

    submitForm() {
      alert('Submitted!');
    },

    saveInput(event) {
      this.name = event.target.value;
    },

    resetInput() {
      this.name = '';
      this.lastName = '';
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
