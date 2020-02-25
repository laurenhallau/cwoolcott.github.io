package com.exceptions;

/* Instructor Note: Delete the try/catch blocks before
 *   opening this for your initial explanation. Add them
 *   in as you go, according to the lesson plan.
 */
class Throw {

  public static void main (String[] args) {

    printSeparator();
    
 
      throw new Exception("Oh no! A disaster!");
 

    System.out.println("This will run, now that we have a catch block.");

     printSeparator();

  }

  private static void printSeparator () {
    System.out.println(new String(new char[6]).replace("\0", "--"));
  }

}
