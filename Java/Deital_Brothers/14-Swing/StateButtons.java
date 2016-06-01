import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.event.ItemListener;
import java.awt.event.ItemEvent;
import javax.swing.JFrame;
import javax.swing.JTextField;
import javax.swing.JCheckBox;

public class StateButtons extends JFrame
{
     private JTextField textField;
     private JCheckBox boldJcheckbox;
     private JCheckBox italicJcheckbox;

     public StateButtons()
     {
          super("Practicing chekboxes");
          setLayout(new FlowLayout());

          textField = new JTextField("Watch the font style change");
          textField.setFont(new Font("Serif", Font.PLAIN, 14));
          add( textField );

          boldJcheckbox = new JCheckBox("Bold");
          italicJcheckbox = new JCheckBox("Italic check");
          add( boldJcheckbox );
          add( italicJcheckbox );

          //register listeners for the checkbox
          CheckBoxHandler handler = new CheckBoxHandler();
          boldJcheckbox.addItemListener( handler );
          italicJcheckbox.addItemListener( handler );
     }

     private class CheckBoxHandler implements ItemListener
     {
          public void itemStateChanged(ItemEvent event)
          {
               Font font = null;
               if(boldJcheckbox.isSelected() && italicJcheckbox.isSelected())
               {
                    font = new Font("Serif",Font.BOLD + font.ITALIC , 14);
               }
               else if(boldJcheckbox.isSelected())
               {
                    font = new Font("Serif",Font.BOLD,14);
               }
               else if(italicJcheckbox.isSelected())
               {
                    font = new Font("Serif",Font.ITALIC,14);
               }
               else
               {
                    font = new Font("Serif", font.PLAIN, 14);
               }
               textField.setFont(font);
          }
     }
}
