export const superHeros = [
	{name: "Batman", age: 30},
	{name: "Robin", age: 27},
	{name: "Daredevil", age: 40},
	{name: "Wolverine", age: 45},
];

const ageFilter = 40;

export const moreThanFortyAge = superHeros.filter((hero) => hero.age > ageFilter);

export interface ISuperHeroe {
  nombre: string;
  edad: number;
}

// dia de hoy - today
export const today = new Date()

// dias transcurridos desde un fecha - elapsed days since a date
export const elapsedDaySinceADate: number = 33

// primer nombre first name
export const firstName = "Humberto"

// primer apellido - last name
export const lastName = 'Rivero';

// días desde la última modificación - days since modification
export const daysSinceLastModified = 12;


