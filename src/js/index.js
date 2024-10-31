'use strict';

function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.attendance = new Array(10).fill(null);
  this.marks = new Array(10).fill(null);
}

Student.prototype.getAge = function () {
  const currentYear = new Date().getFullYear();
  return currentYear - this.birthYear;
};

Student.prototype.present = function () {
  const index = this.attendance.indexOf(null);
  if (index !== -1) {
    this.attendance[index] = true;
  }
};

Student.prototype.absent = function () {
  const index = this.attendance.indexOf(null);
  if (index !== -1) {
    this.attendance[index] = false;
  }
};

Student.prototype.mark = function (score) {
  if (score >= 0 && score <= 10) {
    const index = this.marks.indexOf(null);
    if (index !== -1) {
      this.marks[index] = score;
    }
  }
};

Student.prototype.getAverage = function (arr, callback) {
  const validItems = arr.filter((item) => item !== null);
  const total = validItems.reduce((sum, item) => sum + callback(item), 0);
  return validItems.length ? total / validItems.length : 0;
};

Student.prototype.getAverageMark = function () {
  return this.getAverage(this.marks, (mark) => mark);
};

Student.prototype.getAverageAttendance = function () {
  return this.getAverage(this.attendance, (att) => (att ? 1 : 0));
};

Student.prototype.summary = function () {
  const avgMark = this.getAverageMark();
  const avgAttendance = this.getAverageAttendance();

  if (avgMark > 9 && avgAttendance > 0.9) {
    return 'Ух ти, який молодчинка!';
  } if (avgMark > 9 || avgAttendance > 0.9) {
    return 'Нормально, але можна краще';
  }
  return 'Редька!';
};

const student1 = new Student('Bronson', 'Reed', 2000);
const student2 = new Student('Seth', 'Rollins', 1999);

student1.present();
student1.present();
student1.absent();
student1.mark(10);
student1.mark(9);

console.log(student1.getAge());
console.log(student1.getAverageMark());
console.log(student1.getAverageAttendance());
console.log(student1.summary());

student2.present();
student2.absent();
student2.mark(8);
console.log(student2.summary());
