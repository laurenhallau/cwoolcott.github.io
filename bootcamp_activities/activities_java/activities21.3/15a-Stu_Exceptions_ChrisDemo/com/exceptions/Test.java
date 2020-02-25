
package com.exceptions;

import com.exceptions.custom.*;


class Test {

  public static void main (String args[]) {

    try {
      Polygon triangle = new Polygon(3, 1);
    } catch (Polygon.InvalidSideLengthException e) {
      e.printStackTrace();
    } catch (Polygon.InsufficientVerticesException e) {
      e.printStackTrace();
    } 
    
  }

}
