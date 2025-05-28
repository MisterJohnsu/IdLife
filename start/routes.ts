import router from '@adonisjs/core/services/router'

router.resource('medicos', () => import('#controllers/medicos_controller')).apiOnly()
router.resource('pacientes', () => import('#controllers/pacientes_controller')).apiOnly()
router.resource('convenios', () => import('#controllers/convenios_controller')).apiOnly()
router.resource('documentos', () => import('#controllers/documentos_prova_controller')).apiOnly()
router.resource('tiposanguineos', () => import('#controllers/tipo_sanguineos_controller')).apiOnly()