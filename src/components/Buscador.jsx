import { Container } from "./Container"

export const Buscador = () => {
    return (
        <input 
        className="bg-black/50 backdrop-blur-sm cursor-pointer rounded-full px-6 py-3 grid gap-x-10 w-full text-lg" type="text" placeholder="Buscar: ejemplo - Londres, México, Perú" />
    )
}