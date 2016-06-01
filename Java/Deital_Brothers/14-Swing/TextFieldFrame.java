import java.awt.FlowLayout;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JFrame;
import javax.swing.JTextField;
import javax.swing.JPasswordField;
import javax.swing.JOptionPane;

public class TextFieldFrame extends JFrame
{
     private JTextField textField1;
     private JTextField textField2;
     private JTextField textField3;
     private JPasswordField pwdField1;

     public TextFieldFrame()
     {
          super("Preqin statistics --> R&A");
          setLayout(new FlowLayout());

          //construct Textfield with 10 columns
          textField1 = new JTextField(10);
          add(textField1);

          textField2 = new JTextField("Enter text here");
          add(textField2);

          textField3 = new JTextField("Uneditable text field", 21);
          textField3.setEditable(false);
          add(textField3);

          pwdField1 = new JPasswordField(20);
          add(pwdField1);

          //Register Event Handlers
          TextFieldHandler handler = new TextFieldHandler();
          textField1.addActionListener( handler );
          textField2.addActionListener( handler );
          textField3.addActionListener( handler );
          pwdField1.addActionListener( handler );
     }

     //private inner class for event handling
     private class TextFieldHandler implements ActionListener
     {
          //process text field events
          public void actionPerformed(ActionEvent event)
          {
               String string = "";

               if(event.getSource() == textField1)
               {
                    string = String.format("textField1: %s", event.getActionCommand());
                    textField1.setText("Changed on click");
               }
               else if(event.getSource() == textField2)
               {
                    string = String.format("textField2: %s", event.getActionCommand());
               }
               else if(event.getSource() == textField3)
               {
                    string = String.format("textfield3: %s", event.getActionCommand());
               }
               else if(event.getSource() == pwdField1)
               {
                    string = String.format("Password Field: %s", event.getActionCommand());
               }

               JOptionPane.showMessageDialog(null,string);
          }

     }
}
