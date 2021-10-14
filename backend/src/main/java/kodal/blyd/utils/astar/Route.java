package kodal.blyd.utils.astar;

import java.util.ArrayList;
import java.util.List;

public class Route {

    private List<Node> routes = new ArrayList<>();
    private int totalMove, typeDirection;
    private String direction, nameArrow;
    private char equalIndex;

    public Route() {}

    public List<Node> getRoutes() {
        return routes;
    }

    public void setRoutes(List<Node> routes) {
        this.routes = routes;
    }

    public int getTotalMove() {
        return totalMove;
    }

    public void setTotalMove(int totalMove) {
        this.totalMove = totalMove;
    }

    public int getTypeDirection() {
        return typeDirection;
    }

    public void setTypeDirection(int typeDirection) {
        this.typeDirection = typeDirection;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public char getEqualIndex() {
        return equalIndex;
    }

    public void setEqualIndex(char equalIndex) {
        this.equalIndex = equalIndex;
    }

    public String getNameArrow() {
        return nameArrow;
    }

    public void setNameArrow(String nameArrow) {
        this.nameArrow = nameArrow;
    }
}
