import { useCoordsCurrentLocation } from "../services/utils/hooks/UseCurrentLocation"

export const Buscador = ({ onClickOpen, handleClickGeoLocation }) => {
    return (
        <div className="flex flex-row gap-2">
            <button onClick={onClickOpen} className="bg-black/50 text-white/50 backdrop-blur-sm cursor-pointer rounded-full py-3 w-full text-lg hover:bg-cyan-950 active:bg-slate-900 transition-colors duration-200" type="button">
                Buscar: (Ejemplo: Londres, México, Perú)
            </button>
            <button onClick={handleClickGeoLocation} className="bg-black/50 text-white/50 backdrop-blur-sm cursor-pointer rounded-full p-3 text-lg hover:bg-cyan-950 active:bg-slate-900 transition-colors duration-200" type="button">
                <img src="/src/assets/location-32.png" alt="local-location.png" />
            </button>
        </div>
    )
}