package kodal.blyd.utils.astar;

public class MapInfo {

    public int[][] maps;
    public int width;
    public int height;
    public Node start;
    public Node end;

    public MapInfo(int[][] maps, int width, int height, Node start, Node end)
    {
        this.maps = maps;
        this.width = width;
        this.height = height;
        this.start = start;
        this.end = end;
    }
}
