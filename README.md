# FlyMil

A live tracking tool for government and military aircraft. This project leverages unfiltered ADS-B, Mode S and MLAT feeders provided by enthusiasts. This tool provides a user-friendly interface to monitor different countries government and military movements in the air.

<p align="center">
    <img src="https://github.com/v0rkath/FlyMil/blob/main/images/flymil.png"/>
</p>

## Information

FlyMil uses the [ADS-B Exchange API](https://adsbexchange.com/) to retrieve real-time data of military aircraft. ADS-B exchange collects data from a worldwide network of ADS-B receivers, ensuring comprehensive coverage and accurate information. If you're interested in learning more about what ADS-B is then I recommend this [video](https://www.youtube.com/watch?v=F-v54MlxMIo).

## Features

- Displays only military and government aircraft.
- Aircraft information displayed when selected:
  - Callsign
  - Registration
  - Country of Registration
  - Manufacturer
  - Model
  - Type
  - Ground speed
  - True airspeed
  - Indicated airspeed
  - Barometric Altitude
  - Track
  - Position
- Ability to filter by country of registration.
- Aircraft icons to identify which type of aircraft it is.
  - Fixed-wing (prop-style, private jet-style, 4-engines, 2-engines)
  - Rotory-wing (helicopters, apache specific icon)
  - Drones
  - Tiltrotor

## Installation

Use `npm` to install the required dependencies.

```cmd
npm install
```

FlyMil uses the [ADS-B Exchange API](https://adsbexchange.com/) so to run the project successfully you will have to purchase an API key.

## Getting Started

To get started with FlyMil, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/v0rkath/FlyMil.git
   ```

2. Navigate to the project directory:

   ```sh
   cd FlyMil
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Obtain an API key from [ADS-B Exchange](https://adsbexchange.com/).
5. The project has been freshly converted to a monorepo using npm workspaces. No merged commands have been created at this time.

   ```sh
   npm run dev -w @flymil/client // Start up client
   npm start -w @flymil/server // Start up up server
   ```
