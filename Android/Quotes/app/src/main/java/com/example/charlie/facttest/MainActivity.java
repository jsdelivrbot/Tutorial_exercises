package com.example.charlie.facttest;

import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import java.util.Random;
import java.util.Arrays;

public class MainActivity extends AppCompatActivity {

    public static final String TAG = MainActivity.class.getSimpleName();

    private TextView mFactTextView;
    private Button mShowFactButton;
    private RelativeLayout bg;

    //instantiate object outside of the method so it is not called all the time.
    private QuoteBook mqBook = new QuoteBook();
    private colorWheel cWheel = new colorWheel();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //cast required as were finding any view
        mFactTextView = (TextView)findViewById(R.id.factTextView);
        mShowFactButton = (Button)findViewById(R.id.showFactButton);
        bg = (RelativeLayout)findViewById(R.id.background);
        

        mShowFactButton.setOnClickListener(new View.OnClickListener(){
            //anonymous class implemented
            public void onClick(View v){

                int color = cWheel.getColor();

                //Reset the color using the colorWheel class
                bg.setBackgroundColor(color);

                //Reset the view to a random fact generated
                mFactTextView.setText(mqBook.getFact());

                //change the color of the button to whatever the backround is
                mShowFactButton.setTextColor(color);


            }
        });

        //Toast.makeText(MainActivity.this, "To keep ya going!", Toast.LENGTH_SHORT).show();

        Log.d(TAG, "Logging from the on create method");
    }
}
