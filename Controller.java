package Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Model.Tourist;
import Service.Tourist_Service;


@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/api")
public class Controller {
	
	@Autowired
	private Tourist_Service touristservice;
	
	@PostMapping("save-tourist")
	public boolean saveTourist(@RequestBody Tourist tourist) {
		 return touristservice.saveTourist(tourist);
		
	}
	
	@GetMapping("tourists-list")
	public List<Tourist> alltourists() {
		 return touristservice.getTourists();
	}
	
	
	@DeleteMapping("delete-tourist/{tourist_id}")
	public boolean deleteTourist(@PathVariable("tourist_id") int tourist_id,Tourist tourist) {
		tourist.setTourist_id(tourist_id);
		return touristservice.deleteTourist(tourist);
	}

	@GetMapping("tourist/{tourist_id}")
	public List<Tourist> alltouristByID(@PathVariable("tourist_id") int tourist_id,Tourist tourist) {
		tourist.setTourist_id(tourist_id);
		 return touristservice.getTouristByID(tourist);
		
	}
	
	@PostMapping("update-tourist/{tourist_id}")
	public boolean updateTourist(@RequestBody Tourist tourist,@PathVariable("tourist_id") int tourist_id) {
		tourist.setTourist_id(tourist_id);
		return touristservice.updateTourist(tourist);
	}
}


