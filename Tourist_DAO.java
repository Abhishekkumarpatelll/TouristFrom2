package DAO;

import java.util.List;

import Model.Tourist;

public interface Tourist_DAO {

	public boolean saveTourist(Tourist tourist);
	public List<Tourist> getTourists();
	public boolean deleteTourist(Tourist tourist);
	public List<Tourist> getTouristByID(Tourist tourist);
	public boolean updateTourist(Tourist tourist);
}
