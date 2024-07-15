// Question 1

// console.log(a)

var a = 5;

//Answer: Undefined

// Question 2

// console.log(a)
// console.log(b)

var a = (b = 5);

//Answer: Error

// Question 3

var c = 5;

// console.log(c++)
// console.log(c)

//Answer: 5, 6

// Question 4

// console.log(1 < 2 < 3)
// console.log(3 > 2 > 1 )

//Answer: true, false

// Question 5

const foo = () => {
  console.log(this.name);
};
foo.call({ name: "Aman" });

//Answer: empty

// Question 6: can we freez any thing inside a object

const user = {
  id: 123,
  name: "Aman",
  address: {
    city: "Mumbai",
    state: "Maharasthra",
  },
};

console.log(Object.defineProperties(user, { id: { Writable: false } }));

console.log(user.id);

//Answer:  Yes

//Question 7: when click on button popup show

const button = document.getElementsByClassName("modalShow");
button[0].addEventListener("click", () => {
  document.querySelector(".modal")[0].style.display = "block";
});
