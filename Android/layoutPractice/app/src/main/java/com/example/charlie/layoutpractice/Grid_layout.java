package com.example.charlie.layoutpractice;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class Grid_layout extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_grid_layout);
    }

    public void onEditHint()
    {
        TextView view = (TextView)findViewById(R.id.hint);
        view.setText("Just been changed");

    }
}
