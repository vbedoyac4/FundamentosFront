export class DetalleCasos {
    constructor(
        public DetalleCasoId: number,
        public CasoId: number,
        public PasoSolicitudId: number,
        public Comentario: string,
        public EstadoCaso: number,
        public EstadoProceso: number,
        public UserId: number,
    ) {

    }
}
