import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { IoLocationSharp } from "react-icons/io5";
import { MdCancelPresentation } from "react-icons/md";

import "leaflet/dist/leaflet.css"

const LocationModal = ({ setIsOpen, latitude, longitude }) => {
    return (
        <div
            className="fixed inset-0 z-10 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
                    &#8203;
                </span>

                <div
                    className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl  sm:my-8 w-full sm:max-w-2xl h-[400px] sm:p-6 sm:align-middle"

                >
                    <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[latitude, longitude]}>
                            {/* <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup> */}
                            {/* <IoLocationSharp className='text-2xl text-red-600' /> */}
                        </Marker>
                    </MapContainer>

                    <div className='flex justify-end items-center mt-6'>
                        <button onClick={() => setIsOpen(false)} className="text-2xl text-blue-500"><MdCancelPresentation /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationModal;