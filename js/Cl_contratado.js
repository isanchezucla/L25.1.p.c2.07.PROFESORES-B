import Cl_profesor from "./Cl_profesor.js";

export default class Cl_contratado extends Cl_profesor {
    constructor(nombre, bono, cntHoras) {
        super(nombre, bono);
        this.cntHoras = cntHoras;
    }
calcularSueldo() {
    return (this.cntHoras * 10) + this.bono;
    }
}