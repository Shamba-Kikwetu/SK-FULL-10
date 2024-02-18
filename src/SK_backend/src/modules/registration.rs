pub mod registrations{
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

    fn get_registered_user(&self) -> Option<&User> {
        self.registered_users.get("some_generated_id") // Replace with the actual user ID
    }

    fn get_user(&self, requester: &str) -> Option<&User> {
        self.registered_users.get(requester)
    }

    fn delete_user(&mut self, caller: &str) -> bool {
        if self.registered_users.contains_key(caller) {
            self.registered_users.remove(caller);
            true
        } else {
            false
        }
    }

    fn update_user(&mut self, caller: &str, name: String, age: u64, city: String, phone_number: String, document: String, email: String) -> bool {
        if let Some(user) = self.registered_users.get_mut(caller) {
            user.name = name;
            user.age = age;
            user.city = city;
            user.phone_number = phone_number;
            user.document = document;
            user.email = email;
            true
        } else {
            false
        }
    }
}

fn main() {
    let mut user_registration = UserRegistration::new();

    let user = user_registration.register_user(
        "John Doe".to_string(),
        30,
        "Cityville".to_string(),
        "123456789".to_string(),
        "ID123".to_string(),
        "john@example.com".to_string(),
    );

    println!("Registered User: {:?}", user);

    if let Some(registered_user) = user_registration.get_registered_user() {
        println!("Get Registered User: {:?}", registered_user);
    }

    if let Some(user) = user_registration.get_user("some_generated_id") {
        println!("Get User by ID: {:?}", user);
    }

    user_registration.update_user(
        "some_generated_id",
        "Updated Name".to_string(),
        31,
        "New City".to_string(),
        "987654321".to_string(),
        "Updated ID".to_string(),
        "updated.email@example.com".to_string(),
    );

    if let Some(updated_user) = user_registration.get_user("some_generated_id") {
        println!("Updated User: {:?}", updated_user);
    }

    if user_registration.delete_user("some_generated_id") {
        println!("User Deleted");
    }
}
}