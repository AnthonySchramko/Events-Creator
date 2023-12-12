package io.anthony.schramko.eventCalendar.event;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import exceptions.ValidationException;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class EventService {
	
	@Autowired
	private EventRepository eventRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	public List<Event> getAll(){
		return this.eventRepository.findAll();
	}
	
	public Optional<Event> getById(Long id){
		return this.eventRepository.findById(id);
	}
	
	public Event createEvent(EventCreateDTO data) {
		Event newEvent = modelMapper.map(data,  Event.class);
		newEvent.setCreatedAt(new Date());
		Event created = this.eventRepository.save(newEvent);
		
		return created;
	}
	public boolean deleteById(Long id) {
		Optional<Event> foundEvent = this.eventRepository.findById(id);
		if(foundEvent.isPresent()) {
			this.eventRepository.delete(foundEvent.get());
			return true;
		}
		return false;
	}
	public Optional<Event> updateById(Long id, EventUpdateDTO data){
		Optional<Event> foundEvent = this.getById(id);
		
		if(foundEvent.isPresent()) {
			Event toUpdate = foundEvent.get();
			
			
			if(data.getStartDate() != null) {
				LocalDate existingEndDate = toUpdate.getEndDate();
				if(data.getStartDate().isAfter(existingEndDate)) {
					throw new ValidationException("Start date must be same as or before the end date");
				}
			}
			
			if(data.getStartTime() != null) {
				LocalTime existingEndTime = toUpdate.getEndTime();
				if(data.getStartTime().isAfter(existingEndTime)) {
					throw new ValidationException("Start time must be before the end time");
				}
			}
			
			if(data.getEndDate()!=null ) {
				LocalDate existingStartDate = toUpdate.getStartDate();
				
				
				if(data.getEndDate().isBefore(existingStartDate)) {
					throw new ValidationException("End date must be same as or after the start date");
				}
				
			}
			if(data.getEndTime()!=null) {
				LocalTime existingStartTime = toUpdate.getStartTime();
				if(data.getEndTime().isBefore(existingStartTime)) {
					throw new ValidationException("End time must be after the start time");
				}
			}
			modelMapper.map(data, toUpdate);
			
			Event updatedEvent = this.eventRepository.save(toUpdate);
			
			return Optional.of(updatedEvent);
		}
		return foundEvent;
	}
	
}
