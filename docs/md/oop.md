### OOPS 

The object oriented programming (OOP) is a programming model where Programs are organized around object and data rather than action and logic. 

### OOPS Features


1. Class 
     * A class is the core of any modern Object Oriented Programming language. 
     * In OOP languages it is must to create a class for representing data. 
     * Class is a blueprint of an object that contains variables for storing data and functions to performing operations on these data. 
     * Class will not occupy any memory space and hence it is only logical representation of data.
       ```
       class Employee
       {

       }
       ```
1. Object 
     * Objects are the basic run-time entities in an object oriented system.
     * They may represent a person,a place or any item that the program has to handle. "Object is a Software bundle of related variable and methods."
     * “Object is an instance of a class”
     
        ```
        Employee objEmp = new Employee();
        ``` 
1. Abstraction
      *   Abstraction is "To represent the essential feature without representing the back ground details." Abstraction lets you focus on what the object does instead of how it does it.
      *  It provides you a generalized view of your classes or object by providing relevant information.
      *  It is the process of hiding the working style of an object, and showing the information of an object in understandable manner.
      *  Eg: Mobile Phone, Application Form (College, doctor)
         ```
         abstract class MobilePhone
         {
             public void Calling();
             public void SendSMS();
         }
         public class Nokia1400 extends MobilePhone
         {

         }
         public class Nokia2700 extends MobilePhone
         {
            public void FMRadio();
            public void MP3();
            public void Camera();
         }
         public class BlackBerry extends MobilePhone
         {
            public void FMRadio();
            public void MP3();
            public void Camera();
            public void Recording();
            public void ReadAndSendEmails();
         }
          ```

1.   Encapsulation
      *  Wrapping up data member and method together into a single unit (i.e. Class) is called Encapsulation.
      *  Encapsulation is like enclosing in a capsule. That is enclosing the related operations and data related to an object into that object.
      *  Encapsulation is like your bag in which you can keep your pen, book etc. It means this is the property of encapsulating members and functions.
      *  Eg: Mobile Phone and Mobile Phone Manufacturer, TV operation 
      
         ```
         class Bag
         {
            book;
            pen;
            ReadBook();
         }
         ```
1.   Inheritance
      * When a class acquire the property of another class is known as inheritance.
      * Inheritance is process of object reusability.
      * Eg: A Child acquire property of Parents.
      
        ```
          public class ParentClass
          {
            public ParentClass()
            {
                System.out.println("Parent Constructor.");
            }
            public void print()
            {
                System.out.println("I'm a Parent Class.");
            }
          }
          public class ChildClass extends ParentClass
          {
            public ChildClass()
            {
                System.out.println("Child Constructor.");
            }
            public static void main(String args[]){
            {
                ChildClass child = new ChildClass();
                child.print();
            }
           }
        ```
1.   Polymorphism
      * Polymorphism means one name many forms.
      * One function behaves different forms. (or) "Many forms of a single object is called Polymorphism"
      * Eg: Teacher, Person, Mobile

### Difference between Abstraction and Encapsulation

| Abstraction | Encapsulation |
|-------------|---------------|
| Abstraction solves the problem in the design level.| Encapsulation solves the problem in the implementation level.|
| Abstraction is used for hiding the unwanted data and giving relevant data.|Encapsulation means hiding the code and data into a single unit to protect the data from outside world.|
| Abstraction lets you focus on what the object does instead of how it does it|Encapsulation means hiding the internal details or mechanics of how an object does something.|
| Abstraction- Outer layout, used in terms of design.For Example:- Outer Look of a Mobile Phone, like it has a display screen and keypad buttons to dial a number.|Encapsulation- Inner layout, used in terms of implementation.For Example:- Inner Implementation detail of a Mobile Phone, how keypad button and Display Screen are connect with each other using circuits.|

### Summary 

1. Class            : Blue print of Object 
2. Object           : Instance of Class
3. Abstraction      : Hiding our irrelevant Data
4. Encapsulation    : Protecting our Data
5. Inheritence      : One property of object is acquiring to another property of object
6. Polymorphism     : Different behaviors at different instances
