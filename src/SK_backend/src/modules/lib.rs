pub mod lib {
use std::collections::HashMap;

#[derive(Debug, Clone)]
struct User {
    id: String,
    name: String,
    age: u64,
    city: String,
    phone_number: String,
    document: String,
    email: String,
}

#[derive(Debug, Clone)]
struct UserRegistration {
    registered_users: HashMap<String, User>,
}

impl UserRegistration {
    fn new() -> Self {
        Self {
            registered_users: HashMap::new(),
        }
    }

    fn register_user(&mut self, name: String, age: u64, city: String, phone_number: String, document: String, email: String) -> User {
        let id = "some_generated_id".to_string(); // You may generate an appropriate ID here
        let user = User {
            id: id.clone(),
            name: name.clone(),
            age,
            city: city.clone(),
            phone_number: phone_number.clone(),
            document: document.clone(),
            email: email.clone(),
        };
        self.registered_users.insert(id, user.clone());
        user
    }

    fn get_user_details(&self, user_id: &str) -> Option<&User> {
        self.registered_users.get(user_id)
    }
}

#[derive(Debug, Clone)]
struct Photo {
    url: String,
    description: String,
}

#[derive(Debug, Clone)]
struct Land {
    id: u64,
    area: u64,
    city: String,
    state: String,
    land_price: u64,
    property_pid: u64,
    physical_survey_number: u64,
    ipfs_hash: String,
    document: String,
    owner: String, // Assuming Principal is represented as a String
    verified: bool,
    photo: Photo,
}

#[derive(Debug, Clone)]
struct LandRegistration {
    lands: HashMap<u64, Land>,
}

impl LandRegistration {
    fn new() -> Self {
        Self {
            lands: HashMap::new(),
        }
    }

    fn register_land(&mut self, land: Land) {
        self.lands.insert(land.id, land);
    }

    fn get_lands(&self) -> Vec<Land> {
        self.lands.values().cloned().collect()
    }

    fn search_land_by_id(&self, id: u64) -> Option<&Land> {
        self.lands.get(&id)
    }

    async fn verify_land_details(&self, _pid: u64, _psn: u64, _hsh: &str, _doc: &str) -> bool {
        // Motoko's verifyLandDetails always returns true; you might need to implement actual verification logic here.
        true
    }

    async fn add_verified_land(&mut self, owner: &str, pid: u64, psn: u64, hsh: &str, doc: &str) {
        if let Some(land) = self.lands.get_mut(&pid) {
            land.verified = true;
            land.owner = owner.to_string();
        } else {
            // Assuming you want to create a new Land if not found
            let new_land = Land {
                id: pid,
                area: 0, // Assign appropriate default values
                city: String::new(),
                state: String::new(),
                land_price: 0,
                property_pid: pid,
                physical_survey_number: psn,
                ipfs_hash: hsh.to_string(),
                document: doc.to_string(),
                owner: owner.to_string(),
                verified: true,
                photo: Photo {
                    url: String::new(),
                    description: String::new(),
                },
            };
            self.lands.insert(pid, new_land);
        }
    }
}

}