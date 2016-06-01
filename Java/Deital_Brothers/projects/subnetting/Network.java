import java.util.Random;

public class Network
{
  //declare class variables
  private final int[] ipAddressDecimal;
  private final int subnetIdPrefix;
  private int classfullMask;
  private int subnetBits;

  private int[] subnetAddressDecimal = new int[4];
  private String pref = "/";
  private int[] subnetID = new int[4];

  //Generate IP address
  //Create subnet mask based on IP
  //generate IP address
  //Generate subnet information
    // --> Subnet ID
    // --> Subnet broadcast adress
    // --> 1st usable host address
    // --> last usable host address

  //constructor
  public Network()
  {
    this.ipAddressDecimal = createRandomIp();
    subnetIdPrefix = genSubnetId();
  }

  //Create random valid IP address
  private int[] createRandomIp()
  {
    int[] IP = new int[4];
    for(int counter = 0; counter < IP.length; counter++)
    {
      if(counter == 0)
      {
        IP[counter] = (int)(Math.random() * 222 + 1);
      }
      else
      {
        IP[counter] = (int)(Math.random() * 255 + 1);
      }
    }
    return IP;
  }

  //Return String representation of IP address
  public String getIP()
  {
    StringBuilder IP = new StringBuilder();
    IP.append(ipAddressDecimal[0]).append(".").append(ipAddressDecimal[1]).append(".");
    IP.append(ipAddressDecimal[2]).append(".").append(ipAddressDecimal[3]);
    return IP.toString();
  }

  //Assign Random Subnet
  private int genSubnetId()
  {
    /*
    Generate random subnet mask on the base of first octect of the IP address
    1. Assign no. of subnet bits to ....
    2. Assign class mask to ....
    3. Assign subnet prefix to ....
    */
    int subnetPrefix = 0;
    if(ipAddressDecimal[0] > 192)
    {
      subnetBits = (int)(Math.random() * 6 + 1);
      classfullMask = 24;
      subnetPrefix = classfullMask + subnetBits;
    }
    else if(ipAddressDecimal[0] > 127)
    {
      subnetBits = (int)(Math.random() * 16 + 1);
      classfullMask = 16;
      subnetPrefix = classfullMask + subnetBits;
    }
    else
    {
      subnetBits = (int)(Math.random() * 24 + 1);
      classfullMask = 8;
      subnetPrefix = classfullMask + subnetBits;
    }
    return subnetPrefix;
  }

  public int getSubnetId()
  {
    return subnetIdPrefix;
  }

  //Override objects toString with random network string props
  public String toString()
  {
    return String.format("IP address generated: %s\nSubnet Prefix: %s%d\nSubnet bits: %d"
        , getIP() ,pref, getSubnetId(),subnetBits);
  }


}//end of class
