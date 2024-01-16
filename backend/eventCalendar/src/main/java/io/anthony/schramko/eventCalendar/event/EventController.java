package io.anthony.schramko.eventCalendar.event;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import exceptions.NotFoundException;
import exceptions.ValidationException;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/")
public class EventController {
	@Autowired
	private EventService eventService;
	
	@GetMapping
	public ResponseEntity<List<Event>> getAll(){
		List<Event> allEvents = this.eventService.getAll();
		
		return new ResponseEntity<>(allEvents,HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Event> getById(@PathVariable Long id){
		Optional<Event> found = this.eventService.getById(id);
		
		if(found.isPresent()) {
			return new ResponseEntity<Event>(found.get(),HttpStatus.OK);
		}
		throw new NotFoundException(String.format("Event with id: %d does not exist. Unable to find event", id));
		
	}
	@PostMapping
	public ResponseEntity<Event> createEvent(@Valid @RequestBody EventCreateDTO data){
		Event newEvent = this.eventService.createEvent(data);
		return new ResponseEntity<Event>(newEvent,HttpStatus.CREATED);
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<Event> deleteById(@PathVariable Long id){
		boolean deleted = this.eventService.deleteById(id);
		if(deleted == true) {
			return new ResponseEntity<>(null,HttpStatus.NO_CONTENT);
			
		}
		throw new NotFoundException(String.format("Event with id: %d does not exist. Unable to delete event",id));
	}
	@PatchMapping("/{id}")
	public ResponseEntity<?> updateById(@PathVariable Long id, @Valid @RequestBody EventUpdateDTO data){
		try {
			Optional<Event> updated = this.eventService.updateById(id,data);
			
			if(updated.isPresent()) {
				return new ResponseEntity<Event>(updated.get(), HttpStatus.OK);
			}
			
			throw new NotFoundException(String.format("Event with id: %d does not exist. Unable to update", id));
		} catch(ValidationException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
		
	}
	
}
