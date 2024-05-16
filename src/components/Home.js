import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Home = () => {
  return (
    <div className="justify-center">
      <div className="contact-container w-full   bg-gradient-to-r from-cyan-500 to-blue-500 p-2 text-black relative">
        <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
          <div className=""></div>
          <div className="flex justify-center items-center bg-gradient-to-r from-blue-600 mb-5">
            <form>
              <p className="flex text-2xl py-2">Boat Number</p>
              <input
                type="number"
                name="Boat number"
                placeholder="Enter Boat number"
                className="p-2 flex mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              />

              <p className="text-2xl py-2">Fuel Measure</p>
              <input
                type="number"
                name="Fuel measure"
                placeholder="Enter fuel measure"
                className="p-2 flex mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              />
              <p className="text-2xl py-2">Mileage</p>
              <input
                type="number"
                name="Mileage"
                placeholder="Enter mileage"
                className="p-2 flex mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              />
              
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="mb-4 lg:mb-0 lg:mr-4">
                  <p className="text-2xl py-2">Start time</p>
                  <input
                    type="number"
                    name="start Time"
                    placeholder="Enter starting time"
                    className="p-2 flex bg-transparent border-2 rounded-md text-white focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4 lg:mb-0 lg:ml-4">
                  <p className="text-2xl py-2">End time</p>
                  <input
                    type="number"
                    name="End time"
                    placeholder="Enter ending time"
                    className="p-2 flex bg-transparent border-2 rounded-md text-white focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="mb-4 lg:mb-0 lg:mr-4">
                  <p className="text-2xl py-2">Start point</p>
                  <input
                    type="number"
                    name="start point"
                    placeholder="Enter starting point"
                    className="p-2 flex bg-transparent border-2 rounded-md text-white focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4 lg:mb-0 lg:ml-4">
                  <p className="text-2xl py-2">End point</p>
                  <input
                    type="number"
                    name="Ending point"
                    placeholder="Enter ending point"
                    className="p-2 flex bg-transparent border-2 rounded-md text-white focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div>
                <p className="text-2xl py-2">Near location:</p>
              </div>
            </form>
          </div>
          <LoadScript googleMapsApiKey="AIzaSyDdhan5LH2WFobuYY7il0VxmpJdoCbojok">
            <GoogleMap
              id="map"
              mapContainerStyle={{
                height: "350px",
                width: "100%",
              }}
              center={{
                lat: 9.623139,
                lng: 76.283712,
              }}
              zoom={11}
            />
          </LoadScript>
          <button className="text-white bg-gradient-to-r from-red-500 to-grey-500 px-4 py-4 mt-4 mb-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Cancel Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
