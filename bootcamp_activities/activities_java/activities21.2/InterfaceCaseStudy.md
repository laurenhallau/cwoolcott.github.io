# Interface Case Study

The easiest way to understand interfaces, and object oriented design in general, is reading good examples of it.

## Java Collections interface
Interface Case Study (0:15)

A "collection" is any data structure that you can put multiple objects in.

ArrayLists, Sets, HashMaps...


All of these collections have certain things in common—like the ability to add elements, or check for emptiness—but that each collection does these things differently.

 ArrayList would insert an item differently than a HashMap would.
 
This is why a collections interface makes more sense than a collections superclass.

Java Collections interface - scroll down to the Method Summary.
https://docs.oracle.com/javase/7/docs/api/java/util/Collection.html

1. Compare the behavior of ArrayList and Hashmap (which they know about), and Set (which they don't).

2. Discuss why ArrayList and HashMap can't have the same add method.

3. What about clear? size?

List interface:
https://docs.oracle.com/javase/8/docs/api/java/util/List.html