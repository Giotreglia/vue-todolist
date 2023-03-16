const { createApp } = Vue

  createApp({
    data() {
      return {
        tasks: [
            {
                text: 'Creare repository vue-todolist',
                done: true
            },
            {
                text: 'MILESTONE 1',
                done: false
            },
            {
                text: 'MILESTONE 2',
                done: false
            },
            {
                text: 'MILESTONE 3',
                done: false
            },
            {
                text: 'Bonus 1',
                done: false
            },
            {
                text: 'Bonus 2',
                done: true
            },
            {
                text: 'Ultimare esercizio',
                done: true
            },
        ]
      }
    }
  }).mount('#app')