package server;

public class ConfigUrl {
    public static String baseurl = "http://10.10.30.92:5000";
//    public static String baseurl = "http://192.168.42.243:5000";

    public static String postuser = baseurl + "/user/postuser";

    public static String loginuser = baseurl + "/user/loginuser";

    public static String getallmakan = baseurl + "/makanan/getallmakanan";

    public static String getallminum = baseurl + "/minuman/getallminuman";

    public static String posttransaksi = baseurl + "/transaksi/posttransaksi";
}
