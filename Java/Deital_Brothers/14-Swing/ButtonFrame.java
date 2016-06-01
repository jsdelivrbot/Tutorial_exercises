import java.awt.FlowLayout;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JButton;
import javax.swing.Icon;
import javax.swing.ImageIcon;


public class ButtonFrame extends JFrame
{
     private JButton plain;
     private JButton fancy;

     public ButtonFrame()
     {
          super("Buttons being tested");
          setLayout(new FlowLayout());

          plain = new JButton("Plain Button");
          add(plain);

          Icon fire1 = new ImageIcon(getClass().getResource("/images/fireLight.png"));
          Icon fire2 = new ImageIcon(getClass().getResource("/images/fireDark.png"));
          fancy = new JButton("Save Record" , fire1);
          fancy.setRolloverIcon(fire2);
          add(fancy);

          ButtonHandler handler = new ButtonHandler();
          plain.addActionListener(handler);
          fancy.addActionListener(handler);
     }

     //private inner class for button event handling
     private class ButtonHandler implements ActionListener
     {
          public void actionPerformed(ActionEvent event)
          {
               JOptionPane.showMessageDialog(ButtonFrame.this,
                    String.format("You pressed: %s at ",event.getActionCommand()));
          }
     }


}
