package io.anthony.schramko.eventCalendar.event;

import java.time.LocalTime;
import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;


public class EventCreateDTO {
	
    @Getter
    @Setter
    @NotBlank(message = "Title cannot be blank")
    private String title;

    @Getter
    @Setter
    @NotBlank(message= "Must include details about the event")
    private String details;

    @Getter
    @Setter
    @NotNull(message = "Must have a start date")
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private LocalDate startDate;

    @Getter
    @Setter
    @NotNull(message = "Must have a start time")
    @DateTimeFormat(pattern = "HH:mm")
    private LocalTime startTime;

    @Getter
    @Setter
    @NotNull(message = "Must have an end date")
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private LocalDate endDate;

    @Getter
    @Setter
    @NotNull(message = "Must have an end time")
    @DateTimeFormat(pattern = "HH:mm")
    private LocalTime endTime;

    @Getter
    @Setter
    @NotBlank(message = "Must state what category the event is for")
    private String category;

    @Getter
    @Setter
    private String location;
}
