import router from '@adonisjs/core/services/router'

const PacientesController = () => import('#controllers/pacientes_controller')
const DocumentosController = () => import('#controllers/documentos_prova_controller')
const ConveniosController = () => import('#controllers/convenios_controller')

router
  .group(() => {
    router.post('/register', [PacientesController, 'create'])
    router.put('/:id', [PacientesController, 'update'])
    router.get('/:id', [PacientesController, 'show'])
    router.delete('/:id', [PacientesController, 'destroy'])
  })
  .prefix('pacientes')

router
  .group(() => {
    router.post('/register', [DocumentosController, 'create'])
    router.put('/:id', [DocumentosController, 'update'])
    router.get('/:id', [DocumentosController, 'show'])
    router.delete('/:id', [DocumentosController, 'destroy'])
  })
  .prefix('documentos')

router
  .group(() => {
    router.post('/register', [ConveniosController, 'create'])
    router.put('/:id', [ConveniosController, 'update'])
    router.get('/:id', [ConveniosController, 'show'])
    router.delete('/:id', [ConveniosController, 'destroy'])
  })
  .prefix('convenios')
