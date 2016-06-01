package com.hfad.messenger;

import android.app.Activity;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.content.Intent;
import android.widget.EditText;

public class CreateMessageActivity extends Activity
{
    @Override
    protected void onCreate(Bundle savedInstance)
    {
        //Call the super constructor of class Activity and set the content view
        super.onCreate(savedInstance);
        setContentView(R.layout.activity_create_message);
    }

    //Call onSendMessag() when the button is clickd
    public void onSendMessage(View view)
    {
        //Get the text that is in edit view
        EditText messageView = (EditText)findViewById(R.id.message);
        String messageText = messageView.getText().toString();

        //create an Intent for 2ndary activity
        Intent intent = new Intent(this, ReceiveMessageActivity.class);

        //Add the mesaage user typed in an intent.putExtra() method
        intent.putExtra(ReceiveMessageActivity.EXTRA_MESSAGE, messageText);

        //send activity intent to android for execution
        startActivity(intent);
    }

    //call onSendAppMessage when clicked
    public void onSendAppMessage(View view)
    {
        //Retrieve edit text view
        EditText messageView = (EditText)findViewById(R.id.message);
        String messageText = messageView.getText().toString();

        //setup a new anonoymous intent
        Intent intent = new Intent(Intent.ACTION_SEND);
        intent.setType("text/plain");
        intent.putExtra(Intent.EXTRA_EMAIL, "Charlie@SynfulTronics.com");
        intent.putExtra(Intent.EXTRA_SUBJECT, "Issue Ticket");
        intent.putExtra(Intent.EXTRA_TEXT, messageText);
        startActivity(intent);
    }
}
