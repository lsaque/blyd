package kodal.blyd.utils.commons;

public class StringParaArrayScript {

    public int[][] gerarArrayMulti(String[] splitted) {

        int[][] matriz = new int[splitted.length][splitted[0].split(",").length];
        int iAux = 0;

        for (int i = 0; i < splitted.length; i++) {
            String[] values = splitted[i].split(",");
            int jAux = 0;

            for (int j = 0; j < values.length; j++) {
                matriz[iAux][jAux] = Integer.parseInt(values[j]);
                jAux++;
            }
            iAux++;
        }
        return matriz;
    }

    public int[] gerarArrayUni(String texto) {
        String[] coordString = texto.split(",");
        return new int[]{Integer.parseInt(coordString[0]), Integer.parseInt(coordString[1])};
    }


}
