public class usingEx
{
  public static void main(String[] args)
  {
    try
    {
      throwException();
    }
    catch(Exception e)
    {
      System.err.println("Exception handled in the main");
    }

    doesNotThrowException();

  } //end of static main

  public static void throwException() throws Exception
  {
    try
    {
      System.out.print("Method throws exception");
      throw new Exception();
    }
    catch(Exception e)
    {
      System.err.println("Exception handled in method throw exception")
    }
  }


}//end of class
