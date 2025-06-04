import router from "@adonisjs/core/services/router";

const PacientesController = () => import("#controllers/pacientes_controller");

router.group(() => {
    router.post('/register', [PacientesController, 'create'])
}).prefix("pacientes")