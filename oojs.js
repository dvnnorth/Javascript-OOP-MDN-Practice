// Instantiate a Person object with a function

function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function () {
        document.write(`<br>Hi! I'm ` + this.name + `.`);
    }
    return obj;
}

var person1 = createNewPerson('Salva');
document.write(`<br>` + person1.name);
person1.greeting();

// Instantiating objects with a constructor function

function Person(name) {
    this.name = name;
    this.greeting = function () {
        document.write(`<br>Hi! I'm ` + this.name + `.`);
    };
}

var person2 = new Person(`Fred`);
document.write(`<br>` + person2.name);
person2.greeting();

// The constructor object is JavaScript's version of a class

/* Note that each time you instantiate an object via the constructor, the function
   greeting is defined anew. You can define function on the prototype to avoid this. 
   That comes later in the tutorial, however */

// PersonNew constructor, a slightly more detailed and complex version of Person
function PersonNew(first, last, age, gender, interests) {
    this.name = {
        'first': first,
        'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        document.write('<br>' + this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
        document.write('<br>Hi! I\'m ' + this.name.first + '.');
    };

    // Added some mutators
    // What about encapsulation and privacy? Need to learn...
    this.changeFullName = function (newName) {
        this.name.first = newName.first;
        this.name.last = newName.last;
    };
    this.changeFirstName = function (newFirstName) {
        this.name.first = newFirstName;
    };
    this.changeLastName = function (newLastName) {
        this.name.last = newLastName;
    };
}

person1 = new PersonNew('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

document.write(`<br>person1.age: ` + person1.age);
document.write(`<br>person1[\`age\`]: ` + person1[`age`]);
document.write(`<br>` + person1.interests[1]);
person1.greeting();
person1.bio();
person1.changeFullName({
    first: `Fred`,
    last: `Thompson`
});
person1.greeting();
person1.bio();
person1.changeFirstName(`Jackie`);
person1.changeLastName(`Gleason`);
person1.greeting();
person1.bio();

// You can create on object from another by calling the create method of the Object class
person2 = Object.create(person1);

person2.changeFullName({first: "Jack", last: "Peterson"});
person1.greeting();
person1.bio();
person1.changeFirstName(`Dude`);
person1.changeLastName(`Duderson`);
person1.greeting();
person1.bio();