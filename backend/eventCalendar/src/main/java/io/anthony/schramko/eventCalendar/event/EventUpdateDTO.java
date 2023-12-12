package io.anthony.schramko.eventCalendar.event;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.format.annotation.DateTimeFormat;

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
	 @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;
	
	@Getter
	@Setter
	@DateTimeFormat(pattern = "HH:mm")
    private LocalTime startTime;
	
	@Getter
	@Setter
	@DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate endDate;
	
	@Getter
	@Setter
	@DateTimeFormat(pattern = "HH:mm")
    private LocalTime endTime;
	
	@Getter
	@Setter
	
	private String category;
	
	@Getter
	@Setter
	private String location;
}
