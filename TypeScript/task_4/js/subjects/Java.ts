namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  class Cpp extends Subject {
    getRequirement(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
