package event;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
			modelMapper.map(data, toUpdate);
			
			Event updatedEvent = this.eventRepository.save(toUpdate);
			
			return Optional.of(updatedEvent);
		}
		return foundEvent;
	}
	
}
