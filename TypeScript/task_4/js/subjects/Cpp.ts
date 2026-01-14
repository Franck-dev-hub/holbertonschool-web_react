namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  class Cpp extends Subject {
    getRequirement(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
