# Yahuda 

## Architecture

| Name                    | Service              | Container              | Tech                 |
|-------------------------|----------------------|------------------------|----------------------|
| Client                  | client               | client                 | Create React App     |
| Billing                 | billing              | billing                | Node, Express        |
| Billing DB              | billing              | billing-db             | MongoDb              |
| Location Management     | location-management  | location-management    | Node, Express        |
| Location Management DB  | location-management  | location-management-db | MongoDb              |
| Notifications           | notifications        | notifications          | Node, Express        |
| Notifications DB        | notifications        | notifications-db       | MongoDb              |
| User Management         | user-management      | user-management        | Node, Express        |
| User Management DB      | user-management      | user-management-db     | MongoDb              |


### Prerequsite

1. Install nvm (node version manager)
2. Install yarn (globally on you machine)
3. Install Docker Desktop and make suer Docker is running

### Step to Run the Project

1. Run this command in root of project: docker-compose build
2. Run this command in root of project: docker-compose up

=> To Stop and remove the containers: docker-compose down
