package Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Touristdata")
public class Tourist {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int tourist_id;
	private String tourist_name;
	private String tourist_lname;
	private String tourist_gender;
	private int tourist_age;
	
	
	
	
	
	public String getTourist_gender() {
		return tourist_gender;
	}
	public void setTourist_gender(String tourist_gender) {
		this.tourist_gender = tourist_gender;
	}
	public int getTourist_age() {
		return tourist_age;
	}
	public void setTourist_age(int tourist_age) {
		this.tourist_age = tourist_age;
	}
	private String tourist_place;
	private int tourist_numberofdate;
	
	
	public int getTourist_id() {
		return tourist_id;
	}
	public void setTourist_id(int tourist_id) {
		this.tourist_id = tourist_id;
	}
	public String getTourist_name() {
		return tourist_name;
	}
	public void setTourist_name(String tourist_name) {
		this.tourist_name = tourist_name;
	}
	public String getTourist_lname() {
		return tourist_lname;
	}
	public void setTourist_lname(String tourist_lname) {
		this.tourist_lname = tourist_lname;
	}
	
	public String getTourist_place() {
		return tourist_place;
	}
	public void setTourist_place(String tourist_place) {
		this.tourist_place = tourist_place;
	}
	public int getTourist_numberofdate() {
		return tourist_numberofdate;
	}
	public void setTourist_numberofdate(int tourist_numberofdate) {
		this.tourist_numberofdate = tourist_numberofdate;
	}
	

}
