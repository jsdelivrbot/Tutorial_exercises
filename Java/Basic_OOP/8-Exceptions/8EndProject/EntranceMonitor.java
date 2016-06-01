//Class is the brain of the keyless entry system

import java.io.*;
import java.util.*;

public class EntranceMonitor
{
     //allocate variables to hold objects
     private Dorm manager;
     private Scanner scanner;

     public EntranceMonitor()
     {
          manager = new Dorm();
          scanner = new Scanner(System.in);
     }

     //-----------[MAIN METHOD]-------------
     public static void main(String[] args)
     {
          EntranceMonitor sentry = new EntranceMonitor();
          sentry.start();
     }

     public void start()
     {
          openFile();
          String roster = manager.getResidentList();
          System.out.print(roster);
     }

     private void openFile()
     {
          String filename;
          while(true)
          {
               System.out.println("File to open { x - to cancel}");
               filename = scanner.next();
               if(filename.equals("x"))
               {
                    System.out.println("Program has been cancelled");
                    System.exit(0);
               }
               try
               {
                    manager.openFile(filename);
                    return;
               }
               catch(FileNotFoundException e)
               {
                    System.out.println("File was not found");
               }
               catch(IOException e)
               {
                    System.out.println("Error in reading file");
               }
          }
     }


}//end of c
