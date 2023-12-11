package event;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

public class EventCreateDTO {
	@Getter
	@Setter
	@NotBlank
	private String title;
	
	@Getter
	@Setter
	@NotBlank
	private String details;
	
	@Getter
	@Setter
	@NotBlank
	private String startDate;
	
	@Getter
	@Setter
	@NotBlank
	private String startTime;
	
	@Getter
	@Setter
	@NotBlank
	private String endDate;
	
	@Getter
	@Setter
	@NotBlank
	private String endTime;
	
	@Getter
	@Setter
	@NotBlank
	private String category;
	
	@Getter
	@Setter
	private String location;
	
}
