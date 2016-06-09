import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class JFileChooser extends JFrame
{
     private JTextArea outputArea;
     private JScrollPane scrollpane;

     public JFileChooser()
     {
          super("Testing class file");
          outputArea = new JTextArea();

          scrollpane = new scrollpane(outputArea);
          add.scrollpane(BorderLayout.CENTER);

          setSize(400,400);
          setVisible(true);

          analyzePath();
     }

     private File getFileOrDirectory()
     {
          //display dialog
          JFileChooser fileChooser = new JFileChooser()
          fileChooser.setFileChooserMode(JFileChooser.FILES_AND_DIRECTORIES);
          int result = fileChooser.showOpenDialog(this);

          if(result == JFileChooser.CANCEL_OPTION)
          {
               System.exit(1);
          }

          File filename = fileChooser.getSelectedFile();
     }
}
