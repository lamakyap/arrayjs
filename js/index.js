	// Get your shorts on - this is an array workout!
	// $$ Array Cardio Day 1

	const inventors = [
	{
		first: 'Albert', last: 'Einstein', year: 1879, passed: 1955
	},
	{
		first: 'Issac', last: 'Newton', year: 1643, passed: 1727
	},
	{
		first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642
	},
	{
		first: 'Marie', last: 'Curie', year: 1867, passed: 1934
	},
	{
		first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630
	},
	{
		first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543
	},
	{
		first: 'Max', last: 'planck', year: 1858, passed: 1947
	},
];
	const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 
	'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 
	'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 
	'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 
	'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
	 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 
	 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 
	 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 
	 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


//Array.prototype.filter()

// 1. Filter the list of inventors for those who were born in the 1500's

const fifteen = inventors.filter (inventor =>(inventor.year >= 1500 && inventor.year < 1600));
console.table(fifteen);

// Array .prototype .map()
// 2. Give us an array of the inventory first and last names

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by borthdate, oldest and youngest

//const ordered = inventors.sort(function(a, b) {
	//if(a.year >b.year) {
		//return 1;
	//} else {
		//return -1;
	//}
//});

const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
console.table(ordered);


// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const totalYears = inventors.reduce((total, inventor) => {
	return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// 5. Sort the inventors by years lived

const oldest = inventors.sort((a, b) => {
	const lastGuy = a.passed - a.year;
	const nextGuy = b.passed - b.year;
	return lastGuy > nextGuy ? -1 : 1;
});

console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
 //const category = document.querySelector('.mw-category');
 //const links = Array.from(category.querySelectorAll('a'));

 //const de = links
 //.map(links => links.textContent)
 //.filter(streetName => streetName.includes('de'));


// 7. Sort excercise
// sort the people aphabatically by last name

const alpha = people.sort((lastOne, nextOne) => {
	const [aLast, aFirst] = lastOne.split(',');
	const [bLast, bFirst] = nextOne.split(',');
	return aLast > bLast ? 1 : -1;
}); 
console.table(alpha);


// 8. Reduce Excercise
// Sum up the instances of each of these

const data = [
	'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike',
	'walk', 'car', 'van', 'car', 'truck', 'pimpim'
];

const transportation = data.reduce(function(obj, item) {
	if(!obj[item]) {
		obj[item] = 0;
	}
	obj[item]++;
	return obj;
}, {});

console.table(transportation);






















































