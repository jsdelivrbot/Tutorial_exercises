import java.net.*;

public class IPretrieve
{
     public static void main(String[] args)
     {
          try
          {
               InetAddress add = InetAddress.getLocalHost();
               System.out.println(add);
          } catch(UnknownHostException e)
          {
               System.out.println("Could not find local address!!");
          }
     }
}
