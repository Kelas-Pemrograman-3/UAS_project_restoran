package com.desma.restoran;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

public class menu extends AppCompatActivity {

    ImageView menu1,menu2,menu3,keluar,transaksi;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_menu);
        getSupportActionBar().hide();

        menu1 = findViewById(R.id.gambarmakan);
        menu2 = findViewById(R.id.gambarminum);
        menu3 = findViewById(R.id.gambarbelanja);
        keluar = findViewById(R.id.gambarlogout);
        transaksi = findViewById(R.id.gambarbelanja);

        menu1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {


                Intent a = new Intent(menu.this, makan.class);
                startActivity(a);
                finish();

            }
        });

        menu2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {


                Intent a = new Intent(menu.this, minuman.class);
                startActivity(a);
                finish();

            }
        });


        keluar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent a = new Intent(menu.this, Login.class);
                startActivity(a);
                finish();
            }
        });

        transaksi.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent a = new Intent(menu.this, transaksi.class);
                startActivity(a);
                finish();
            }
        });

    }

    @Override
    public void onBackPressed() {
        Intent i = new Intent(menu.this, Login.class);
        startActivity(i);
        finish();
    }
}
