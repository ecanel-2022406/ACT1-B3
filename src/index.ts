import { GestorIncidentes } from "./GestorIncidentes.js";
import type { Prioridad } from "./types.js";
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sistema =
    new GestorIncidentes();

let contador = 1;

function preguntar(texto: string): Promise<string> {
    return new Promise(
        resolve =>
            rl.question(
                texto,
                resolve
            )
    );
}

async function registrarIncidente() {
    const titulo =
        await preguntar(
            "Ingrese el título de la falla: "
        );
    const descripcion =
        await preguntar(
            "Ingrese descripción: "
        );
    const reportadoPor =
        await preguntar(
            "Ingrese quién reporta: "
        );
    const prioridad =
        (
            await preguntar(
                "Prioridad (baja/media/alta): "
            )
        ) as Prioridad;
    sistema.agregar({
        id:
            contador++,

        titulo,
        descripcion,
        reportadoPor,
        prioridad,
        estado:
            "abierto",
        creacion:
            new Date()
    });

    const otra =
        await preguntar(
            "\n¿Desea registrar otra falla? (si/no): "
        );
    if (
        otra
            .toLowerCase()
            === "si"
    ) {
        registrarIncidente();
    }
    else {
        sistema.mostrar();
        rl.close();
    }
}

registrarIncidente();