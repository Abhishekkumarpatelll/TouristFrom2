package Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import DAO.Tourist_DAO;
import Model.Tourist;

@Service
@Transactional
public class Tourist_Service_Imp implements Tourist_Service {
 
	@Autowired
	private Tourist_DAO touristdao;
	
	@Override
	public boolean saveTourist(Tourist tourist) {
		return touristdao.saveTourist(tourist);
	}

	@Override
	public List<Tourist> getTourists() {
		return touristdao.getTourists();
	}

	@Override
	public boolean deleteTourist(Tourist tourist) {
		return touristdao.deleteTourist(tourist);
	}

	@Override
	public List<Tourist> getTouristByID(Tourist tourist) {
		return touristdao.getTouristByID(tourist);
	}

	@Override
	public boolean updateTourist(Tourist tourist) {
		return touristdao.updateTourist(tourist);
	}
	
}
