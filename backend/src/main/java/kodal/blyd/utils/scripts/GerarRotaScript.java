package kodal.blyd.utils.scripts;

import kodal.blyd.utils.astar.AStar;
import kodal.blyd.utils.astar.MapInfo;
import kodal.blyd.utils.astar.Node;
import kodal.blyd.utils.astar.Route;
import kodal.blyd.dto.AvisoDTO;
import kodal.blyd.dto.MapaDTO;
import kodal.blyd.dto.PopUpDirectionDTO;
import kodal.blyd.services.AvisoService;
import kodal.blyd.services.MapaService;

import java.util.ArrayList;
import java.util.List;

public class GerarRotaScript {

    private MapaService mapaService;
    private AvisoService avisoService;

    public GerarRotaScript(MapaService mapaService, AvisoService avisoService) {
        this.mapaService = mapaService;
        this.avisoService = avisoService;
    }

    public List<PopUpDirectionDTO> gerarRota(long idMapa, int xFim, int yFim) {

        int[][] mapa = getMap(mapaService, idMapa);

        //Adicionar avisos nos mapas
        if(mapa.length != 0){
            List<AvisoDTO> adviceList = avisoService.findAll();

            if(!adviceList.isEmpty()) {
                for (AvisoDTO advice : adviceList) {
                    String adviceCoordString = advice.getListaPonto();
                    String[] splittedAdviceCoordString = adviceCoordString.split("!");

                    for (String coordsSplitted : splittedAdviceCoordString) {
                        int[] coord = new StringParaArrayScript().gerarArrayUni(coordsSplitted);
                        System.out.print("\nAviso: [" + coord[0] + ", "+ coord[1] + "]");
                        mapa[coord[0]][coord[1]] = 1;
                    }
                }
            }
        } else return null;

        MapInfo info = new MapInfo(mapa,mapa[0].length, mapa.length,new Node(13, 21), new Node(xFim, yFim));

        AStar as = new AStar();
        List<Route> routeList = new ArrayList<>();

        // Iniciar A*
        as.start(info, false);

        if(!as.path.isEmpty()) {
            List<Node> finalPath = setFinalPath(as.path);

            printPath(finalPath);
            printMap(mapa);
            routeList = setRouteList(finalPath);

            Route lastRoute = new Route();

            // Setar os atributos da rota
            for (Route r: routeList) {
                setTotalMoveRoute(r);
                if(r.getTotalMove() == 1 && routeList.indexOf(r) != 0) setTypeDirectionRoute(r, lastRoute);
                else setTypeDirectionRoute(r);
                if (routeList.indexOf(r) == 0) {
                    r.setDirection("frente");
                    r.setNameArrow("arrow-up");
                }
                else setDirectionRoute(r, lastRoute);
                lastRoute = r;
            }
//            printRouteList(routeList);
        }
        List<PopUpDirectionDTO> popUpDirectionDTOList = getPopUp(routeList);

        return popUpDirectionDTOList;
    }

    // Gerar popUp
    private static List<PopUpDirectionDTO> getPopUp(List<Route> routeList) {
        List<PopUpDirectionDTO> popUpDirectionDTOList = new ArrayList<>();
        if(routeList != null) {
            popUpDirectionDTOList = new GerarPopUpDirectionScript().gerarPopUpDirection(routeList);
            System.out.println("\nPopUps: ");
            int i = 0;
            for (PopUpDirectionDTO popUp: popUpDirectionDTOList) {
                System.out.println( "Passo " + i + "- " + popUp.toString());
                i++;
            }
        }
        return popUpDirectionDTOList;
    }

    // Gerar mapa
    private static int[][] getMap(MapaService mapaService, long idMap) {
        MapaDTO map = mapaService.procurarMapa(idMap);
        if(map == null) return new int[][]{};
        return new StringParaArrayScript().gerarArrayMulti(map.getMatriz().split("!"));
    }

    // Imprimir mapa
    private static void printMap(int[][] maps) {
        System.out.println();
        for (int[] map : maps) {
            for (int i : map) {
                switch (i) {
                    case 0:
                        System.out.print("_");
                        break;
                    case 1:
                        System.out.print("#");
                        break;
                    case 2:
                        System.out.print("@");
                        break;
                    default:
                        System.out.print("%");
                }
            }
            System.out.println();
        }
    }

    // Imprimir caminho
    private static void printPath(List<Node> path) {
        System.out.println();
        for (Node n: path) {
            System.out.print("[" + n.coord.x + "," + n.coord.y + "]");
        }
        System.out.println();
    }

    // Setar caminho final
    private static List<Node> setFinalPath(List<Node> path) {
        List<Node> newList = new ArrayList<>();
        for (int i = path.size() - 1; i >= 0 ; i--) {
            newList.add(path.get(i));
        }
        return newList;
    }

    // Setar lista de rota
    private static List<Route> setRouteList(List<Node> path) {
        List<Route> newRouteList = new ArrayList<>();

        Node lastNode = null;
        Route lastRoute = null;
        String lastEqual = "";

        for (Node n: path) {
            boolean newList = false;

            if(newRouteList.isEmpty()){
                Route route = new Route();
                route.getRoutes().add(n);
                newRouteList.add(route);
                lastNode = n;
                lastRoute = route;

                if(n.coord.x == path.get(path.indexOf(n) + 1).coord.x) lastEqual = "x" + n.coord.x;
                else lastEqual = "y" + n.coord.y;
                route.setEqualIndex(lastEqual.charAt(0));
            } else {

                if(n.coord.x == lastNode.coord.x) {
                    if(("x" + n.coord.x).equalsIgnoreCase(lastEqual)) newList = true;
                    else lastEqual = "x" + n.coord.x;
                } else if(n.coord.y == lastNode.coord.y) {
                    if(("y" + n.coord.y).equalsIgnoreCase(lastEqual)) newList = true;
                    else lastEqual = "y" + n.coord.y;
                }

                if(newList) {
                    lastRoute.getRoutes().add(n);
                    lastNode = n;
                } else {
                    Route route = new Route();
                    route.setEqualIndex(lastEqual.charAt(0));
                    route.getRoutes().add(n);
                    newRouteList.add(route);
                    lastNode = n;
                    lastRoute = route;
                }
            }
        }
        return newRouteList;
    }

    // Setar total de movimento da rota
    private static void setTotalMoveRoute(Route route) {
        route.setTotalMove(route.getRoutes().size());
    }

    // Setar o tipo de direção da rota
    private static void setTypeDirectionRoute(Route route) {
        Node first = route.getRoutes().get(0);
        Node last = route.getRoutes().get(route.getTotalMove() - 1);
        int typeDirection = 0;

//              E
//        1. ------>
//              D
//
//              D
//        2. <------
//              E
//
//        3.    |
//           D  |  E
//              V
//
//        4.    A
//           E  |  D
//              |


        if(first.coord.x == last.coord.x && first.coord.y < last.coord.y) typeDirection = 1;
        else if(first.coord.x == last.coord.x && first.coord.y > last.coord.y) typeDirection = 2;
        else if(first.coord.y == last.coord.y && first.coord.x < last.coord.x) typeDirection = 3;
        else typeDirection = 4;

        route.setTypeDirection(typeDirection);
    }

    // Setar o tipo de direção da rota (Sobrecarga)
    private static void setTypeDirectionRoute(Route thisRoute, Route lastRoute) {
        int thisTypeDirection = 0;
        int lastTypeDirection = lastRoute.getTypeDirection();
        Node thisNode = thisRoute.getRoutes().get(0);
        Node lastNode = lastRoute.getRoutes().get(lastRoute.getTotalMove() - 1);

        if(lastTypeDirection == 1 || lastTypeDirection == 2) {
            if(thisNode.coord.x > lastNode.coord.x) thisTypeDirection = 3;
            else thisTypeDirection = 4;
        } else {
            if(thisNode.coord.y > lastNode.coord.y) thisTypeDirection = 1;
            else thisTypeDirection = 2;
        }
        thisRoute.setTypeDirection(thisTypeDirection);
    }

    // Setar o direcionamento da rota
    private static void setDirectionRoute(Route thisRoute, Route lastRoute) {
        Node thisNode = thisRoute.getRoutes().get(0);
        Node lastNode = lastRoute.getRoutes().get(lastRoute.getTotalMove() - 1);

        switch (lastRoute.getTypeDirection()){
            case 1:
                thisRoute.setDirection(thisRoute.getTypeDirection() == 4 ? "esquerda" : "direita");
                thisRoute.setNameArrow(thisRoute.getTypeDirection() == 4 ? "corner-up-left" : "corner-up-right");
                break;
            case 2:
                thisRoute.setDirection(thisRoute.getTypeDirection() == 4 ? "direita" : "esquerda");
                thisRoute.setNameArrow(thisRoute.getTypeDirection() == 4 ? "corner-up-right" : "corner-up-left");
                break;
            case 3:
                thisRoute.setDirection(thisRoute.getTypeDirection() == 1 ? "esquerda" : "direita");
                thisRoute.setNameArrow(thisRoute.getTypeDirection() == 1 ? "corner-up-left" : "corner-up-right");
                break;
            case 4:
                thisRoute.setDirection(thisRoute.getTypeDirection() == 1 ? "direita" : "esquerda");
                thisRoute.setNameArrow(thisRoute.getTypeDirection() == 1 ? "corner-up-right" : "corner-up-left");
                break;
        }
    }

    // Imprimir lista de rotas
    private static void printRouteList(List<Route> routeList) {
        int  i =  1;
        for (Route r: routeList) {
            System.out.println("\nRota " + i + " - TotalMove: " + r.getTotalMove() +  " - TypeDirection : " + r.getTypeDirection() + " - Direction: " + r.getDirection() + " - EqualIndex: " + r.getEqualIndex() );
            for (Node n : r.getRoutes()) {
                System.out.print("[" + n.coord.x + ", " + n.coord.y + "] ");
            }
            i++;
        }
    }
}
