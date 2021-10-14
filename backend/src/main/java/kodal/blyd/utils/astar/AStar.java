package kodal.blyd.utils.astar;

import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Queue;

public class AStar {

    public final static int BAR = 1; // Parede
    public final static int PATH = 2; // Caminho
    public final static int DIRECT_VALUE = 10; // Custo de  mudança
    public final static int OBLIQUE_VALUE = 14; // Custo de movimento oblíquo
    public static boolean diagonal = false;

    public List<Node> path = new ArrayList<>();
    Queue<Node> openList = new PriorityQueue<Node>(); // Fila de prioridade(ordem crescente)
    List<Node> closeList = new ArrayList<Node>();


    // Iniciar algoritmo
    public void start(MapInfo mapInfo, boolean diag)
    {
        diagonal = diag;
        if(mapInfo==null) return;
        openList.clear();
        closeList.clear();
        openList.add(mapInfo.start);
        moveNodes(mapInfo);
    }


    // Mover o nó atual
    private void moveNodes(MapInfo mapInfo)
    {
        while (!openList.isEmpty())
        {
            Node current = openList.poll();
            closeList.add(current);
            addNeighborNodeInOpen(mapInfo,current);
            if (isCoordInClose(mapInfo.end.coord))
            {
                drawPath(mapInfo.maps, mapInfo.end);
                break;
            }
        }
    }

    // Desenhar caminho em uma matriz bidimensional
    private void drawPath(int[][] maps, Node end)
    {
        if(end==null||maps==null) return;
        System.out.println("Custo total：" + end.G);
        while (end != null)
        {
            Coord c = end.coord;
            maps[c.y][c.x] = PATH;
            path.add(new Node(end.coord.y, end.coord.x));
            end = end.parent;
        }
    }


    // Adicionar todos os nós vizinhos à mesa aberta
    private void addNeighborNodeInOpen(MapInfo mapInfo,Node current)
    {
        int x = current.coord.x;
        int y = current.coord.y;

        // Movimentações
        // Esquerda
        addNeighborNodeInOpen(mapInfo,current, x - 1, y, DIRECT_VALUE);
        // Cima
        addNeighborNodeInOpen(mapInfo,current, x, y - 1, DIRECT_VALUE);
        // Direita
        addNeighborNodeInOpen(mapInfo,current, x + 1, y, DIRECT_VALUE);
        // Baixo
        addNeighborNodeInOpen(mapInfo,current, x, y + 1, DIRECT_VALUE);

        if(diagonal) {
            // Diagonal Superior Esquerda
            addNeighborNodeInOpen(mapInfo,current, x - 1, y - 1, OBLIQUE_VALUE);
            // Diagonal Superior Direita
            addNeighborNodeInOpen(mapInfo,current, x + 1, y - 1, OBLIQUE_VALUE);
            // Diagonal Inferior Direita
            addNeighborNodeInOpen(mapInfo,current, x + 1, y + 1, OBLIQUE_VALUE);
            // Diagonal Inferior Esquerda
            addNeighborNodeInOpen(mapInfo,current, x - 1, y + 1, OBLIQUE_VALUE);
        }
    }

    // Adionar ponto de adjacência ao nó aberto
    private void addNeighborNodeInOpen(MapInfo mapInfo,Node current, int x, int y, int value)
    {
        if (canAddNodeToOpen(mapInfo,x, y))
        {
            Node end=mapInfo.end;
            Coord coord = new Coord(x, y);
            int G = current.G + value; // Calcular o valor G do nó vizinho
            Node child = findNodeInOpen(coord);
            if (child == null)
            {
                int H=calcH(end.coord,coord); // Calcular o valor H
                if(isEndNode(end.coord,coord))
                {
                    child=end;
                    child.parent=current;
                    child.G=G;
                    child.H=H;
                }
                else
                {
                    child = new Node(coord, current, G, H);
                }
                openList.add(child);
            }
            else if (child.G > G)
            {
                child.G = G;
                child.parent = current;
                openList.add(child);
            }
        }
    }

    // Encontrar nó aberto
    private Node findNodeInOpen(Coord coord)
    {
        if (coord == null || openList.isEmpty()) return null;
        for (Node node : openList)
        {
            if (node.coord.equals(coord))
            {
                return node;
            }
        }
        return null;
    }


    // Cacular o valor de H - Manhattan
    private int calcH(Coord end,Coord coord)
    {
        return (Math.abs(end.x - coord.x) + Math.abs(end.y - coord.y)) * DIRECT_VALUE;
    }

    //  Verificar se é o nó final
    private boolean isEndNode(Coord end,Coord coord)
    {
        return coord != null && end.equals(coord);
    }

    // Determinar se o nó pode ser adicionado
    private boolean canAddNodeToOpen(MapInfo mapInfo,int x, int y)
    {
        if (x < 0 || x >= mapInfo.width || y < 0 || y >= mapInfo.height) return false;
        if (mapInfo.maps[y][x] == BAR) return false;
        if (isCoordInClose(x, y)) return false;

        return true;
    }

    // Verificar se as coordenadas estão na lista de fechamento
    private boolean isCoordInClose(Coord coord)
    {
        return coord!=null&&isCoordInClose(coord.x, coord.y);
    }

    // Verificar se as coordenadas estão na lista de fechamento
    private boolean isCoordInClose(int x, int y)
    {
        if (closeList.isEmpty()) return false;
        for (Node node : closeList)
        {
            if (node.coord.x == x && node.coord.y == y)
            {
                return true;
            }
        }
        return false;
    }
}
