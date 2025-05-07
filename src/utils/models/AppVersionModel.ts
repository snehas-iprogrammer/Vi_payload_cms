import mongoose from 'mongoose'

const AppVersionSchema = new mongoose.Schema({}, { strict: false })

const AppVersionModel =
  mongoose.models.AppVersion || mongoose.model('AppVersion', AppVersionSchema, 'app_versions')

export default AppVersionModel
