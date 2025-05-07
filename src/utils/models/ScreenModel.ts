import mongoose from 'mongoose'

const AppVersionSchema = new mongoose.Schema({}, { strict: false })

const ScreenModel =
  mongoose.models.AppVersion || mongoose.model('Screens', AppVersionSchema, 'banner_screen')

export default ScreenModel
