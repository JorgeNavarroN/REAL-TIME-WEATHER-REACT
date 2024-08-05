export const Buscador = ({ onClickOpen }) => {
    return (
        <button onClick={onClickOpen} className="bg-black/50 text-white/50 backdrop-blur-sm cursor-pointer rounded-full py-3 w-full text-lg hover:bg-cyan-950 active:bg-slate-900 transition-colors duration-200" type="text">
            Buscar: (Ejemplo: Londres, México, Perú)
        </button>
    )
}