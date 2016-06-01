import javax.swing.*;
import java.awt.event.*;

public class basicG implements ActionListener
{
     JButton button;

     public static void main(String[] args)
     {
          basicG gui = new basicG();
          gui.go();
     }
     public void go()
     {
          JFrame frame = new JFrame();
          button = new JButton("Click me");
          button.addActionListener(this);

          frame.getContentPane().add(button);
          frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
          frame.setSize(300,300);
          frame.setVisible(true);
     }

     public void actionPerformed(ActionEvent e)
     {
          button.setText("Been clicked");
          System.out.println(e);
     }

}
