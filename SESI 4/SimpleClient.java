import java.io.*;
import java.net.*;
import java.util.*;

public class SimpleClient {
    public static void main(String[] args) throws IOException {
        Socket link = new Socket(InetAddress.getLocalHost(), 1234);
        @SuppressWarnings("resource")
        Scanner Input = new Scanner(link.getInputStream());
        PrintWriter output = new PrintWriter(link.getOutputStream(), true);
        
        output.println("Halo dari client!");
        String pesan = Input.nextLine();
        System.out.println("server balas:" + pesan);

        link.close();
    }
}