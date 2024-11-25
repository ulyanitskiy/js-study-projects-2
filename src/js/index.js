'use strict';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class TaskQueue {
  constructor(delayTime) {
    this.delayTime = delayTime;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  run() {
    return this.tasks.reduce((promise, task) => promise.then(() => task().then((result) => {
      console.log(result);
      return delay(this.delayTime);
    })), Promise.resolve()).then(() => 'Все задания завершены');
  }
}

const queue = new TaskQueue(1000);

queue.addTask(() => Promise.resolve('Task 1 выполнено'));
queue.addTask(() => Promise.resolve('Task 2 выполнено'));
queue.addTask(() => Promise.resolve('Task 3 выполнено'));

queue.run().then((message) => {
  console.log(message);
});
