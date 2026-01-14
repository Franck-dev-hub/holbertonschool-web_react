// ----- Interfaces -----
// Teacher interface
interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
	location: string,
	[key: string]: any,
}

// Director interface
interface Director extends Teacher {
	numberOfReports: number,
}

// ----- Tests -----
// Teacher test
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// Director test
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// ----- Logs -----
console.log(teacher3);
console.log(director1);

