import java.io.FileNotFoundException;
import java.lang.SecurityException;
import java.util.Formatter;
import java.util.FormatterClosedException;
import java.util.NoSuchElementException;
import java.util.Scanner;

//import com.mrstorm.smile;

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
               System.err.println("File not found");
               System.exit(1);
          }
     }

     public void addRecords()
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


     while(input.hasNext())
     {
          try
          {
               accREC.setAccount(input.nextInt());
               accRec.setFirstName(input.next());
               accRec.setLastName(input.next());
               accRec.setBalance(input.nextDouble());

               if(accRec.getAccount() > 0)
               {
                    //write new record
                    output.format("%d %s %s %.2f\n",
                         accRec.getAccount(), accRec.getFirstName(),
                         accRec.getLastName(), accRec.getBalance());
               }
               else
               {
                    System.out.println("Account number must be greater than 0");
               }
          }
          catch(FormatterClosedException fomattClose)
          {
               system.err.prinln("Error writing to file");
               return;
          }
          catch(NoSuchElementException noSuch)
          {
               System.err.print("Invalid input - please try again");
               input.nextLine();
          }

          System.out.printf("%s %s\n%s", "Enter account Num", "first , last and balance","?");

     }
}

     public void closeFile()
     {
          if(output != null)
          {
               output.close();
          }
     }


} //end of class -->
