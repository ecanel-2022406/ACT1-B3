"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorIncidentes = void 0;
class GestorIncidentes {
    constructor() {
        this.incidentes = [];
    }
    agregar(incidente) {
        this.incidentes.push(incidente);
        console.log("Incidente registrado");
    }
    mostrar() {
        console.log("\nLISTA DE INCIDENTES\n");
        this.incidentes.forEach(i => {
            console.log(i);
        });
    }
    actualizarEstado(id, nuevoEstado) {
        const encontrado = this.incidentes.find(i => i.id === id);
        if (encontrado) {
            encontrado.estado =
                nuevoEstado;
            console.log("Estado actualizado");
        }
    }
}
exports.GestorIncidentes = GestorIncidentes;
//# sourceMappingURL=GestorIncidentes.js.map