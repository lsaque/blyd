package kodal.blyd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class BlydApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlydApplication.class, args);
	}

}
