import java.util.*;

public class Will1
{
  public static void main(String[] args)
  {


    int selection = getSelection();

    switch(selection)
    {
      case 1: System.out.println("You are old enough man!"); break;
      case 2: System.out.println("You are old enough woman!"); break;
      case 3: System.out.println("To damn young!"); break;

    }


    //-------> methods

  } //end of public method

  public static int getSelection()
  {
    Scanner scanner = new Scanner(System.in);
    int selection = 0;
    System.out.print(" Please enter a selection \n" +
            "   1 - Male over the age of 18\n" +
            "   2 - Female over the age of 18\n" +
            "   3 - Under the age of 18\n");
    selection = scanner.nextInt();
    while(selection < 1 || selection > 3)
    {
      System.out.printf("Please enter a valid number between 1 - 3\nYou entered %d : Incorrect selection", selection);
      selection = scanner.nextInt();
    }
    return selection;
  }


}//end of class
