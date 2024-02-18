pub mod surveyor {
    use std::collections::{BTreeMap, HashMap};
    #[derive(Clone)]
    #[derive(Debug)]
    struct Surveyor {
        id: u64,
        name: String,
        email: String,
        phone: String,
        address: String,
    }

    pub struct SurveyorComponent {
        surveyors_by_id: BTreeMap<u64, Surveyor>,
        surveyors_by_name: HashMap<String, Surveyor>,
    }

    impl SurveyorComponent {
    fn create_surveyor(&mut self, id: u64, name: String, email: String, phone: String, address: String) {
        let surveyor = Surveyor {
            id,
            name: name.clone(),
            email: email.clone(),
            phone: phone.clone(),
            address: address.clone(),
        };
        self.surveyors_by_id.insert(id, surveyor.clone());
        self.surveyors_by_name.insert(name, surveyor);
    }

    fn update_surveyor(&mut self, id: u64, name: String, email: String, phone: String, address: String) {
        if let Some(surveyor) = self.surveyors_by_id.get_mut(&id) {
            surveyor.name = name.clone();
            surveyor.email = email.clone();
            surveyor.phone = phone.clone();
            surveyor.address = address.clone();
        }
    }

    fn delete_surveyor(&mut self, id: u64) {
        self.surveyors_by_id.remove(&id);
    }

    fn search_surveyor_by_id(&self, id: u64) -> Option<&Surveyor> {
        self.surveyors_by_id.get(&id)
    }

    fn search_surveyor_by_name(&self, name: &str) -> Option<&Surveyor> {
        self.surveyors_by_name.get(name)
    }
}


    fn main() {
        let mut surveyor_component = SurveyorComponent {
            surveyors_by_id: BTreeMap::new(),
            surveyors_by_name: HashMap::new(),
        };

        let surveyor1 = Surveyor {
            id: 1,
            name: "John Doe".to_string(),
            email: "john@example.com".to_string(),
            phone: "123-456-789".to_string(),
            address: "P.O.BOX123".to_string(),};
        println!("{:?}", surveyor1);
        

        // Example usage
        surveyor_component.create_surveyor(1, "John Doe".to_string(), "john@example.com".to_string(), "123456789".to_string(), "123 Main St".to_string());

        if let Some(surveyor) = surveyor_component.search_surveyor_by_id(1) {
            println!("Found surveyor by ID: {:?}", surveyor);
        }

        if let Some(surveyor) = surveyor_component.search_surveyor_by_name("John Doe") {
            println!("Found surveyor by name: {:?}", surveyor);
        }

        surveyor_component.update_surveyor(1, "John Doe".to_string(), "john.doe@example.com".to_string(), "987654321".to_string(), "456 Main St".to_string());

        surveyor_component.delete_surveyor(1);
    }
}
