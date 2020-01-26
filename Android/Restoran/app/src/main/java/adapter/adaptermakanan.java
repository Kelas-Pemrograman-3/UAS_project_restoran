package adapter;

import android.app.Activity;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;
import android.widget.Toast;


import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.VolleyLog;
import com.android.volley.toolbox.JsonObjectRequest;
import com.desma.restoran.R;
import com.desma.restoran.makan;


import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.List;

import model.makananmodel;
import server.ConfigUrl;


public class adaptermakanan extends BaseAdapter {
    private Activity activity;
    private LayoutInflater inflater;
    private List<makananmodel> item;

    private RequestQueue mRequestQueue;
    ProgressDialog pDialog;

    public adaptermakanan(Activity activity, List<makananmodel> item, RequestQueue mRequestQueue, ProgressDialog pDialog) {
        this.activity = activity;
        this.item = item;
        this.mRequestQueue = mRequestQueue;
        this.pDialog = pDialog;
    }


    @Override
    public int getCount() {
        return item.size();
    }

    @Override
    public Object getItem(int position) {
        return item.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(final int position, View convertView, ViewGroup parent) {
        if (inflater == null)
            inflater = (LayoutInflater) activity
                    .getSystemService(Context.LAYOUT_INFLATER_SERVICE);

        if (convertView == null)
            convertView = inflater.inflate(R.layout.daftar_makanan, null);


        TextView kodemakanan = (TextView) convertView.findViewById(R.id.txtkodemakanan);
        TextView namamakanan = (TextView) convertView.findViewById(R.id.txtnamamakanan);
        TextView harga = (TextView) convertView.findViewById(R.id.txtharga);

        kodemakanan.setText(item.get(position).getKodemakanan());
        namamakanan.setText(item.get(position).getNamamakanan());
        harga.setText(item.get(position).getHargamakanan());

        return convertView;

    }

    private void metodedmakanan(String kodemakanan, String namamakanan, String harga){
//        final String URL = "/volley/resource/12";
// Post params to be sent to the server
        HashMap<String, String> params = new HashMap<String, String>();
        params.put("kodemakanan", kodemakanan);
        params.put("namamakanan", namamakanan);
        params.put("harga", harga);

        pDialog.setMessage("Mohon Tunggu...");
        showDialog();

        JsonObjectRequest req = new JsonObjectRequest(ConfigUrl.getallmakan, new JSONObject(params),
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

                                Intent a = new Intent(activity, makan.class);
                                activity.startActivity(a);
                                activity.finish();
                            }
                            Toast.makeText(activity,  msg, Toast.LENGTH_LONG).show();
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
}
