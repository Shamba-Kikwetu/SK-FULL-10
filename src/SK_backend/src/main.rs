use std::collections::HashMap;
use warp::{Filter, Reply};
use serde::{Serialize, Deserialize};
mod modules;


#[derive(Debug, Clone, Serialize, Deserialize)]
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

    fn register_user(
        &mut self,
        name: String,
        age: u64,
        city: String,
        phone_number: String,
        document: String,
        email: String,
    ) -> User {
        let id = format!("user_{}", self.registered_users.len() + 1);
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

#[tokio::main]
async fn main() {
    let user_registration = warp::any().map(move || UserRegistration::new());

    let register_user_route = warp::path("api")
     .and(warp::path("users"))
     .and(warp::path("register"))
     .and(warp::post())
     .and(warp::body::json())
     .and(user_registration.clone())
     .and_then(register_user_handler)
     .boxed();


     let get_user_details_route = warp::path("api/users/details")
        .and(warp::get())
        .and(warp::path::param::<String>())
        .and(user_registration.clone())
        .and_then(get_user_details_handler)
        .boxed(); // Add .boxed() to convert the closure to a boxed future

    let routes = register_user_route.or(get_user_details_route);

    warp::serve(routes).run(([127, 0, 0, 1], 3030)).await;
}

async fn register_user_handler(
    user: User,
    user_registration: UserRegistration,
) -> Result<impl Reply, warp::Rejection> {
    let mut user_registration = user_registration;
    let registered_user: User = user_registration.register_user(
        user.name.clone(),
        user.age,
        user.city.clone(),
        user.phone_number.clone(),
        user.document.clone(),
        user.email.clone(),
    );

    // Print a success message
    println!("User registered successfully. Welcome, {}!", registered_user.name);

    Ok(warp::reply::json(&user))
}

   


async fn get_user_details_handler(
    user_id: String,
    user_registration: UserRegistration,
) -> Result<impl Reply, warp::Rejection> {
    let user_registration: UserRegistration = user_registration;
    if let Some(user) = user_registration.get_user_details(&user_id) {
        Ok(warp::reply::json(user))
    } else {
        Err(warp::reject::not_found())
    }
}
 





