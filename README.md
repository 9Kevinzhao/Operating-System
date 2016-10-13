
# Operating-System
This program simulates the behavior that you are familiar with on the desktop or mobile devices. We have applications that take up space and sit in the backgroud.

## The App Object

This object has 3 instance variables and 4 instance functions. Once you are done building the App constructor function you will make 4 app objects of your own and stick them in an array named appList.

### Instance Variables
  -  **name**:  This is a string which represents the name of your app.

  -  **memory**: This is a number which represents the number of MB (Megabytes) your app takes up in RAM.

  -  **state**: This represents the priority your operating system is giving your appliaction. State can have 1 of three values. State can be active, sleep, or null. The first two are strings but null is its own data type and does not use quotation marks. All apps when constructed start with a state of null.

### Instance Functions
  -  **open**: This function does not take any inputs. This function will re-assign the value of state to "active". There is no conditional statement.

  -  **sleep**: This function does not take any inputs. This function will use a conditional statement. It will check to see if the objects state is active. If this is true it will re-assign the value of state to "sleep". Then the function will re-assign the value of memory to be half its original size.
  
  -  **active**: This function does not take any inputes. This function will use a conditional statement. It will check to see if the objects state is sleep. If this is true it will re-assign the value of state to "active". The function will re-assign the value of memory to be twice its original size.

  -  **close**:  This function does not take any inputs. This function will use a conditional statement. It will check to see if the objects state is not equal to null. If this is true it will re-assign the value of state to "null". The function will re-assign the value of memory to zero.


### Finsihing Touches
Below your constructor, create 4 apps of your own.
Finally create an array named appList and place all 4 of these apps in the array. The order does not matter.
