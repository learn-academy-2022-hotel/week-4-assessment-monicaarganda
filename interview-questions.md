# ASSESSMENT 4: Interview Practice Questions
 
Answer the following questions.
 
First, without external resources. Challenge yourself to answer from memory.
 
Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.
 
1. What is object-oriented programming? How is it different than functional programming?
 
Your answer: Object-oriented programming is also referred to as OOP, this
describes how the program should achieve a result in a step-by-step process. This is a method used in order to change dates without affecting the entire program.
 
Researched answer: Object-oriented programming (OOP), a computer programming model that organizes software design around data, rather than functions and logic. It tells the program how to achieve results through objects altering the program's state. While functional programming uses immutable data to tell the program exactly what to do.
 
2. What is the difference between a Float and an Integer in Ruby?
 
Your answer: The difference between a Float and an Integer is a Float is a parital and an Integer is a whole number. They are both data types that work with numbers but when working with the operational operators Integers can be divided by the modulo operator(%) and the division operator (/) and it will only return the true whole number remainder. Whereas, for Floats when using the modulo operator it will return the remainder in a partial number.
 
For example:
3.0.0 :024 > 5 % 2
=> 1 is the remainder
3.0.0 :025 > 5.2 % 2
=> 1.2000000000000002
3.0.0 :026 > 5/2
=> 2 is how many whole numbers 2 is divisible by 5
3.0.0 :027 > 5.2/2
=> 2.6 ( 2 * 2.6 = 5.2 )
 
Researched answer: Integers and floats are two different kinds of data types of numbers. An integer is a number without a decimal point indifference A float is a number that has a decimal place. Floats are commonly used when precision is needed in returning a number.
 
3. Ruby has an implicit return. What does that mean?
 
Your answer: An implicit return in ruby is mainly referring to methods, when evaluating Ruby methods there is no return inside of the method unlike Javascript when it is needed to write return for the function to actually work. Ruby does not need this in order for the methods to work. The computer registers the logic happening but will not show in our terminal. In order to make this display in the terminal, we will have to call on the previously created method. When calling the method the letter (p) is written followed by the method's name and this will display the desired outcome of the method.
 
Researched answer: Every block in ruby will return the value of the last line automatically, so it's common to not use the return keyword. Because Ruby has a reputation for its simplicity, it is understood a method will return the logic written inside and shouldn't need a return.
 
4. What is a block in Ruby?
 
Your answer: A block is considered an anonymous function in Ruby that lives inside of a method, every block starts with a do and stops with an end. Blocks are used to tell methods to further perform actions.
 
For example:
 
nums = [1, 2, 3, 4]
   nums.each do |num|
       p num * 2
   end
 
<!-- This is will multiple each value in the array,
output:
2
4
6
8  -->
 
Researched answer: A ruby block are anonymous functions of one or more lines of code that you put inside the do and end keywords which can accept input from arguments and return a value. It allows you to group code into a unit that you can use as a method argument. A block looks similar to a method in Ruby but Methods consist of a name using snake-case, with Blocks a name is not needed.
 
5. How do you extract a value in a Ruby hash?
 
Your answer: Inside a Ruby hash holds key;value pairs. In order to extract a value you will have to call on the key of the desired value.
 
For example:
Hash:
flash_cards {:intro => '7 cards', :methods => '8 cards', :blocks => '2 cards', :hashes => '6 cards', :classes => '8 cards'}
Extracting value:
p flash_cards[:hashes]
<!-- # output: '6 cards' -->
 
Researched answer: In Ruby, the values in a hash can be accessed using bracket notation. After the hash name, type the key in square brackets in order to access the value. Another way to extract a key or value in a has is by using the built in method .value_at.
 
For example:
Hash:
h = { "a" => 100, "b" => 200, "c" => 300 }
Extracting value:
h.values_at("a", "c") 
<!-- output: [100, 300]  -->
 
 
## Looking Ahead: Terms for Next Week
 
1. Class Inheritance: Inheritance is when a class(subclass) inherits behavior from another class(superclass). We use inheritance as a way to extract common behaviors from classes that share that behavior, and move it to a superclass. Class inheritance enables developers to create new classes that reuse, extend, and modify the behavior defined in other classes. These are made to make class data structures more efficient.
 
2. RSpec: RSpec has become the standard framework used to test code written in Ruby. Its extensive library allows developers to isolate, extract, and test specific files within an application in order to decrease bugs and improve overall quality and stability. RSpec was created for behavior-driven development (BDD), BDD is the concept of creating automated tests that will assure the development team that the code created will function properly for the end user.
 
3. CRUD: CRUD testing is a technique to validate the functionality of a software product. CRUD stands for create, read, update, and delete. These are the four major operations that manipulate a set of data in the database. We create new records in the database, we read records back out of the database, we can update the data in those records or we can delete them.
 
4. Test-driven development:  Test-driven development is often referred to as TDD. This is the practice of writing your tests first, then using those tests to guide you as you write your actual code. The benefit of this approach is that it encourages programmers to employ tiny classes and methods to meet specific needs. This makes it easier to define system objects and keep the codebase consistent.
 
5. HTTP: HTTP stands for Hyper Text Transfer Protocol. The primary HTTP verbs are POST (create), GET(read), PUT(update/replace), PATCH(update/modify), and DELETE. HTTP is a fundamental element of the internet. It allows your web browser to communicate with the server where any given website is hosted.
