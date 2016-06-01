import java.io.*;
import java.net.*;
import java.util.*;

public class TCPEchoServer
{
     private static ServerSocket serverSocket;
     private static final int PORT = 1234;

     public static void main(String[] args)
     {
          System.out.print("Opening port..... \n");
          try
          {
               serverSocket = new ServerSocket(PORT);
          }
          catch(IOException IOex)
          {
               System.out.println("Unable to attach to port");
               System.exit(1);
          }

          do
          {
               handleClient();
          }
          while(true)
     }

     public static void handleClient()
     {
          Socket link = null;
          try
          {
               link = serverSocket.accept();
               Scanner input = new Scanner(link.getInputUpstream());
               PrintWriter output = new PrintWriter(link.getInputUpstream(),true);
               int numOfMessages = 0;
               String message = imput.nextLine();
               while(!message.equals("***CLOSE***"))
               {
                    System.out.println("Message Recieved");
                    numOfMessages++;
                    output.println("Message " + numOfMessages + ": " + message);
                    message = input.nextLine();
               }
               output.println(numOfMessages + " Messages recieved");
          }
          catch(IOException IOex)
          {
               IOex.printStackTrace();
          }
          finally
          {
               try
               {
                    System.out.println("\n* Closing Connection....*");
                    link.close();
               }
               catch(IOException IOex)
               {
                    System.out.println("Unable to close Connection");
                    System.exit(1);
               }
          }
     }
}
