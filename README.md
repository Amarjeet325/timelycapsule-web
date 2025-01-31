# TimelyCapsule

TimelyCapsule is a web-based application that empowers users to create, seal, and send time-locked messages or media capsules. These capsules unlock at a specified date and time and can include text, images, videos, or cryptocurrency payments. The platform blends Web2 and Web3 technologies to provide a seamless and engaging experience.

## Features

- Create and schedule time-locked capsules
- Support for text, images, videos, and cryptocurrency gifts
- Hybrid Web2 and Web3 architecture
- Web2-based capsule integrity and storage
- Web3-powered subscription payments and in-app purchases
- Guest and registered user accessibility
- Secure and scalable infrastructure
- Customizable capsule delivery settings

## Tech Stack

TimelyCapsule is built using modern web technologies:

- *Frontend:* Next.js, React, Tailwind CSS
- *Backend:* Node.js, Express
- *Database:* MongoDB
- *File Storage:* AWS S3
- *Blockchain:* Cairo, Starknet
- *Authentication:* NextAuth.js
- *Payments:* Web3-based transactions

## Installation & Setup

To run the project locally, follow these steps:

1. *Clone the repository:*
   bash
   git clone https://github.com/enbliq/timelycapsule-web.git
   cd timelycapsule-web
   

2. *Install dependencies:*
   bash
   npm install
   

3. *Set up environment variables:*
   - Create a .env.local file in the root directory.
   - Add the following line to the file:
     
     NEXTAUTH_SECRET=set_to_a_random_text
     

4. *Run the development server:*
   bash
   npm run dev
   

   The application will be available at http://localhost:3000.

## Contribution Guidelines

We welcome contributions to TimelyCapsule! Follow these steps to contribute:

1. *Fork the repository* on GitHub.
2. *Clone your forked repository*:
   bash
   git clone https://github.com/your-username/timelycapsule-web.git
   
3. *Create a new branch* for your feature or bug fix:
   bash
   git checkout -b feature-name
   
4. *Make your changes and commit*:
   bash
   git add .
   git commit -m "Describe your changes"
   
5. *Push to your fork*:
   bash
   git push origin feature-name
   
6. *Submit a Pull Request (PR)* to the main repository.

## License

TimelyCapsule is open-source and licensed under the MIT License.

## Contact

For any questions, feel free to reach out via GitHub Issues or visit the [repository](https://github.com/enbliq/timelycapsule-web).