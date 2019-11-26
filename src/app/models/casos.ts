export class Casos {
    constructor(
        public CasoId: number,
        public Asunto: string,
        public Mensaje: string,
        public PrioridadId: number,
        public TiempoRespuesta: number,
        public FechaIngreso: Date,
        public TipoSolicitudId: number,
        public TipoCasoId: number,
        public Documento: string,
        public UserId: number,
        public Estado: string,
        public FechaRequerida: Date
    ) {

    }
}
