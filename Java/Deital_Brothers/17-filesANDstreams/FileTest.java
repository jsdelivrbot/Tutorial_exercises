import java.io.File;
import java.util.Scanner;

public class FileTest
{
     public static void main(String[] args)
     {
          Scanner input = new Scanner(System.in);
          System.out.print("Enter File name or directory: ..");
          analyizePath(input.nextLine());
     }//eo main()

     public static void analyizePath(String path)
     {
          File name = new File( path );

          if( name.exists() )
          {
               System.out.printf("%s%s\n%s\n%s\n%s\n%s%s\n%s%s\n%s%s\n%s%s\n%s%s",
               name.getName(), "exists",
               (name.isFile() ? "is a file" : "is not a file"),
               (name.isDirectory() ? "Is a directory" : "Is not a directory"),
               (name.isAbsolute() ? "Is an absolute" : "Is not an absolute"),
               "Last modified : ", name.lastModified(), "Length", name.length(),
               "Path ", name.getPath(), "Absoulte Path ", name.getAbsolutePath(),
               "Parent ", name.getParent() );

               if(name.isDirectory())
               {
                    String[] directory = name.list();
                    System.out.println("System Directory");
                    for(String dName : directory)
                    {
                         System.out.println(dName);
                    }
               }
          }
          else
          {
               System.out.println("Filename does not exist");
          }
     }

}
