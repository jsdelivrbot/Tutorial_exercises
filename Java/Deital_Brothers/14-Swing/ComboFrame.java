import java.awt.FlowLayout;
import java.awt.event.ItemListener;
import java.awt.event.ItemEvent;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JComboBox;
import javax.swing.Icon;
import javax.swing.ImageIcon;


public class ComboFrame extends JFrame
{
     private JComboBox imagesJComboBox;
     private JLabel label;

     private static final String[] names = {"bug1.gif","bug2.gif","fireLight.png","fireDark.png"};

     private Icon[] icons = {
          new ImageIcon( getClass().getResource(names[0]) ),
          new ImageIcon( getClass().getResource(names[1]) ),
          new ImageIcon( getClass().getResource(names[2]) ),
          new ImageIcon( getClass().getResource(names[3]) )
     };

     public ComboFrame()
     {
          super("Testing comboBoxes");
          setLayout(new FlowLayout());

          //set upa JComboBox and display three rows
          imagesJComboBox = new JComboBox(names);
          imagesJComboBox.setMaximumRowCount(3);

          imagesJComboBox.addItemListener(
               new ItemListener()
               {
                    public void itemStateChanged(ItemEvent event)
                    {
                         if(event.getStateChange() == ItemEvent.SELECTED)
                         {
                              label.setIcon(icons[imagesJComboBox.getSelectedIndex()]);
                         }
                    }
               }
          );//end of private innerClass

          add(imagesJComboBox);
          label = new JLabel( icons[0] );
          add( label );
     }


}
