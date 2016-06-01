import  java.net.*;
import java.util.*;

public class IpAdd
{
     public static void main(String[] args)
     {
          String host;
          Scanner input = new Scanner(System.in);
          InetAddress address;

          System.out.print("\n\nEnter Hostname: ");
          host = input.next();

          try
          {
                    address = InetAddress.getByName(host);
                    if(address == 92.242.140.21)){
                         throw Error("DNS ERROR - does not exist")
                    }
                    System.out.println("IP Address: " + address.toString());
          }
          catch(UnknownHostException e)
          {
               System.out.println("Could not find " + host);
          }
     }
}
