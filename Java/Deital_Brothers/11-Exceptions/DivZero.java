import java.util.*;

public class DivZero
{
  public static int Quint(int num , int deNum)
    throws ArithmeticException
  {
    return num / deNum;
  }

  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);
    boolean continueLoop = true;

    do
    {
      try
      {
        System.out.println("Please enter your first number");
        int num = scanner.nextInt();
        System.out.println("Please enter your second number");
        int deNum = scanner.nextInt();

        int result = Quint(num,deNum);
        System.out.printf("Result: %d / %d = %d",num , deNum , result);
        continueLoop = false;
      }
      catch(InputMismatchException inputMismatchException)
      {
        System.err.printf("\nException: %s\n" , inputMismatchException);
        scanner.nextLine(); //discard input so user can try again
        System.out.println("You must enter to valid integers");
      }
      catch(ArithmeticException arithmeticException)
      {
        System.err.printf("\nException: %s\n", arithmeticException);
        System.out.println("Zero is an invalid denominator");
      }
    } while(continueLoop);


  }
}//end of class
