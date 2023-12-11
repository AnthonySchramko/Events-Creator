package event;

import lombok.Getter;
import lombok.Setter;

public class EventUpdateDTO {
	@Getter
	@Setter
	
	private String title;
	
	@Getter
	@Setter
	
	private String details;
	
	@Getter
	@Setter
	
	private String startDate;
	
	@Getter
	@Setter
	
	private String startTime;
	
	@Getter
	@Setter
	
	private String endDate;
	
	@Getter
	@Setter
	
	private String endTime;
	
	@Getter
	@Setter
	
	private String category;
	
	@Getter
	@Setter
	private String location;
}
