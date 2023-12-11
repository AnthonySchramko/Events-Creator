package event;


import java.util.Date;

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
	@Getter
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
	private String startDate;
	
	@Column
	@Getter
	@Setter
	private String startTime;
	
	@Column
	@Getter
	@Setter
	private String endDate;
	
	@Column
	@Getter
	@Setter
	private String endTime;
	
	@Column
	@Getter
	@Setter
	private String category;
	
	@Column
	@Getter
	@Setter
	private String location;
	
	public Event() {}
	
	public Event(String title, String details, Date createdAt, String startDate, String startTime, String endDate, String endTime, String category, String location) {
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
