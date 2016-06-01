import javax.swing.JOptionPane;

public class Dialog1
{
  public static void main(String[] args)
  {
    String test = JOptionPane.showInputDialog("How many tests do you want");

    String confirm = String.format("Please confirm, you have asked for %s tests", test);

    JOptionPane.showMessageDialog(null,confirm);

  }
}
