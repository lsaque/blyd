package kodal.blyd.dto;

public class ActivityCardAdviceDTO {

    private long id;
    private String name, adviceName, adviceLocal, timeDuration;

    public ActivityCardAdviceDTO() {}

    public ActivityCardAdviceDTO(long id, String name, String adviceName, String adviceLocal, String timeDuration) {
        this.id = id;
        this.name = name;
        this.adviceName = adviceName;
        this.adviceLocal = adviceLocal;
        this.timeDuration = timeDuration;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getAdviceName() {
        return adviceName;
    }

    public void setAdviceName(String adviceName) {
        this.adviceName = adviceName;
    }

    public String getAdviceLocal() {
        return adviceLocal;
    }

    public void setAdviceLocal(String adviceLocal) {
        this.adviceLocal = adviceLocal;
    }

    public String getTimeDuration() {
        return timeDuration;
    }

    public void setTimeDuration(String timeDuration) {
        this.timeDuration = timeDuration;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
