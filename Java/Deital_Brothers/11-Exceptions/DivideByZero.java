import java.util.InputMismatchException;
import javax.swing.JOptionPane;
import java.util.*;

public class DivideByZero
{
  public static int Quint(int num, int deNum)
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
        String num = JOptionPane.showInputDialog("Enter first number");
        String deNum = JOptionPane.showInputDialog("Enter second number");
        String confirm = String.format("You have entered %s & %s as your numbers?", num,deNum);

        JOptionPane.showMessageDialog(null, confirm);

        int result = Quint(Integer.parseInt(num), Integer.parseInt(deNum));

        System.out.printf("Result: %s / %s = %d \n", num , deNum , result);
      }//end try
    }


  }
}
