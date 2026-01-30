package java;

public class main {
    public static void main(String[] args) {
        participante participanteejemplo = new participante();
        System.out.println(participanteejemplo);

        participanteejemplo.setNombre("nombre");
        participanteejemplo.setApellidos("apellidos");

        System.out.println(participanteejemplo);

    }

}