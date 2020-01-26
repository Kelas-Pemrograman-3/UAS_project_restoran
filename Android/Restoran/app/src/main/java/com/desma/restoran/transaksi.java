package com.desma.restoran;

import androidx.appcompat.app.AppCompatActivity;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.VolleyLog;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;

import server.ConfigUrl;

public class transaksi extends AppCompatActivity {
    private RequestQueue mRequestQueue;

    private EditText namamakanan,namaminuman,jumlah,total,bayar;
    private Button pesan;

    private ProgressDialog pDialog;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_transaksi);
        getSupportActionBar().hide();

        mRequestQueue = Volley.newRequestQueue(this);

        pDialog = new ProgressDialog(this);
        pDialog.setCancelable(false);

        namamakanan      = (EditText) findViewById(R.id.txtmakanan);
        namaminuman     = (EditText) findViewById(R.id.txtminuman);
        jumlah    = (EditText) findViewById(R.id.txtjumlah);
        total = (EditText) findViewById(R.id.txttotal);
        bayar = (EditText) findViewById(R.id.txtbayar);

        pesan = (Button) findViewById(R.id.btnpesan);

        pesan.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String strmakanan = namamakanan.getText().toString();
                String strminuman = namaminuman.getText().toString();
                String strjumlah = jumlah.getText().toString();
                String strtotal = total.getText().toString();
                String strbayar = bayar.getText().toString();

                if (strmakanan.isEmpty()){
                    Toast.makeText(getApplicationContext(),"Nama Makanan Tidak Boleh kosong",
                            Toast.LENGTH_LONG).show();
                }else if (strminuman.isEmpty()){
                    Toast.makeText(getApplicationContext(),"Nama Minuman Tidak Boleh kosong",
                            Toast.LENGTH_LONG).show();
                }else if (strjumlah.isEmpty()){
                    Toast.makeText(getApplicationContext(),"Jumlah Tidak Boleh kosong",
                            Toast.LENGTH_LONG).show();
                }else if (strtotal.isEmpty()){
                    Toast.makeText(getApplicationContext(),"Total Tidak Boleh kosong",
                            Toast.LENGTH_LONG).show();
                }else if (strbayar.isEmpty()){
                    Toast.makeText(getApplicationContext(),"Nominal Uang Tidak Boleh kosong",
                            Toast.LENGTH_LONG).show();
                }else {
                    metodpesan(strmakanan, strminuman, strjumlah,strtotal,strbayar);

//                    Intent a = new Intent(RegistrasiActivity.this, LoginActivity.class);
//                    startActivity(a);
//                    finish();
                }

            }
        });
    }

    private void metodpesan(String namamakanan, String namaminuman, String jumlah, String total, String bayar){
//        final String URL = "/volley/resource/12";
// Post params to be sent to the server
        HashMap<String, String> params = new HashMap<String, String>();
        params.put("namamakanan", namamakanan);
        params.put("namaminuman", namaminuman);
        params.put("jumlah", jumlah);
        params.put("total", total);
            params.put("bayar", bayar);

        pDialog.setMessage("Mohon Tunggu...");
        showDialog();

        JsonObjectRequest req = new JsonObjectRequest(ConfigUrl.posttransaksi, new JSONObject(params),
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        hideDialog();
                        try {
                            boolean status = response.getBoolean("error");
                            String msg;
                            if (status== true){
                                msg = response.getString("pesan");
                            }else {
                                msg = response.getString("pesan");

                                Intent i = new Intent(transaksi.this,transaksi.class);
                                startActivity(i);
                                finish();
                            }
                            Toast.makeText(getApplicationContext(),  msg, Toast.LENGTH_LONG).show();
//                            VolleyLog.v("Response:%n %s", response.toString(4));
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                hideDialog();
                VolleyLog.e("Error: ", error.getMessage());
            }
        });

// add the request object to the queue to be executed
//        ApplicationController.getInstance().addToRequestQueue(req);
        mRequestQueue.add(req);
    }

    private void showDialog() {
        if (!pDialog.isShowing())
            pDialog.show();
    }

    private void hideDialog() {
        if (pDialog.isShowing())
            pDialog.dismiss();
    }

    @Override
    public void onBackPressed (){
        Intent t = new Intent(transaksi.this, menu.class);
        startActivity(t);
        finish();
    }
}
