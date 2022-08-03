package DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import Model.Tourist;

@Repository
public class Tourist_DAO_Imp  implements Tourist_DAO{

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public boolean saveTourist(Tourist tourist) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().save(tourist);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Tourist> getTourists() {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Tourist> query=currentSession.createQuery("from Tourist", Tourist.class);
		List<Tourist> list=query.getResultList();
		return list;
	}

	@Override
	public boolean deleteTourist(Tourist tourist) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().delete(tourist);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Tourist> getTouristByID(Tourist tourist) {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Tourist> query=currentSession.createQuery("from Tourist where tourist_id=:tourist_id", Tourist.class);
		query.setParameter("tourist_id", tourist.getTourist_id());
		List<Tourist> list=query.getResultList();
		return list;
	}

	@Override
	public boolean updateTourist(Tourist tourist) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().update(tourist);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	

}
