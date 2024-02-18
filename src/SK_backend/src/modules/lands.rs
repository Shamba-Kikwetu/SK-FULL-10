pub mod lands{
use std::collections::HashMap;

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

#[tokio::main]
async fn main() {
    let mut land_registration = LandRegistration::new();

    // Example usage
    let photo = Photo {
        url: "example.com/photo".to_string(),
        description: "A beautiful land".to_string(),
    };

    let land = Land {
        id: 1,
        area: 1000,
        city: "Cityville".to_string(),
        state: "Stateland".to_string(),
        land_price: 50000,
        property_pid: 123,
        physical_survey_number: 456,
        ipfs_hash: "hash123".to_string(),
        document: "land_document".to_string(),
        owner: "owner_principal".to_string(),
        verified: false,
        photo,
    };

    land_registration.register_land(land.clone());

    let all_lands = land_registration.get_lands();
    println!("All Lands: {:?}", all_lands);

    if let Some(searched_land) = land_registration.search_land_by_id(1) {
        println!("Searched Land: {:?}", searched_land);
    }

    let verified = land_registration.verify_land_details(123, 456, "hash123", "land_document").await;
    println!("Verification Result: {:?}", verified);

    land_registration
        .add_verified_land("new_owner_principal", 123, 456, "hash123", "land_document")
        .await;

    let updated_land = land_registration.search_land_by_id(1);
    println!("Updated Land: {:?}", updated_land);
}
}