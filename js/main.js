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
                done: false
            },
            {
                text: 'Ultimare esercizio',
                done: false
            },
        ],
        nuovaTask : ''
      }
    },
    methods: {
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        addTask() {
            if (this.nuovaTask.length < 1) {
                console.log('parola corta');
            } else {
            const newTask = {
                text: this.nuovaTask,
                done: false
            };
            this.tasks.push(newTask);
            this.nuovaTask = '';}
        }
    },
  }).mount('#app')