# PePe Aggregator

PePe Aggregator is a decentralized application (dApp) that allows users to aggregate and track their PePe NFTs (Non-Fungible Tokens). The application provides features to register new PePe NFTs, retrieve information about specific PePe NFTs, and more.

## Features

- Register a new PePe NFT with a name and score.
- Retrieve information about a specific PePe NFT.
- Track and manage your collection of PePe NFTs.

## Technologies Used

- Solidity: Smart contract development language.
- Hardhat: Ethereum development environment.
- React: JavaScript library for building user interfaces.
- Web3.js: Library for interacting with the Ethereum blockchain.
- PostgreSQL: Relational database for storing PePe NFT information.
- Express: Web framework for building the back-end API.

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- PostgreSQL database
- Ethereum provider (e.g., Ganache, Infura)

### Installation

1. Clone the repository:

```
git clone <repository-url>
```

2. Navigate to the project folder:

```
cd pepe-aggregator
```

3. Install the dependencies:

```
npm install
```

4. Set up the environment variables:

Create a `.env` file in the root folder and provide the following values:

```
DB_CONNECTION_STRING=<your-database-connection-string>
API_URL=<your-ethereum-provider-url>
PRIVATE_KEY=<your-private-key>
```

### Usage

1. Start the back-end server:

```
npm run start:backend
```

2. Start the front-end development server:

```
npm run start:frontend
```

3. Access the application in your web browser:

```
http://localhost:3000
```

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```

