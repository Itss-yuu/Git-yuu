import java.net.*;

/**
 * @author Jonh Fredrik U
 */
public class Jaringan {
    public static void main(String[] args) {
        try {
            InetAddress address = InetAddress.getByName("www.google.com");
            System.out.println(address);

            InetAddress[] addresses = InetAddress.getAllByName("localhost");
            for (int i = 0; i < addresses.length; i++)
                System.out.println(addresses[i]);

            InetAddress mesin = InetAddress.getLocalHost();
            System.out.println(mesin);

            String lokal = mesin.getHostName();
            String ip = mesin.getHostAddress();
            System.out.println(lokal);
            System.out.println(ip);

        }  catch (UnknownHostException uhEx) {
            uhEx.printStackTrace();
        }
    }
}