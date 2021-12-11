import { Router } from "express"

import { categoryRouter } from './categories.route'

const router = Router()

router.use("/categories", categoryRouter)

export { router }