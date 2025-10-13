import java.io.*;
import java.net.*;
import java.util.*;

public class SimpleServer {
    public static void main(String[] args) throws IOException {
        ServerSocket servSock = new ServerSocket(1234);
        System.out.println("server siap menerima koneksi...");
        Socket link = servSock.accept();

        Scanner input = new Scanner(link.getInputStream());
        PrintWriter output = new PrintWriter(link.getOutputStream(), true);

        output.println("Awaiting data...");
        String in = input.nextLine();
        System.out.println("Client mengirim: " + in);

        link.close();
        ServSock.close();
    }
}