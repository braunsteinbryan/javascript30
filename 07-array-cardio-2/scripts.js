// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

  // Some and Every Checks
  //1 Array.prototype.some() // is at least one person 19 or older?
  //2 Array.prototype.every() // is everyone 19 or older?

    //1
    const isAdult = people.some(function(person) {
        const currentYear = (new Date()).getFullYear();
        if (currentYear - person.year >= 19) {
            return true;
        }
    });

    //##@ SIMPLIFIED @##
    const isAdult = people.some(person => {
        const currentYear = (new Date()).getFullYear();
        return currentYear - person.year >= 19;
    });

    //##@ EVEN MORE SIMPLIFIED @##
    const isAdult = people.some(person => ((new Date()).
        getFullYear()) - person.year >= 19 );

    // console.log({isAdult});

    //2
    const allAdults = people.every(person => ((new Date()).
        getFullYear()) - person.year >= 19 );

    // console.log({allAdults});



  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  //3 find the comment with the ID of 823423

const comment = comments.find(function(comment) {
    if (comment.id === 823423) {
        return true;
    }
});
// console.log(comment);

// ##@ SIMPLIFIED @##
const comment = comments.find(comment => comment.id === 823423);

// console.log(comment);

  // Array.prototype.findIndex()
  //4 Find the comment with this ID
  //5 delete the comment with the ID of 823423

//4 
const index = comments.findIndex(comment => comment.id === 823423);

//5
comments.splice(index, 1);

// OR 
// create a new array using spread operator(popular in redux)
const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];