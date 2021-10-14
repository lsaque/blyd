package kodal.blyd.dto;

import java.io.Serializable;

public class PopUpDirectionDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String arrowDirection, arrowType, text, distance;

    public PopUpDirectionDTO() {}

    public PopUpDirectionDTO(String arrowDirection, String arrowType, String text, String distance) {
        this.arrowDirection = arrowDirection;
        this.arrowType = arrowType;
        this.text = text;
        this.distance = distance;
    }

    public String getArrowDirection() {
        return arrowDirection;
    }

    public void setArrowDirection(String arrowDirection) {
        this.arrowDirection = arrowDirection;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getDistance() {
        return distance;
    }

    public void setDistance(String distance) {
        this.distance = distance;
    }

    public String getArrowType() {
        return arrowType;
    }

    public void setArrowType(String arrowType) {
        this.arrowType = arrowType;
    }

    @Override
    public String toString() {
        return text + " " + distance + " - ArrowDirection: " + arrowDirection + " - ArrowType: " + arrowType;
    }
}
