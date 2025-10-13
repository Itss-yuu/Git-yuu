import java.net.*;

/**
 * @author Jonh Fredrik U
 */
public class MyLocalIPAddress {
    public static void main(String[] args) {
        try {
            InetAddress address = InetAddress.getLocalHost();
            System.out.println(address);
        } catch (UnknownHostException uhEx) {
            System.out.println("Tidak menemukan local address");
        }
    }
}