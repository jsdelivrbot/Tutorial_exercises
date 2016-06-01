package com.hfad.stopwatch;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;
import android.os.*;

public class StopwatchActivity extends AppCompatActivity {

    private int seconds = 0;
    private boolean running;
    private boolean wasRunning;

    /*
    Whenever you override an android life cycle its very important that you call super on its
    constructor.
     */

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_stopwatch);

        //Check to see if there is not a previous saved state from either config change or other
        if(savedInstanceState != null)
        {
            seconds = savedInstanceState.getInt("seconds");
            running = savedInstanceState.getBoolean("running");
            wasRunning = savedInstanceState.getBoolean("wasRunning");
        }

        //Call runTimer() as soon as activity has been created
        runTimer();
    }

    //Run the timer
    public void runTimer()
    {
        //get the text view
        final TextView timeView = (TextView)findViewById(R.id.time_view);

        final Handler handler = new Handler();
        handler.post(new Runnable() {
            @Override
            public void run() {
                //Format seconds into hours, mintues and aseconds
                int hours = seconds / 3600;
                int minutes = (seconds % 3600) / 60;
                int secs = seconds % 60;
                String time = String.format("%d:%02d:%02d", hours, minutes, secs);

                //set the time view and
                timeView.setText(time);

                if (running) {
                    seconds++;
                }
                handler.postDelayed(this, 1000);
            }
        });
    }


    //Start stopwatch when button is clicked
    public void onClickStart(View view)
    {
        running = true;
    }

    //Stop the stopwatch when the button is clicked
    public void onClickStop(View view)
    {
        running = false;
    }

    //Reset the stopwatch when clicked
    public void onClickReset(View view)
    {
        running = false;
        seconds = 0;
    }

    //If any config changes happen such as screen turn save both int seconds and bool runnning
    @Override
    public void onSaveInstanceState(Bundle savedInstanceState)
    {
        savedInstanceState.putInt("seconds",seconds);
        savedInstanceState.putBoolean("running", running);
        savedInstanceState.putBoolean("wasRunning",wasRunning);
    }

    //call the onstop method to hide the app in the backround if phone calls or user goes back
    @Override
    protected void onStop()
    {
        super.onStop();
        wasRunning = running;
        running = false;
    }

    //call the onStart method to come into play when the application comes back into user visibility
    @Override
    protected void onStart()
    {
        super.onStart();
        if(wasRunning)
        {
            running = true;
        }
    }

    //call this method if another application such as yocto alarm clock places the app in the bg
    @Override
    protected void onPause()
    {
        super.onPause();
        wasRunning = running;
        running = false;
    }

    //Resume the application when the other app (Yocto) goes into bg and app comes back into fg
    @Override
    protected void onResume() {
        super.onResume();
        if (wasRunning)
        {
            running = true;
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_stopwatch, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
