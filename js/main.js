const { createApp } = Vue

  createApp({
    data() {
      return {
        tasks: [
            {
                text: 'Creare repository vue-todolist',
                done: false
                
            },
            {
                text: 'Milestone 1',
                done: false
            },
            {
                text: 'Milestone 2',
                done: false
            },
            {
                text: 'Milestone 3',
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
        nuovaTask : '',
        error : false,
      }
    },
    methods: {
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        addTask() {
            if (this.nuovaTask.length == 0) {
                this.error = true;
                this.nuovaTask = '';
            } else {
                this.error = false;
                const newTask = {
                    text: this.nuovaTask,
                    done: false
                };
                this.tasks.unshift(newTask);
                this.nuovaTask = '';
            }
        },
        invert(index) {
            if (this.tasks[index].done) {
                this.tasks[index].done = false;
            } else {
                this.tasks[index].done = true;
            }
        }
    },
  }).mount('#app')