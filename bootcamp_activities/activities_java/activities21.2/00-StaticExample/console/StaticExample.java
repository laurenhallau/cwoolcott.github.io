
package console;

class Student {

  int studentID;
  String studentName;
  String homeRoom;
  static String teacher; //when you load a class
  
  public Student(){
      homeRoom = "105"; //when you create an object
  }

   public void show(){
      System.out.println(studentID + " : " + studentName + " : " + teacher + " : " + homeRoom);
   }
}

public class StaticExample {

    public static void main(String []args){
        
        Student chris = new Student();
        chris.studentName = "Chris";
        chris.studentID = 2;
        chris.teacher = "Mr. Dobolina";

        Student scott = new Student();
        scott.studentName = "Scott";
        scott.studentID = 3;


    chris.show();
    scott.show();
  }

}
