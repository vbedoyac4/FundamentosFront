export class Proyecto {
    constructor(
        public IdProyecto: number,
        public proyecto: string,
        public FechaInicio: string,
        public FechaCierre: string,
        public FechaEstimada: string,
        public Estado: string,
        public ImporteTotal: number,
        public Avance: string,
        public IdCliente: number,
        public IdActividad: number,
        public IdUser: number,
    ) {

    }
}
