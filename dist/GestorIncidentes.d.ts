import { Incidente } from "./interfaces.js";
import { EstadoIncidente } from "./types.js";
export declare class GestorIncidentes {
    private incidentes;
    agregar(incidente: Incidente): void;
    mostrar(): void;
    actualizarEstado(id: number, nuevoEstado: EstadoIncidente): void;
}
//# sourceMappingURL=GestorIncidentes.d.ts.map