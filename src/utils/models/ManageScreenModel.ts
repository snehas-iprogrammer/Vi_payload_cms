import mongoose from 'mongoose'

const ManageScreenSchema = new mongoose.Schema(
  {
    app_version: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'app_version',
    },
  },
  { strict: false },
)

const ManageScreenModel =
  mongoose.models.Manage || mongoose.model('Manage', ManageScreenSchema, 'banner_manages')

export default ManageScreenModel
