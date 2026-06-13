import { Incidente } from "./interfaces.js";
import { EstadoIncidente } from "./types.js";
export class GestorIncidentes {

    private incidentes: Incidente[] = [];

    agregar(
        incidente: Incidente
    ): void {
        this.incidentes.push(
            incidente
        );
        console.log("Incidente registrado");
    }

    mostrar(): void {

        console.log("\nLISTA DE INCIDENTES\n");

        this.incidentes.forEach(
            i => {
                console.log(i);
            }
        );
    }

    actualizarEstado(id: number, nuevoEstado: EstadoIncidente): void {
        const encontrado =
            this.incidentes.find(
                i => i.id === id
            );
        if (
            encontrado
        ) {
            encontrado.estado =
                nuevoEstado;
            console.log(
                "Estado actualizado"
            );
        }
    }
}