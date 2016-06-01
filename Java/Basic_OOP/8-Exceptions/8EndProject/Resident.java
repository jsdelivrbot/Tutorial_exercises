//Class to instantiate different resident objects in the dorm

import java.io.*;

public class Resident implements Serializable
{
     private String name;
     private String room;
     private String password;

     public Resident()
     {
          this("Unassigned", "000" , "123#Null");
     }

     public Resident(String name, String room, String pwd) throws IllegalArgumentException
     {
          setName( name );
          setRoom( room );
          setPassword( pwd );
     }

     public void setName(Sting name)
     {
          this.name = name;
     }

     public void setRoom(String room)
     {
          this.room = room;
     }

     public void setPassword(String pwd)
     {
          int length = pwd.length();
          if(length < 8)
          {
               throw new IllegalArgumentException("Password needs to be more than 8 letters/digits");
          }
          else
          {
               password = pwd;
          }
     }

     public String getName()
     {
          return name;
     }

     public String getRoom()
     {
          return room;
     }

     public String getPassword()
     {
          return password;
     }


}//end of class
