import router from '@adonisjs/core/services/router'

router.resource('pacientes', () => import('#controllers/pacientes_controller')).apiOnly()
router.resource('medicos', () => import('#controllers/medicos_controller')).apiOnly()
router.resource('convenios', () => import('#controllers/convenios_controller')).apiOnly()
router.resource('parentescos', () => import('#controllers/parentescos_controller')).apiOnly()
router.resource('tipo_sanguineos', () => import('#controllers/tipo_sanguineos_controller')).apiOnly()
router.resource('documentos_prova', () => import('#controllers/documentos_prova_controller')).apiOnly()
