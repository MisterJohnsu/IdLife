import router from "@adonisjs/core/services/router";

const PacientesController = () => import("#controllers/pacientes_controller");
const DocumentosProvaController = () => import("#controllers/documentos_prova_controller");

router.group(() => {
    router.post('/register', [PacientesController, 'create'])
    router.put('/:id', [PacientesController, 'update'])
    router.get('/:id', [PacientesController, 'show'])
    router.delete('/:id', [PacientesController, 'destroy'])
}).prefix("pacientes")


router.group(() => {
    router.post('/register', [DocumentosProvaController, 'create'])
}).prefix("documentos")
