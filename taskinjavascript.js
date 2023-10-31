class StudentInformation {

  constructor( n, a ) {
    this.name = n;
    this.age = a;
  }
}

class StudentGroup {
 
  constructor( students ) {
    this._students = students;
  }
 

 getAverageAge() {
 const ages = this._students.map(student => student.age);
 const sum = ages.reduce((accumulator, current) => accumulator + current, 0);
 const result =sum/this._students.length;
  return result;
  }
getMaxAge()
  {
   const ages = this._students.map(student => student.age);
    const max = ages.reduce((a, b) => { return Math.max(a, b) });
   return max;
  }
}


let maths = new StudentGroup([
  { name: 'Adams', age: 16 },
  { name: 'Baker', age: 15 },
  { name: 'Clark', age: 15 },
  { name: 'Davis', age: 16 },
  { name: 'Evans', age: 14 }
]);


// Confirm user details have been updated

document.write( `The average age for the Maths class is calculated correctly:${maths.getAverageAge() === 15.2}<br />`);


let english = new StudentGroup([
  { name: 'Frank', age: 16 },
  { name: 'Ghosh', age: 15 },
  { name: 'Hills', age: 17 },
  { name: 'Irwin', age: 17 },
  { name: 'Jones', age: 14 }
]);

// Confirm user details have been updated

document.write( `The maximum age for the English class is calculated correctly: ${english.getMaxAge() === 17}<br />`);