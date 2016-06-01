package com.example.charlie.layoutpractice;

import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Switch;
import android.widget.TextView;
import android.widget.ToggleButton;
import android.widget.Spinner;

public class complete_practice extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_complete_practice);
    }

    public void onButtonClicked(View view)
    {
        TextView title = (TextView)findViewById(R.id.changeText);
        title.setText("Button has been clicked");
        title.setTextColor(Color.parseColor("#f08080"));
    }

    public void onToggleClicked(View view)
    {
        TextView title = (TextView)findViewById(R.id.changeText);
        ToggleButton button = (ToggleButton)findViewById(R.id.toggle_button);
        String previous = title.toString();

        //check for condition and if() it
        boolean on = ((ToggleButton)view).isChecked();
        if(on)
        {
            title.setText("Toggle has been turned on");
            button.setBackgroundColor(Color.parseColor("#d5F4F0"));
        }
        else
        {
            title.setText(previous);
        }
    }

    public void onSwitchClicked(View view)
    {
        boolean on = ((Switch) view).isChecked();
        if(on)
        {
            TextView title = (TextView)findViewById(R.id.changeText);
            title.setText("Switch has been toggled");
            title.setTextColor(Color.parseColor("#9574b6"));
        }
    }

    public void onSpinnerClick(View view)
    {
        Spinner spinner = (Spinner)findViewById(R.id.spinner);
        TextView text = (TextView)findViewById(R.id.changeText);

        String string = String.valueOf(spinner.getSelectedItem());
        text.setText(string);
    }
}
