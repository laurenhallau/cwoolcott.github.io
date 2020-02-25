package com.streams;

import java.util.Arrays;

import java.util.ArrayList;

import java.util.stream.Stream;

import java.util.Scanner;

class Streams {

  private static final Scanner scanner = new Scanner(System.in);

  public static void main (String[] args) {
  
    ArrayList<String> names = promptN("Please enter a name.", 5);
 
  	Stream<String> nameStream = names.stream();
 
   // TODO Create greeting String using nameStream filter, map and reduce
  }

  private static String promptUser (String message) {
    System.out.print(String.format("%s ", message));
    return scanner.nextLine();
  }

  private static ArrayList<String> promptN (String message, int n) {
    ArrayList<String> names = new ArrayList<String>();

    for (int i = 0; i < n; i += 1) {
      names.add(promptUser(message));
    }

    return names;
  }
}
