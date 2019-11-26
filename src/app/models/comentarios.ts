export class ComentariosCaso {
    constructor(
        public ComentarioId: number,
        public Comentario: string,
        public UserId: number,
        public DetalleCasoId: number,
        public Fecha: Date,
        public Documento: File,
    ) {

    }
}
