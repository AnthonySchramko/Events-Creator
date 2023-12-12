package io.anthony.schramko.eventCalendar.event;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @Getter
    @Setter
    private String title;

    @Column
    @Getter
    @Setter
    private String details;

    @Column
    @Getter
    @Setter
    private Date createdAt;

    @Column
    @Getter
    @Setter
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;

    @Column
    @Getter
    @Setter
    @DateTimeFormat(pattern = "HH:mm")
    private LocalTime startTime;

    @Column
    @Getter
    @Setter
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate endDate;

    @Column
    @Getter
    @Setter
    @DateTimeFormat(pattern = "HH:mm")
    private LocalTime endTime;

    @Column
    @Getter
    @Setter
    private String category;

    @Column
    @Getter
    @Setter
    private String location;

    public Event() {}

    public Event(String title, String details, Date createdAt, LocalDate startDate, LocalTime startTime, LocalDate endDate, LocalTime endTime, String category, String location) {
        this.title = title;
        this.details = details;
        this.createdAt = createdAt;
        this.startDate = startDate;
        this.startTime = startTime;
        this.endDate = endDate;
        this.endTime = endTime;
        this.category = category;
        this.location = location;
    }
}
