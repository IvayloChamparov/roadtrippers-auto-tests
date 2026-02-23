# roadtrippers-auto-tests

## 1. Project Overview
This project contains automated tests for Roadtrippers.com.  
Tests are written using **Cypress** with a Page Object Model structure.

---

## 2. Prerequisites
Make sure you have installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)
- VS Code or any code editor (optional)

## 3. Project Structure
roadtrippers-auto-tests/
│
├── cypress.env.json # Environment variables (username/password)
├── cypress.config.js # Cypress configuration
├── autoTests/
│ ├── pages/
│ │ ├── homePage.js # Homepage POM
│ │ ├── loginModal.js # Login modal POM
│ │ └── tripPage.js # TripPage POM
│ └── e2e/
│ └── createTripsTests.cy.js # Test suite
├── screenshots/ # Optional: screenshots after test runs
└── README.md

## 4. Setup Instructions

1. Clone the repository:
git clone <https://github.com/IvayloChamparov/roadtrippers-auto-tests.git>

2.  Install dependencies:
npm install

3. Open Cypress
npx cypress open

## 5. Author / Submission Notes

Candidate: Ivaylo Champarov

Submission includes:

Automated tests (Cypress)

POM classes (HomePage, LoginModal, TripPage)

README with setup, execution, and CI/CD instructions

Estimated time spent: [10]
