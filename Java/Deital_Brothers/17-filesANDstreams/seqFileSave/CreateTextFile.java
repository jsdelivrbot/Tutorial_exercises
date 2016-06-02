import java.io.FileNotFoundException;
import java.lang.SecurityException;
import java.util.Formatter;
import java.util.FormatterClosedException;
import java.util.NoSuchElementException;
import java.util.Scanner;

public class CreateTextFile
{
     private Formatter output;

     public void openFile()
     {
          try
          {
               output = new Formatter("clients.txt");
          }
          catch(SecurityException secEX)
          {
               System.err.println("You do not have the authority to access this file");
               System.exit(1);
          }
          catch(FileNotFoundException notFound)
          {
               System.err.println("File not found")
               System.exit(1);
          }
     }

     public void openFile()
     {
          AccountRecord accREC = new AccountRecord();
          Scanner input = new Scanner(System.in);
          System.out.printf("%s\n%s\n%s\n%s\n\n",
               "To terminate input - type the end of line indicator",
               "when you are prompted to enter input",
               "LINUX/UNIX/MAC --> type <ctrl> d <-- then press enter",
               "WINDOWS --> type <ctrl> z <-- then press enter");

          System.out.printf("%s\n%s",
               "Enter Account number > 0 , First name, Last name and balance" , "?");
     }

     while(input.hasNext())
     {
          accREC.setAccount(input.nextInt());
     }
}
