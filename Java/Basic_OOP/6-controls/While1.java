import java.util.*;

public class Will1
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    getSelection();


    //-------> methods

    private int getSelection()
    {
      int selection;
      System.out.println(" Please enter a selection \n" +
              "   1 - Male over the age of 18\n" +
              "   2 - Female over the age of 18\n" +
              "   3 - Under the age of 18\n");
      scanner = selection.nextInt();
      while(selection < 1 || selection > 3)
      {
        System.out.printf("Please enter a valid number between 1 - 3\nYou entered %d : Incorrect selection", selection);
        selection = scanner.nextInt();
      }
    }
  }
}//end of class
