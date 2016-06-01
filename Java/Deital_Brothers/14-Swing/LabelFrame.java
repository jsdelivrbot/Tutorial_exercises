import java.awt.FlowLayout;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.SwingConstants;
import javax.swing.Icon;
import javax.swing.ImageIcon;

public class LabelFrame extends JFrame
{
     private JLabel label1;
     private JLabel label2;
     private JLabel label3;

     //Constructor will add JLabels to the frame
     public LabelFrame()
     {
          super("Preqin statistics --> R&A");
          setLayout(new FlowLayout());

          label1 = new JLabel("Simple label with text");
          label1.setToolTipText("Hint to help you understand");
          add(label1);

          Icon ping = new ImageIcon( getClass().getResource("images/db.png") );
          label2 = new JLabel("Enter Gallery", ping, SwingConstants.LEFT);
          label2.setToolTipText("Click here to bring gallery up!");
          add(label2);

          label3 = new JLabel();
          label3.setText("Upload statistics to Facebook");
          label3.setIcon( ping );
          label3.setHorizontalTextPosition(SwingConstants.CENTER);
          label3.setVerticalTextPosition(SwingConstants.BOTTOM);
          label3.setToolTipText("Authenticate user and upload stats to friends");
          add(label3);

     }

}
