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

- _Frontend:_ Next.js, React, Tailwind CSS
- _Backend:_ Node.js, Express
- _Database:_ MongoDB
- _File Storage:_ AWS S3
- _Blockchain:_ Cairo, Starknet
- _Authentication:_ NextAuth.js
- _Payments:_ Web3-based transactions

## Installation & Setup

### Prerequisites:

- Node.js 18.x or higher
- npm 8.x or higher
- Docker & Docker Compose (optional, for containerized development)

To run the project locally, follow these steps:

1. _Clone the repository:_
   bash
   git clone https://github.com/enbliq/timelycapsule-web.git
   cd timelycapsule-web

2. _Install dependencies:_
   bash
   npm install

3. _Set up environment variables:_

   - Rename the .env.local to .env

4. _Run the development server:_
   bash
   npm run dev

   The application will be available at http://localhost:3000.

5. \_Build the docker image
   docker build -t timelycapsule-web .
   If it fails the first time, check your internet connection and try again

6. Run the docker container:
   docker run -d -p 3000:3000 timelycapsule-web

## Contribution Guidelines

We welcome contributions to TimelyCapsule! Follow these steps to contribute:

1. _Fork the repository_ on GitHub.
2. _Clone your forked repository_:
   bash
   git clone https://github.com/your-username/timelycapsule-web.git
3. _Create a new branch_ for your feature or bug fix:
   bash
   git checkout -b feature-name
4. _Make your changes and commit_:
   bash
   git add .
   git commit -m "Describe your changes"
5. _Push to your fork_:
   bash
   git push origin feature-name
6. _Submit a Pull Request (PR)_ to the main repository.

## License

TimelyCapsule is open-source and licensed under the MIT License.

## Contact

For any questions, feel free to reach out via GitHub Issues or visit the [repository](https://github.com/enbliq/timelycapsule-web).
